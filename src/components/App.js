import "../assets/styles/style.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./Home";
import NoMatch from "./Layout/NoMatch";
import About from "./About/About";
import {houseLoader, HousingPage} from "./Housing/HousingPage";
import Layout from "./Layout/Layout";

const routesJSX = (
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="apropos" element={<About />} />
        <Route path=":housingId" element={<HousingPage />} loader={houseLoader} errorElement={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
    </Route>
)

const routes = createRoutesFromElements(routesJSX)
const router = createBrowserRouter(routes)

function App() {
  return (
      <main>
          <RouterProvider router={ router } />
      </main>
  );
}

export default App;