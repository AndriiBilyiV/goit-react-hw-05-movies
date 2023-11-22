import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { FetchSearch, FetchTrends } from "./api"
import { Header } from "./Header/Header"
import { SearchBar } from "../pages/SearchBar/SearchBar"
import { SearchList } from "./SearchList/SearchList"
import { Trending } from "../pages/Trending/Trending"
import { Movie } from "pages/Movie/Movie"
import { Cast } from "./Cast/Cast"

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