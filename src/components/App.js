import "../styles/style.css"
import { Navigate, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";

function App() {
  return (
      <main>
          <Routes>
              <Route path="/" element={<Navigate to="/index.html" />}/>
              <Route path="accueil" element={
                  <div>
                      <Header />
                      <Home />
                      <Footer />
                  </div>} />
              <Route path="apropos" element={
                  <div>
                      <Header />
                      <About />
                      <Footer />
                  </div>
              } />
              <Route path="*" element={
                  <div>
                      <Header />
                      <NotFound />
                      <Footer />
                  </div>
              } />
          </Routes>
      </main>
  );
}

export default App;
