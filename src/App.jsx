import { Homepage } from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingleCocktail } from "./pages/SingleCocktail";
import { Categories } from "./pages/Categories";
import { SearchPage } from "./pages/SearchPage";
import { SingleIngredient } from "./pages/SingleIngredient";
import { Alcoholic } from "./pages/Alcoholic";

const router = createBrowserRouter([
  {
    path: "/cocktails",
    element: <Homepage />,
  },
  {
    path: "/cocktails/:cocktailId",
    element: <SingleCocktail />,
  },
  {
    path: "/cocktails/categories",
    element: <Categories />,
  },

  {
    path: "/cocktails/search",
    element: <SearchPage />,
  },
  {
    path: "/cocktails/ingredients/:ingredientName",
    element: <SingleIngredient />,
  },
  {
    path: "/cocktails/alcohol",
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
