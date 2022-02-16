function TaskCard(name, status, date) {
  return (
    <div className="TaskCard">
      <p data-testid="task-card-title"> {name} </p>
      <select data-testid="task-card-date" value={status}>
        <option>
          Pending
        </option>
        <option>
          Assigned
        </option>
        <option>
          Completed
        </option>
      </select>
      <p data-testid="task-card-status"> {date} </p>
      <button type="button">Delete</button>
    </div>
  );
}

export default TaskCard;
