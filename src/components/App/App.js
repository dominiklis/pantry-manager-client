import { LoadingPage, RequireAuth, ToastsContainer } from "components";
import { useApp } from "components/App";
import Layout from "components/Layout/Layout";
import { Home, Login, Register, Storages } from "pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { initialLoad } = useApp();

  if (!initialLoad) {
    return <LoadingPage />;
  }

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
          <Route
            path="/storages"
            element={
              <RequireAuth>
                <Storages />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
