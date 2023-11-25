import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header.js";
import { lazy, Suspense } from "react";

const Movies = lazy(() => import("../pages/Movies/Movies"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Review = lazy(() => import("components/Review/Review"));
const Movie = lazy(() => import("pages/Movie/Movie"));
const Home = lazy(() => import("pages/Home/Home"));

export const App = () => {
  return (
    <Suspense fallback={<div>LOADING PAGE...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Suspense>
  );
};
