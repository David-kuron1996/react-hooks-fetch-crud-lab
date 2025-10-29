import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar.js";
import QuestionForm from "./QuestionForm.js";
import QuestionList from "./QuestionList.js";

function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;