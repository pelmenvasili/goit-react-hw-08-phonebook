import authSelectors from "redux/auth/auth-selectors";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";


const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}

export default PrivateRoute;