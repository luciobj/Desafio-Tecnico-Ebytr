function TaskCard(name, status, date) {
  return (
    <div className="TaskCard">
      <p data-testid="task-card-title"> {name} </p>
      <p data-testid="task-card-status"> {status} </p>
      <p data-testid="task-card-date"> {date} </p>
    </div>
  );
}

export default TaskCard;
