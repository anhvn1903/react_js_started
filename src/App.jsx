import "./components/todo/todo.css";
import ToDoData from "./components/todo/ToDoData";
import ToDoNew from "./components/todo/ToDoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const hoidanit = "Eric";
  const age = 23;
  const data = {
    address: "hanoi",
    country: "vietnam",
  };
  const addNewToDo = (name) => {
    alert(`call me ${name}`);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew addNewToDo={addNewToDo} />
        <ToDoData
          name={hoidanit}
          age={age}
          data={data}
          //addNewToDo không có đóng mở ngoặc vì js chỉ gọi hàm chứ chưa thực thi, nếu có dấu () thì hàm sẽ được thực thi luon
        />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
