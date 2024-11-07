const ToDoData = (props) => {
  const { name, age, data } = props;
  return (
    <>
      <div className="todo-data">
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <div>Learning react</div>
        <div>Watching Youtube</div>
      </div>
    </>
  );
};
export default ToDoData;
