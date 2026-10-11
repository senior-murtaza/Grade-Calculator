
export default function GradeStats({ grades }) {
  function getAverage() {
    if (grades.length === 0) return 0;

    const total = grades.reduce(
      (sum, grade) => sum + grade.mark,
      0
    );

    return total / grades.length;
  }

  function getPassedCount() {
    return grades.filter((grade) => grade.mark >= 60).length;
  }

  function getFailedCount() {
    return grades.filter((grade) => grade.mark < 60).length;
  }

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <p>Total Subjects</p>
        <h2>{grades.length}</h2>
      </div>

      <div className="stat-card">
        <p>Average Mark</p>
        <h2>{getAverage().toFixed(1)}%</h2>
      </div>

      <div className="stat-card">
        <p>Passed</p>
        <h2>{getPassedCount()}</h2>
      </div>

      <div className="stat-card">
        <p>Failed</p>
        <h2>{getFailedCount()}</h2>
      </div>
    </div>
  );
}
