import { useState } from 'react'
import axios from 'axios'

function App() {

  const [formPost, setFormPost] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  function handleFormPost(e) {

    const valueCheckbox = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormPost(formPost => ({
      ...formPost,
      [e.target.name]: e.target.value
    }))

  }

  const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  function generatePost(e) {
    e.preventDefault();

    axios.post(endpoint, formPost)
      .then(res => console.log(res.data));

    setFormPost({
      author: '',
      title: '',
      body: '',
      public: false
    })

  }

  return (
    <>
      <h1>React Post Form</h1>
      <form onSubmit={generatePost}>
        <div>
          <label htmlFor="">Nome dell'autore </label>
          <input type="text"
            id="author-name"
            name="author"
            value={formPost.author}
            onChange={handleFormPost}
            placeholder='Nome autore' />
        </div>

        <hr />

        <div>
          <label htmlFor="">Titolo del post </label>
          <input type="text"
            id="title-post"
            name="title"
            value={formPost.title}
            onChange={handleFormPost}
            placeholder='Titolo del post' />
        </div>

        <hr />

        <div>
          <label htmlFor="">Contenuto del post </label>
          <input type="text"
            id="body-post"
            name="body"
            value={formPost.body}
            onChange={handleFormPost}
            placeholder='Contenuto del post' />
        </div>

        <hr />

        <div>
          <label htmlFor="">Il post è pubblico? </label>
          <input type="checkbox"
            id="public-post"
            name="public"
            checked={formPost.public}
            onChange={handleFormPost} />
        </div>

        <hr />

        <div><button>Genera post</button></div>

      </form>
    </>
  )
}

export default App
