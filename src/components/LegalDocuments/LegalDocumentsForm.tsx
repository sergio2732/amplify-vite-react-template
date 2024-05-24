import { Flex, Input, Label, Alert } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import { ToggleButton } from '@aws-amplify/ui-react';

export const LegalDocumentsForm = () => {
  const [hasError, setHasError] = React.useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const validateCaseId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = /^\d+$/.test(e.currentTarget.value);
    setHasError(!onlyNumbers);
  };

  return (
    <>
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
          <ToggleButton onClick={() => setIsAlertVisible(!isAlertVisible)} width="20%">
            submit
          </ToggleButton>
        </Flex>
        {isAlertVisible ? (
          <Alert variation="info" className='alert'>the document was registrated.</Alert>
        ) : null}
      </Flex>
    </>
  );
};
