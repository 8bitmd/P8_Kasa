import "../styles/style.css"
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import {houseLoader, HousingPage} from "./HousingPage";
import Layout from "./Layout";

// https://codesandbox.io/s/determined-https-o6u65d?file=/src/App.js

const routesJSX = (
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="apropos" element={<About />} />
        <Route path=":housingId" element={<HousingPage />} loader={houseLoader} />
        <Route path="*" element={<NotFound />}/>
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
