import { Button, FormLabel, Input } from "@mui/material";
import { useState } from "react";

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
  };

  return (
    <div
      style={{
        border: isDone ? "1px solid #3df53d" : "1px solid #ff000082",
        marginBottom: "5px",
        borderRadius: "5px",
        padding: "0px 0px 15px 15px",
        background:
          id === userInActive ? "rgba(255, 166, 0, 0.336)" : "transparent",
        transition: "1s ease",
      }}
    >
      <form onSubmit={handleSubmit}>
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
        <Button
          size="small"
          style={{
            margin: "5px 5px 0px 0px",
            background: "#0000001a",
            color: "#383838",
          }}
          onMouseEnter={() => setIsShown(true)}
        >
          Other Data
        </Button>
        {isShown && (
          <div>
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
        <Button
          variant="contained"
          size="small"
          type="submit"
          value="Submit"
          style={{ margin: "10px 5px 5px 0px" }}
        >
          Update
        </Button>
        <Button
          variant="outlined"
          size="small"
          value={id}
          onClick={(e) => deleteUser(e.target.value)}
          style={{ margin: "10px 5px 5px 0px" }}
        >
          Delete
        </Button>
      </form>
    </div>
  );
};

export default User;
