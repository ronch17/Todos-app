import { Button, FormLabel, Input } from "@mui/material";
import { useState } from "react";
import Card from "../UI/Card";

const NewTodo = ({ todos, userId, addNewTodo, submitted }) => {
  const [newTodo, setNewTodo] = useState("");

  const newTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  const sumbmitNewTodo = (e) => {
    e.preventDefault();
    const todoObj = todos.filter((todo) => {
      return todo.userId === +userId;
    });

    const [lastArrItem] = todoObj.slice(-1);

    let newObj = {
      userId: lastArrItem.userId,
      id: lastArrItem.id + 1,
      title: newTodo,
      completed: false,
    };

    addNewTodo(newObj);
    submitted(false);
  };

  return (
    <Card>
      <form onSubmit={sumbmitNewTodo}>
        <FormLabel>Title </FormLabel>
        <Input value={newTodo} onChange={newTodoValue}></Input>

        <Button type="submit" value="submit">
          Add
        </Button>
        <Button onClick={() => submitted(false)}>Cancel</Button>
      </form>
    </Card>
  );
};

export default NewTodo;
