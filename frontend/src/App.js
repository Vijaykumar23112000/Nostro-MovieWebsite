import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';


function App() {

  const [movies, setMovies] = useState()
  const [movie, setMovie] = useState()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      await axios.get("http://localhost:8080/api/v1/movies")
        .then(res => setMovies(res.data))
        .catch(err => console.log(err))
    }
    getMovies()
  }, [])

  const getMovieData = async (movieId) => {
    await axios.get(`http://localhost:8080/api/v1/movies/${movieId}`)
      .then(res => {
        setMovie(res.data)
        setReviews(res.data.reviews)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home movies={movies} />} ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} ></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} ></Route>
          <Route path='*' element={<div><h1>Page Not Found</h1></div>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
