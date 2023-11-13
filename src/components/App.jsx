import axios from "axios"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Header } from "./Header/Header"
import { Trending } from "./Trending/Trending"

export const App = () => {
  const [col, setCol] = useState([])
  const  foo = async () => {
  const result = await axios('https://api.themoviedb.org/3/trending/movie/day?api_key=6692a5b44fd4d65b0502919df9787c03')
    setCol(result.data.results)
  } 
  foo()
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Trending data={col}/>} />
        <Route path="/movies" element={<div />} />
        <Route path="*" element={<div></div>} />
    </Routes>
  </>
      )
}