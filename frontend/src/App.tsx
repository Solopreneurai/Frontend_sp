import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import Bot from "./pages/Bot";
import { useSelector } from "react-redux";
import { FC, ReactNode, useState } from "react";
import Error from "./pages/Error";
// import { Box } from "@mui/material";

interface GuardProps {
  children: ReactNode;
}

const AuthGuard: FC<GuardProps> = (props) => {
  const auth = useSelector((state: State) => state.isUserLoggedIn);
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>();

  if (!auth) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return <Navigate to="/login" />;
  }
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{props.children}</>;
};

const GuestGuard: FC<GuardProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: State) => state.isUserLoggedIn);

  if (isAuthenticated) {
    return <Navigate to="/portal" />;
  }

  return <>{children}</>;
};

// const Loadable = (Component: any) => (props: any) =>
//   (
//     <Suspense
//       fallback={}
//     >
//       <Component {...props} />
//     </Suspense>
//   );

export default function App() {
  // const Home = lazy(() => import("./pages/Home"));
  // const Login = lazy(() => import("./pages/Login"));
  // const Portal = lazy(() => import("./pages/Portal"));
  // const Bot = lazy(() => import("./pages/Bot"));
  return (
    // <Suspense
    //   fallback={<Box sx={{ background: "red" }}> Loading the component</Box>}
    // >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <GuestGuard>
              <Login />
            </GuestGuard>
          }
        />
        <Route
          path="/portal/*"
          element={
            <AuthGuard>
              <Portal />
            </AuthGuard>
          }
        />
        <Route path="/portal/bot/:id" element={<Bot />} />
        <Route path="*" element={<Error />} />
      </Routes>
    // </Suspense>
  );
}
