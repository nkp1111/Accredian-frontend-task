import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
