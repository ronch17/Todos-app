import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Card from "../UI/Card";
import NewPost from "./NewPost";
import Post from "./Post";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const Posts = ({ posts, userId, addNewPost, currentUserName }) => {
  const [add, setAdd] = useState(false);

  const showAddPost = (cancle) => {
    setAdd(true);
    setAdd(cancle);
  };

  return (
    <>
      {add ? (
        <NewPost
          userId={userId}
          posts={posts}
          addNewPost={addNewPost}
          cancle={showAddPost}
        />
      ) : (
        <Card className="over-flow">
          <Grid
            container
            spacing={2}
            height={90}
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            wrap="noWrap"
          >
            <Grid item xl={8}>
              <Stack direction="row" spacing={1}>
                <LocalPostOfficeIcon style={{ color: "#6f22225c" }} />
                <h3>Posts</h3>
              </Stack>
              <Typography varient="h5">{currentUserName}</Typography>
            </Grid>
            <Grid item xl={4}>
              <Button onClick={showAddPost}>New Post</Button>
            </Grid>
          </Grid>
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
