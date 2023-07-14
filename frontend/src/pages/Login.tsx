import {
  Box,
  styled,
} from "@mui/material";
import { useState } from "react";
import SignIn from "../components/Login/SignIn";
import SignUp from "../components/Login/SignUp";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Login() {
  const [login, setLogin] = useState(true);
  return (
    <Container>
      {/* {process.env.NODE_ENV === 'development' ? import.meta.env.VITE_DEV_BASE_URL : import.meta.env.VITE_PROD_BASE_URL} */}
      <Box>
        {login ? (
         <SignIn setLogin={setLogin} />
        ) : (
         <SignUp setLogin={setLogin} />
        )}
        </Box>
    </Container>
  );
}
