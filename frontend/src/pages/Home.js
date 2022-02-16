import AddForm from "../components/AddForm";
import TaskCard from "../components/TaskCard";

function Home() {
  return (
    <div className="Home">
      <h2 className='Title'>
        To Do List
      </h2>
      {AddForm()}
      <h3>Tasks</h3>
      {TaskCard('Limpar', 'Pendente', '2022')}
    </div>
  );
}

export default Home;
