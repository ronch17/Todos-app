import {
  Button,
  ButtonGroup,
  FormLabel,
  Input,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const User = ({
  id,
  name,
  email,
  otherData,
  isDone,
  changeUser,
  deleteUser,
  getId,
  handleUserInActive,
  userInActive,
  users,
  userName,
}) => {
  const [isShown, setIsShown] = useState(false);
  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);
  const [emailValid, setEmailValid] = useState(false);
  const [streetValue, setStreetValue] = useState(otherData.street);
  const [zipCodeValue, setZipCodeValue] = useState(otherData.street);
  const [cityValue, setCityValue] = useState(otherData.city);

  const handleName = (e) => {
    setNameValue(e.target.value);
  };

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleStreet = (e) => {
    setStreetValue(e.target.value);
  };
  const handleCity = (e) => {
    setCityValue(e.target.value);
  };
  const handleZipCode = (e) => {
    setZipCodeValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      id: id,
      name: nameValue,
      email: emailValue,
      street: streetValue,
      city: cityValue,
      zipcode: zipCodeValue,
    };
    changeUser(userObj);
  };

  const handleUser = () => {
    getId(id);
    userInActive !== id && handleUserInActive(id);
    console.log(id);

    const getUserName = users.filter((user) => {
      return user.id == id;
    });

    const [theUserName] = getUserName;
    console.log(theUserName.name);
    userName(theUserName.name);
  };

  return (
    <div
      style={{
        border: isDone ? "1px solid #3df53d" : "1px solid #ff000082",
        marginBottom: "5px",
        borderRadius: "5px",
        padding: "0px 0px 15px 15px",
        background: id === userInActive ? "#D0E2FF" : "transparent",
        transition: "1s ease",
      }}
      onClick={handleUser}
    >
      <form onSubmit={handleSubmit}>
        {isDone ? (
          <Tooltip title="All tasks are done">
            <AssignmentTurnedInIcon
              style={{ paddingTop: "1rem", color: "#6fb66f" }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="Tasks not done yet">
            <EventBusyIcon style={{ paddingTop: "1rem", color: "#9f2424" }} />
          </Tooltip>
        )}
        <h5 id={id} onClick={handleUser}>
          ID: {id}
        </h5>
        <FormLabel>Name: </FormLabel>
        <Input value={nameValue} placeholder={name} onChange={handleName} />
        <br />
        <FormLabel>Email: </FormLabel>
        <Input
          value={emailValue}
          placeholder={email}
          onChange={handleEmail}
          style={{ background: emailValid ? "red" : "transparent" }}
        />
        <br />
        <ButtonGroup
          size="small"
          variant="contained"
          aria-label="outlined primary button group"
          style={{ marginTop: "1rem" }}
        >
          <Button variant="outlined" onMouseEnter={() => setIsShown(true)}>
            Other Data
          </Button>
          {isShown && (
            <div style={{ padding: "1rem" }}>
              <FormLabel onClick={() => setIsShown(false)}>Street: </FormLabel>
              <Input
                value={streetValue}
                placeholder={otherData.street}
                onChange={handleStreet}
              />
              <br /> <FormLabel>City: </FormLabel>
              <Input
                value={cityValue}
                placeholder={otherData.city}
                onChange={handleCity}
              />
              <br /> <FormLabel>Zip Code: </FormLabel>
              <Input
                type="number"
                value={zipCodeValue}
                placeholder={otherData.zipcode}
                onChange={handleZipCode}
              />
              <br />
            </div>
          )}
          <Button variant="contained" type="submit" value="Submit">
            Update
          </Button>
          <Button
            variant="outlined"
            value={id}
            onClick={(e) => deleteUser(e.target.value)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default User;
