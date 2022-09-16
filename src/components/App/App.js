import { LoadingPage, RequireAuth, ToastsContainer } from "components";
import { useApp } from "components/App";
import Layout from "components/Layout/Layout";
import {
  Home,
  Labels,
  Login,
  Products,
  Register,
  Storage,
  Storages,
  Label,
  ShoppingLists,
} from "pages";
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
          <Route
            path="/storages/:id"
            element={
              <RequireAuth>
                <Storage />
              </RequireAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="/labels"
            element={
              <RequireAuth>
                <Labels />
              </RequireAuth>
            }
          />
          <Route
            path="/labels/:labelName"
            element={
              <RequireAuth>
                <Label />
              </RequireAuth>
            }
          />
          <Route
            path="/lists"
            element={
              <RequireAuth>
                <ShoppingLists />
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
