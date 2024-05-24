import { Flex, Input, Label, Alert } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import { ToggleButton } from '@aws-amplify/ui-react';
import '../../styles/LegalDocumentsForm.css';

export const LegalDocumentsForm = () => {
  const [hasError, setHasError] = React.useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const validateCaseId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = /^\d+$/.test(e.currentTarget.value);
    setHasError(!onlyNumbers);
  };

  return (
    <>
      <div className='containerFlex'>
        <Flex direction="row" gap="long" className='flex' id='flexId'>
          <Label htmlFor="caseId">Case Id:</Label>
          <Input id="caseId" name="caseId" type="number" hasError={hasError} onChange={validateCaseId} />
          <Label htmlFor="Title">Title:</Label>
          <Input id="TitleDocument" name="Title" type="text" />
        </Flex>
        <Flex direction="row" gap="long" className='flex' id='flexDate'>
          <Label htmlFor="caseTitle">Case title:</Label>
          <Input id="caseTitle" name="caseTitle" type="text" />
          <Label htmlFor="datePublished">Date published:</Label>
          <Input id="datePublished" name="datePublished" type="date" />
        </Flex>
        <Flex direction="row" gap="long" className='flex' id='flexAuthor'>
          <Label htmlFor="Author">Author:</Label>
          <Input id="documentAuthor" name="documentAuthor" type="text" />
        </Flex>
        <Flex direction="row" gap="long" className='flex' id='flexContent'>
          <Label htmlFor="Content">Content:</Label>
          <Input id="documentContent" name="documentContent" type="text" />
        </Flex>
        <ToggleButton onClick={() => setIsAlertVisible(!isAlertVisible)}>
          submit
        </ToggleButton>
        {isAlertVisible ? (
          <Alert variation="info" className='alert'>the document was registrated.</Alert>
        ) : null}
      </div>
    </>
  );
};
