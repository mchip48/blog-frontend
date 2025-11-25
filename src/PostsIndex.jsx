export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All {props.postsProp.length} Posts</h1>
      {props.postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} />
          <div>
            
          </div>
          <button onClick={() => props.onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
