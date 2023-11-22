import { Route, Routes } from "react-router-dom"
import { Header } from "./Header/Header"
import { SearchBar } from "../pages/SearchBar/SearchBar"
import { Trending } from "../pages/Trending/Trending"
import { Movie } from "pages/Movie/Movie"

export const App = () => {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Trending/>} />
        <Route path="/movies" element={<SearchBar />} />
        <Route path="/movies/:id/*" element={<Movie />} />
        <Route path="*" element={<div>404</div>} />
    </Routes>
  </>
      )
}