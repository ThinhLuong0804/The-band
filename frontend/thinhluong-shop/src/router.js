import { Route, Routes } from "react-router-dom";
import HomePage from "./page/users/homePage";
import ROUTER from "./utils/router";
import MasterLayout from "./page/users/theme/masterLayout";
import ProfilePage from "./page/users/profilePage";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTER.USER.HOME,
      component: <HomePage />,
    },

    {
      path: ROUTER.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
