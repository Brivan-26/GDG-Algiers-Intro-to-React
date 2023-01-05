const Post = (props) => {
    console.log(props)
  return (
    <>
      <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.body}</p>
        <hr />
      </div>
    </>
  );
};

export default Post
