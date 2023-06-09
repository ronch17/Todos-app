import { Button, FormLabel, Input } from "@mui/material";
import { useState } from "react";
import Card from "../UI/Card";

const AddUser = ({ userObj, addNewUser, cancelVal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cancel, setCancel] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [addedUser] = userObj.map((user) => {
      return { ...user, id: Number(user.id) + 1, name, email };
    });

    addNewUser(addedUser);
  };

  const cancleForm = () => {
    setCancel(!cancel);
    cancelVal(cancel);
  };

  return (
    <Card style={{ margin: "40px", padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <FormLabel>Name: </FormLabel>
        <Input margin="normal" value={name} onChange={handleName}></Input>
        <br />
        <FormLabel>Email: </FormLabel>
        <Input margin="normal" value={email} onChange={handleEmail}></Input>
        <br />
        <Button type="submit" value="Submit">
          submit
        </Button>
        <Button onClick={cancleForm}>Cancel</Button>
      </form>
    </Card>
  );
};

export default AddUser;
