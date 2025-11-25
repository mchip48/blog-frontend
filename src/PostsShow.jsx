export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <img src={props.post.image}></img>
      <p>Description: {props.post.body}</p>
    </div>
  )
}