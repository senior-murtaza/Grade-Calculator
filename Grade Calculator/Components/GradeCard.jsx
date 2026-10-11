
export default function GradeCard({ grade, onDelete }) {
  function getLetterGrade(mark) {
    if (mark >= 90) return "A";
    if (mark >= 80) return "B";
    if (mark >= 70) return "C";
    if (mark >= 60) return "D";
    return "F";
  }

  function getStatus(mark) {
    return mark >= 60 ? "Passed" : "Failed";
  }

  return (
    <article className="grade-card">
      <div className="grade-card-header">
        <h3>{grade.subject}</h3>
        <span className={`letter-grade grade-${getLetterGrade(grade.mark)}`}>
          {getLetterGrade(grade.mark)}
        </span>
      </div>

      <p className="mark">
        {grade.mark}<span> / 100</span>
      </p>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${grade.mark}%` }}
        />
      </div>

      <p className={grade.mark >= 60 ? "passed" : "failed"}>
        {getStatus(grade.mark)}
      </p>

      <button
        className="delete-button"
        onClick={() => onDelete(grade.id)}
      >
        Delete
      </button>
    </article>
  );
}
