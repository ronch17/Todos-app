import { useState } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import Card from "../UI/Card";
import { Button } from "@mui/material";

const Todos = ({ todos, userId, markCompleted, addNewTodo }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const showAddTodo = (submitted) => {
    setIsTaskModalOpen(true);
    setIsTaskModalOpen(submitted);
  };

  return (
    <div>
      <Card
        className="main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "3em",
        }}
      >
        <h3>Todos - User {userId}</h3>
        <Button color="success" variant="contained" onClick={showAddTodo}>
          New Todo
        </Button>
      </Card>
      {isTaskModalOpen ? (
        <NewTodo
          todos={todos}
          userId={userId}
          addNewTodo={addNewTodo}
          submitted={showAddTodo}
        />
      ) : (
        <Card className="over-flow">
          {todos
            .filter((todo) => {
              return todo.userId === +userId;
            })
            .map((todo, index) => {
              return (
                <div key={index}>
                  <Todo
                    title={todo.title}
                    completed={todo.completed}
                    id={todo.id}
                    markCompleted={markCompleted}
                  />
                </div>
              );
            })}
        </Card>
      )}
    </div>
  );
};

export default Todos;
