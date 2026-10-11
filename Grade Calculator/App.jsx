
import { useState } from "react";
import GradeForm from "./Components/GradeForm";
import GradeList from "./Components/GradeList";
import GradeStats from "./Components/GradeStats";

const initialGrades = [
  { id: 1, subject: "Mathematics", mark: 92 },
  { id: 2, subject: "English", mark: 84 },
  { id: 3, subject: "Science", mark: 73 },
  { id: 4, subject: "History", mark: 55 },
];

export default function App() {
  const [grades, setGrades] = useState(initialGrades);
  const [search, setSearch] = useState("");

  function addGrade(gradeData) {
    const newGrade = {
      id: Date.now(),
      ...gradeData,
    };

    setGrades((previousGrades) => [
      ...previousGrades,
      newGrade,
    ]);
  }

  function deleteGrade(id) {
    setGrades((previousGrades) =>
      previousGrades.filter((grade) => grade.id !== id)
    );
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function getFilteredGrades() {
    return grades.filter((grade) =>
      grade.subject.toLowerCase().includes(search.toLowerCase())
    );
  }

  function clearGrades() {
    setGrades([]);
  }

  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">ACADEMIC PERFORMANCE</p>
        <h1>Grade Calculator</h1>
        <p>Track your marks and understand your progress.</p>
      </header>

      <GradeStats grades={grades} />

      <section className="panel">
        <h2>Add a Grade</h2>
        <GradeForm onAddGrade={addGrade} />
      </section>

      <section className="panel">
        <div className="section-header">
          <h2>Subject Results</h2>
          <button className="clear-button" onClick={clearGrades}>
            Clear All
          </button>
        </div>

        <input
          className="search-input"
          type="search"
          placeholder="Search subjects..."
          value={search}
          onChange={handleSearch}
        />

        <GradeList
          grades={getFilteredGrades()}
          onDelete={deleteGrade}
        />
      </section>
    </main>
  );
}
