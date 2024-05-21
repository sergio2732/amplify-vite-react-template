import { Route, Routes } from "react-router-dom";
import Example1 from "../pages/Example1";
import { LegalDocuments } from "../pages/LegalDocuments";
import { NoMatch } from "../pages/NoMatch";
import { Main } from "../pages/Main";

export const AppRouter = () => {
  return (
    <Routes>
      {<Route path="/" element={<Main />} />}
      {<Route path="/example1" element={<Example1 />} />}
      {<Route path="/legalDocuments" element={<LegalDocuments />} />}
      {<Route path="*" element={<NoMatch />} />}
    </Routes>
  );
};