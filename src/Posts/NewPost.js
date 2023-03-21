import { Button, FormLabel, Input } from "@mui/material";
import { useState } from "react";
import Card from "../UI/Card";

const NewPost = ({ posts, userId, addNewPost, cancle }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const postSubmitHandler = (e) => {
    e.preventDefault();
    const currentPosts = posts.filter((post) => {
      return post.userId === +userId;
    });

    const [lastPost] = currentPosts.slice(-1);

    console.log(currentPosts);
    const newPostObj = {
      userId: lastPost.userId,
      title,
      id: lastPost.id + 1,
      body,
    };
    addNewPost(newPostObj);
    cancle(false);
  };

  return (
    <Card>
      <form onSubmit={postSubmitHandler}>
        <FormLabel>Title: </FormLabel>
        <Input
          sx={{ width: "200" }}
          value={title}
          onChange={titleHandler}
        ></Input>
        <FormLabel>Body: </FormLabel>
        <Input value={body} onChange={bodyHandler}></Input>
        <Button type="submit" value="submit">
          Add
        </Button>
        <Button onClick={() => cancle(false)}>Cancel</Button>
      </form>
    </Card>
  );
};

export default NewPost;
