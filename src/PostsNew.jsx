export function PostsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    // prevents the browser's default behavior
    // preventing the browser from refreshing
    const form = event.target;
    const params = new FormData(form);
    props.onCreate(params);
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name ="title" type="text" />
        </div>
        <div>
          Body: <input name ="body" type="text" />
        </div>
        <div>
          Image: <input name = "image" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
