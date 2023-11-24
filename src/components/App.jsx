import { Route, Routes } from "react-router-dom"
import { Header } from "./Header/Header"
import { SearchBar } from "../pages/SearchBar/SearchBar"
import { Home } from "../pages/Home/Home"
import { Movie } from "pages/Movie/Movie"
import { Cast } from "components/Cast/Cast";
import { Review } from "components/Review/Review";

export const App = () => {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchBar />} />
          <Route path="movies/:id" element={<Movie />} >
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>

        </Route>
        
        <Route path="*" element={<div>404</div>} />
    </Routes>
  </>
      )
}