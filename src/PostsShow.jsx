export function PostsShow( { onUpdate, post, onDestroy } ) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(post, params);
    event.target.reset();
  };

  return (
    <div id="posts-show">
      <h2>Title: {post.title}</h2>
      <img src={post.image}></img>
      <p>Description: {post.body}</p>
      <hr />
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={post.title} type="text" />
        </div>
        <div>
          Image URL: <input name="image" defaultValue={post.image} type="text" />
        </div>
        <div>
          Description: <input name="body" defaultValue={post.body} type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={() => onDestroy(post)}>Delete Recipe</button>
    </div>
  )
}