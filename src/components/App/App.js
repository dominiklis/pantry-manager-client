import { RequireAuth, ToastsContainer } from "components";
import Layout from "components/Layout/Layout";
import { Home, Login, Register } from "pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ToastsContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
