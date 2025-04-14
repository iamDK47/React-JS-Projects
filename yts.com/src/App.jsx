import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [res, setRes] = useState([])
  const [res2, setRes2] = useState([])
  const [res3, setRes3] = useState([])
  const [res4, setRes4] = useState([])

  function Call() {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=${11}`)
      .then(res => res.json())
      .then(data => setRes(data))
      .catch(err => console.log('error', err))
  }

  function Call2() {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=10`)
      .then(res => res.json())
      .then(data => setRes2(data))
      .catch(err => console.log('error', err))
  }

  function Call3() {
    fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${4}`)
      .then(res => res.json())
      .then(data => setRes3(data))
      .catch(err => console.log('error', err))
  }

  function Call4() {
    fetch(`https://yts.mx/api/v2/movie_parental_guides.json?movie_id=${10}`)
      .then(res => res.json())
      .then(data => setRes4(data))
      .catch(err => console.log('error', err))
  }

  useEffect(() => {
    Call()
    Call2()
    Call3()
    Call4()
  }, [])

  console.log(res)

  console.log(res2)

  return (
    <>
      <div>
        {/* {res && res.data.movies.map((movieObject, index) =>
          <p key={index}>
            {movieObject.title}
            <br />
            <a href={movieObject.url}
            >{movieObject.url}</a>
          </p>
        )} */}
      </div>
    </>
  )
}

export default App
