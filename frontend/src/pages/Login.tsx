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
  color: "#2b3c4d",
});

export default function Login() {
  const [login, setLogin] = useState(true);
  return (
    <Container>
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
