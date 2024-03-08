import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getUsersFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.firstReducer.users);

  return (
    <>
      <button onClick={() => dispatch(getUsersFetch())}>Click</button>
      <div>
        Users :{" "}
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
