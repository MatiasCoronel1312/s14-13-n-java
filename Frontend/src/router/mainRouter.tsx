import { menuRoutes } from "./menuRoutes";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Layout from "../shared/layout/Layout";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<route.Element />}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default MainRouter;