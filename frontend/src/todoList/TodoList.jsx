import { useState } from "react";

const TodoList = () => {
  const [lists, setLists] = useState([
    { id: 1, name: "play", done: false },
    { id: 2, name: "read", done: false },
  ]);
  const handleUpdate = (id) => {
    const newList = lists.map((task) => {
      return id === task.id ? { ...task, done: true } : task;
    });
    setLists(newList);
  };
  const handleDelete = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
  };
  return (
    <div>
      <h4>TodoList App</h4>
      <ul>
        {lists.map((task) => {
          return (
            <>
              <li
                onClick={() => handleUpdate(task.id)}
                style={{ textDecoration: task.done ? "line-through" : "" }}
                key={task.id}
              >
                {task.name}
              </li>
              <button
                onClick={() => handleDelete(task.id)}
                style={{ color: "red", marginLeft: "10px" }}
              >
                x
              </button>
              {/* <DeleteList lists={lists} setLists={setLists} /> */}
            </>
          );
        })}
      </ul>
      <AddList setLists={setLists} />
    </div>
  );
};
const DeleteList = ({ lists, setLists }) => {
  const handleDelete = () => {
    const confirm = window.confirm("Would you like to Delete");
    if (confirm) {
      setLists((prevL) => {
        return prevL.filter((li) => li.id !== lists.id);
      });
    }
  };
  return (
    <span onClick={handleDelete} style={{ color: "red", marginLeft: "10px" }}>
      x
    </span>
  );
};
const AddList = ({ setLists }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const text = e.target.elements.task.value;
    const fakeId = Date.now();
    const newList = { id: fakeId, name: task, done: false };
    setLists((prevList) => {
      return prevList.concat(newList);
    });
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter Tasks'
        name='task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default TodoList;
