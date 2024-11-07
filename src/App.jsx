import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./constants";

function App() {
  const routes = Object.entries(_routes);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(([path, page], i) => (
            <Route key={i} path={path} element={page} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
