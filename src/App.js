import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Users from "./Users/Users";
import SearchBar from "./SearchBar";
import Todos from "./Todos/Todos";
import Posts from "./Posts/Posts";
import AddUser from "./Users/AddUser";
import Card from "./UI/Card";
import { Grid, Button } from "@mui/material";

const userUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [showTodos, setShowTodos] = useState("");
  const [addUserSection, setAddUserSection] = useState(false);

  const getData = async () => {
    const { data: userData } = await axios.get(userUrl);
    const { data: todosData } = await axios.get(todosUrl);
    const { data: postsData } = await axios.get(postsUrl);
    setUsers(userData.slice(0, 5));
    setTodos(todosData.slice(0, 50));
    setPosts(postsData.slice(0, 50));
  };

  useEffect(() => {
    getData();
  }, []);

  const searchValue = (value) => {
    setSearch(value);
  };

  const clonedUser = users.slice(-1);

  console.log(clonedUser);

  const changeUser = (inputUserVal) => {
    const updatedUsers = users.map((user) => {
      if (user.id === inputUserVal.id) {
        return {
          ...user,
          name: inputUserVal.name,
          email: inputUserVal.email,
          address: {
            street: inputUserVal.street,
            city: inputUserVal.city,
            zipcode: inputUserVal.zipcode,
          },
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => {
      return user.id !== +id;
    });
    setUsers(updatedUsers);
  };

  const getUserId = (id) => {
    setShowTodos(id);
    const checkIfTodoIdExist = todos.filter((todo) => {
      return todo.userId === id;
    });
    const checkIfPostIdExist = posts.filter((post) => {
      return post.userId === id;
    });
    if (checkIfTodoIdExist.length === 0) {
      const [lastTodo] = todos.slice(-1);
      const newTodoObj = {
        userId: id,
        id: lastTodo.id + 1,
        title: "Default Todo",
        completed: true,
      };
      setTodos([...todos, newTodoObj]);
    } else if (checkIfPostIdExist.length === 0) {
      const [lastPost] = posts.slice(-1);
      const newPostObj = {
        userId: id,
        id: lastPost.id + 1,
        title: "Default Post",
        body: "Default Post",
      };
      setPosts([...posts, newPostObj]);
    }
  };

  console.log(posts);

  const markCompleted = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === +id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const addNewUserSection = () => {
    setAddUserSection(!addUserSection);
  };

  return (
    <div className="App">
      <div className="left-column">
        <Card variant="outlined">
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
        </Card>
        <Users
          users={users}
          todos={todos}
          searchValue={search}
          changeUser={changeUser}
          deleteUser={deleteUser}
          getId={getUserId}
        />
      </div>
      <div className="right-column" style={{ width: "100%" }}>
        {addUserSection ? (
          <AddUser
            userObj={clonedUser}
            addNewUser={addNewUser}
            cancel={addNewUserSection}
          />
        ) : (
          <>
            <Todos
              todos={todos}
              userId={showTodos}
              markCompleted={markCompleted}
              addNewTodo={addNewTodo}
            />
            <Posts posts={posts} userId={showTodos} addNewPost={addNewPost} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
