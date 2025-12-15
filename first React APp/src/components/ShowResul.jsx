import Style from "./ShowResult.module.css";
const ShowResult = ({ todos }) => {
  return (
    todos&&  todos.map(item =>  <div className={Style.resultBox}>
      <div className={Style.todoElement}>
        <p>{item.todo}</p>
        <div className={Style.actions}>
         <button className={Style.DeleteButton}>Delete</button>
         <button className={Style.EditButton}>Edit</button>
        </div>
      </div>
    </div>
    )
   
  );
};
export default ShowResult;
