
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenicated, user, children}) {
  const location = useLocation();
  if (
    (!isAuthenicated && !location.pathname.includes("/login")) ||
    location.pathname.includes("/register")
  ) {
    return <Navigate to={"/auth/login"} />;
  }
  if (isAuthenicated && location.pathname.includes("/login")) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }
  if (
    isAuthenicated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth" />;
  }

  if (
    isAuthenicated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }


return <>
{children} </>;
}

export default CheckAuth;
