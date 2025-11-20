function App() {

  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

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

      <div id="posts-index">
        <h1>All posts</h1>
        <div className="posts">
          <h2>Blog Post 1</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ducimus alias asperiores perspiciatis quidem? Repudiandae aspernatur itaque quas commodi blanditiis deserunt repellat minima natus autem animi?
          </p>
          <img src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww" />
          <h2>Blog Post 2</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat recusandae error beatae aperiam quis veniam voluptas, laudantium harum numquam magni, magnam eum illo cumque voluptatum repellat rerum!
          </p>
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww" />
          <h2>Blog Post 3</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, expedita vel omnis inventore saepe eius! Fuga aut illum atque placeat, dolorem sapiente maxime quae rem eius qui deleniti quo consequatur!
          </p>
          <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" />
        </div>
      </div>

      <footer>
        <p>Copyright 2025</p>
      </footer>
    </div>
  )
}

export default App
