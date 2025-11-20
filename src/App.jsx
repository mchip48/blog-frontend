function Header() {
  return (
    <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="image" />
        </div>
      </form>
    </div>
  )
}

function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All {props.postsProp.length} Posts</h1>
      {props.postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image_url} />
          <button>More Info</button>
        </div>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2025</p>
    </footer>
  )
}

function PostsPage() {
  let posts = [
    {
      id: 1,
      title: "Blog Post 1",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ducimus alias asperiores perspiciatis quidem? Repudiandae aspernatur itaque quas commodi blanditiis deserunt repellat minima natus autem animi?",
      image_url: "https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "Blog Post 2",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat recusandae error beatae aperiam quis veniam voluptas, laudantium harum numquam magni, magnam eum illo cumque voluptatum repellat rerum!",
      image_url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww"
    },
    {
      id: 3,
      title: "Blog Post 3",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, expedita vel omnis inventore saepe eius! Fuga aut illum atque placeat, dolorem sapiente maxime quae rem eius qui deleniti quo consequatur!",
      image_url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div>
    <PostsNew />
    <PostsIndex postsProp={posts} />
    </div>
  )
}
function App() {

  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  )
}

export default App
