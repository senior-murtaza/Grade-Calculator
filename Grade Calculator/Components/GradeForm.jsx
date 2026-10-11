
import { useState } from "react";

export default function GradeForm({ onAddGrade }) {
  const [subject, setSubject] = useState("");
  const [mark, setMark] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const numericMark = Number(mark);

    if (
      !subject.trim() ||
      mark === "" ||
      !Number.isFinite(numericMark) ||
      numericMark < 0 ||
      numericMark > 100
    ) {
      alert("Enter a subject and a mark between 0 and 100.");
      return;
    }

    onAddGrade({
      subject: subject.trim(),
      mark: numericMark,
    });

    setSubject("");
    setMark("");
  }

  return (
    <form className="grade-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject name"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Mark (0–100)"
        min="0"
        max="100"
        step="any"
        value={mark}
        onChange={(event) => setMark(event.target.value)}
        required
      />

      <button type="submit">Add Grade</button>
    </form>
  );
}
