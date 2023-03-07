import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

type ProtectedRoute = {
  children: JSX.Element;
};

export default function ProtectedRoutes({ children }: ProtectedRoute): JSX.Element | any {
  const login = useAppSelector((state) => state.login);

  if (!login.token) {
    return <Navigate to='/login' />
  }

  return children;
}
