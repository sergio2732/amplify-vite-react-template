import { Flex, Input, Label, Alert } from '@aws-amplify/ui-react';
import { useEffect, useState } from "react";
import { ToggleButton } from '@aws-amplify/ui-react';
import type { Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import React from 'react';

const client = generateClient<Schema>();

console.log("Client:", client);
console.log("Document Model:", client.models.Document);

export const LegalDocumentsForm = () => {
  const [documents, setDocuments] = useState<Array<Schema["Document"]["type"]>>([]);
  const [hasError, setHasError] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const validateCaseId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = /^\d+$/.test(e.currentTarget.value);
    setHasError(!onlyNumbers);
  };

  useEffect(() => {
    if (!client.models.Document) {
      console.error("Document model is not defined");
      return;
    }
    
    const subscription = client.models.Document.observeQuery().subscribe({
      next: (data) => {
        console.log("Documents fetched:", data.items);
        setDocuments(data.items);
      },
      error: (error) => console.error("Error observing documents:", error)
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  function createDocument() {
    const caseId = parseInt((document.getElementById('caseId') as HTMLInputElement)?.value || '0');
    const documentTitle = (document.getElementById('TitleDocument') as HTMLInputElement)?.value || '';
    const caseTitle = (document.getElementById('caseTitle') as HTMLInputElement)?.value || '';
    const datePublished = (document.getElementById('datePublished') as HTMLInputElement)?.value || '';
    const documentAuthor = (document.getElementById('documentAuthor') as HTMLInputElement)?.value || '';
    const documentContent = (document.getElementById('documentContent') as HTMLInputElement)?.value || '';

    if (caseId && documentTitle && caseTitle && datePublished && documentAuthor && documentContent) {
      client.models.Document.create({
        caseId,
        documentTitle,
        caseTitle,
        datePublished,
        documentAuthor,
        documentContent
      }).then(() => {
        setIsAlertVisible(true);
        console.log("Document created successfully");
      }).catch((error) => {
        console.error("Error creating document:", error);
      });
    } else {
      alert("Please fill in all fields.");
    }
  }

  function handleClick() {
    createDocument();
  }

  return (
    <Flex padding={'10px'} direction={"column"} alignItems="center" marginTop="20%" marginBottom="20%">
      <Flex direction="row" gap="small" width="90%">
        <Label htmlFor="caseId">Case Id:</Label>
        <Input id="caseId" name="caseId" type="number" hasError={hasError} onChange={validateCaseId} />
        <Label htmlFor="Title">Title:</Label>
        <Input id="TitleDocument" name="Title" type="text" />
      </Flex>
      <Flex direction="row" gap="long" width="90%">
        <Label htmlFor="caseTitle">Case title:</Label>
        <Input id="caseTitle" name="caseTitle" type="text" />
        <Label htmlFor="datePublished">Date published:</Label>
        <Input id="datePublished" name="datePublished" type="date" />
      </Flex>
      <Flex direction="row" gap="long" className='flex' id='flexAuthor' width="90%">
        <Label htmlFor="Author">Author:</Label>
        <Input id="documentAuthor" name="documentAuthor" type="text" />
      </Flex>
      <Flex direction="row" gap="long" className='flex' id='flexContent' width="90%">
        <Label htmlFor="Content">Content:</Label>
        <Input id="documentContent" name="documentContent" type="text" />
      </Flex>
      <Flex width="100%" justifyContent="center">
        <ToggleButton onClick={handleClick} width="20%">
          Submit
        </ToggleButton>
      </Flex>
      {isAlertVisible && (
        <Alert variation="info" className='alert'>The document was registered.</Alert>
      )}
      <Flex direction="column" width="90%" marginTop="20px">
        {documents.length === 0 ? (
          <p>No documents found.</p>
        ) : (
          documents.map((doc) => (
            <div key={doc.id}>
              <h3>{doc.documentTitle}</h3>
              <p>Case Id: {doc.caseId}</p>
              <p>Case Title: {doc.caseTitle}</p>
              <p>Date Published: {doc.datePublished}</p>
              <p>Author: {doc.documentAuthor}</p>
              <p>Content: {doc.documentContent}</p>
            </div>
          ))
        )}
      </Flex>
    </Flex>
  );
};
