import { Button } from "@mui/material";
import { useState } from "react";
import Card from "../UI/Card";
import NewPost from "./NewPost";
import Post from "./Post";

const Posts = ({ posts, userId, addNewPost }) => {
  const [add, setAdd] = useState(false);

  const showAddPost = (cancle) => {
    setAdd(true);
    setAdd(cancle);
  };

  return (
    <>
      <Card className="main">
        <h3>Posts - User {userId}</h3>
        <Button onClick={showAddPost}>New Post</Button>
      </Card>

      {add ? (
        <NewPost
          userId={userId}
          posts={posts}
          addNewPost={addNewPost}
          cancle={showAddPost}
        />
      ) : (
        <Card className="over-flow">
          {posts
            .filter((post) => {
              return post.userId === +userId;
            })
            .map((post, index) => {
              return (
                <div key={index}>
                  <Post title={post.title} body={post.body} />
                </div>
              );
            })}
        </Card>
      )}
    </>
  );
};

export default Posts;
