function AddForm() {
  return (
    <form>
      <input type="text" placeholder="Nome" />
      <select>
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
      <button>Add Task</button>
    </form>
  );
}

export default AddForm;
