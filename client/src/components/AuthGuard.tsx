import { Navigate } from "react-router-dom";
import { useTokens } from "../stores/selectors";
import React from "react";

interface AuthGuardProps {
  element: React.ReactNode;
}

const AuthGuard = ({ element, ...rest }: AuthGuardProps) => {
  const tokens = useTokens();
  const isUserLoggedIn = tokens ? true : false;

  return isUserLoggedIn ? (
    <React.Fragment {...rest} >{element}</React.Fragment>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default AuthGuard;
