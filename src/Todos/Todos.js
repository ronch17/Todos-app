import { useState } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import Card from "../UI/Card";
import { Button, Grid, Stack, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Todos = ({
  todos,
  userId,
  markCompleted,
  addNewTodo,
  currentUserName,
}) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const showAddTodo = (submitted) => {
    setIsTaskModalOpen(true);
    setIsTaskModalOpen(submitted);
  };

  return (
    <div>
      {isTaskModalOpen ? (
        <NewTodo
          todos={todos}
          userId={userId}
          addNewTodo={addNewTodo}
          submitted={showAddTodo}
        />
      ) : (
        <Card className="over-flow">
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            wrap="noWrap"
          >
            <Grid item xl={8}>
              <Stack
                direction="row"
                spacing={1}
                style={{ paddingBottom: "1rem" }}
              >
                <AssignmentIcon
                  style={{ fontSize: "1.8rem", color: "#c5c5c5" }}
                />
                <Typography variant="h5">Todos</Typography>
              </Stack>

              <h3>{currentUserName}</h3>
            </Grid>
            <Grid item xl={4}>
              <Button color="success" variant="contained" onClick={showAddTodo}>
                New Todo
              </Button>
            </Grid>
          </Grid>

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
