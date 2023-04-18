import { Homepage } from "./pages/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SingleCocktail } from "./pages/SingleCocktail";
import { Categories } from "./pages/Categories";
import { SearchPage } from "./pages/SearchPage";
import { SingleIngredient } from "./pages/SingleIngredient";
import { Alcoholic } from "./pages/Alcoholic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:cocktailId",
    element: <SingleCocktail />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },

  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/ingredients/:ingredientName",
    element: <SingleIngredient />,
  },
  {
    path: "/alcohol",
    element: <Alcoholic />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
