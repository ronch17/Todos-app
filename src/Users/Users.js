import { useState } from "react";
import Card from "../UI/Card";
import User from "./User";

const Users = ({
  users,
  todos,
  searchValue,
  changeUser,
  deleteUser,
  getId,
}) => {
  const [userInActive, setUserInActive] = useState();
  console.log(userInActive);
  return (
    <Card>
      {users
        .filter((x) => {
          return (
            x.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            x.email.toLowerCase().includes(searchValue.toLowerCase())
          );
        })
        .map((user) => {
          const isDone =
            todos.filter((todo) => todo.userId === user.id && !todo.completed)
              .length === 0;
          return (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              otherData={user.address}
              isDone={isDone}
              changeUser={changeUser}
              deleteUser={deleteUser}
              getId={getId}
              handleUserInActive={setUserInActive}
              userInActive={userInActive}
            />
          );
        })}
    </Card>
  );
};

export default Users;
