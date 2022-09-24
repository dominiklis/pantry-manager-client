import { Layout, LoadingPage, RequireAuth, ToastsContainer } from "components";
import { useApp } from "components/App";
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
  Settings,
  Search,
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
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="/storages" element={<Storages />} />
          <Route path="/storages/:id" element={<Storage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/labels/:labelName" element={<Label />} />
          <Route path="/lists" element={<ShoppingLists />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
