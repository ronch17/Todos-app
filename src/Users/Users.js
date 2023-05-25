import { useState } from "react";
import Card from "../UI/Card";
import User from "./User";
import SearchBar from "../SearchBar";
import { Grid, Button, Typography } from "@mui/material";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const Users = ({
  users,
  todos,
  changeUser,
  addUserBtnVal,
  deleteUser,
  getId,
  userName,
}) => {
  const [userInActive, setUserInActive] = useState();
  const [addUserSection, setAddUserSection] = useState(false);
  const [search, setSearch] = useState("");

  const searchValue = (value) => {
    setSearch(value);
  };

  const addNewUserSection = () => {
    setAddUserSection(!addUserSection);
    let cancleForm = addUserSection;
    addUserBtnVal(!cancleForm);
  };

  return (
    <Card>
      <Grid container>
        <Grid md={1}>
          <SupervisedUserCircleIcon
            style={{ fontSize: "2rem", color: "#c5c5c5" }}
          />
        </Grid>
        <Grid md={1}>
          <Typography variant="h5">Users</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        height={100}
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        wrap="noWrap"
      >
        <Grid item xl={8}>
          <SearchBar users={users} callbackSearch={searchValue} />
        </Grid>
        <Grid item xl={4}>
          <Button
            variant="contained"
            sx={{ minWidth: "8em" }}
            name="addUser"
            onClick={addNewUserSection}
          >
            Add User
          </Button>
        </Grid>
      </Grid>
      {users
        .filter((x) => {
          return (
            x.name.toLowerCase().includes(search.toLowerCase()) ||
            x.email.toLowerCase().includes(search.toLowerCase())
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
              users={users}
              userName={userName}
            />
          );
        })}
    </Card>
  );
};

export default Users;
