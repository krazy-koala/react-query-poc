const MonthCell = ({ date }) => {
  const num = null;
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
};

export default MonthCell;