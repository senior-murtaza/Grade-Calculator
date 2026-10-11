
import GradeCard from "./GradeCard";

export default function GradeList({ grades, onDelete }) {
  if (grades.length === 0) {
    return <p className="empty-message">No grades found. Add a subject!</p>;
  }

  return (
    <div className="grade-list">
      {grades.map((grade) => (
        <GradeCard
          key={grade.id}
          grade={grade}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
