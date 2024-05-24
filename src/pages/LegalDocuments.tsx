import { LegalDocumentsForm } from "../components/LegalDocuments/LegalDocumentsForm";
//import { LegalDocumentsView } from "../components/LegalDocuments/LegalDocumentsView";
import "../styles/LegalDocument.css";

export const LegalDocuments = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Register of legal documents</h1>
      <div className="callItems">
       {/*<LegalDocumentsView />*/}
        <LegalDocumentsForm />
      </div>
    </div>
  );
};