import Style from "./moduleCss/ResultBox.module.css";
const Result = ({ users }) => {
  return (
    users.length > 0 && (
      <div className="ResultContainer">
        <div className={Style.ResultBox}>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>Email</th>
                <th>Mob Number</th>
                <th>Gender</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.gender}</td>
                    <td>{item.range}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};
export default Result;
