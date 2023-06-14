import { Person, Visibility } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FilledButton } from "../Home/Hero";
import { Dispatch, SetStateAction, useState } from "react";
import ChangePassword from "./ChangePassword";

export const Form = styled(Box)({
  margin: "20px 0",
  width: "100%",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
});
export const Input = styled(TextField)({
  borderRadius: "10px",
  border: "1px solid #2b3c4d",
  "& fieldset": {
    display: "none",
  },
});

export const LoginBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "360px",
  paddingTop: "150px",
});

interface Props {
  setLogin: Dispatch<SetStateAction<boolean>>;
}
export default function SignIn({ setLogin }: Props) {
  const [changePswd, setPswd] = useState(false);
  return (
    <LoginBox>
      {changePswd ? (
        <ChangePassword setPswd={setPswd} />
      ) : (
        <>
          <Typography variant="h4" fontWeight={600} mb={1}>
            Welcome back
          </Typography>
          <Typography variant="body1" mb={3}>
            Have we met before?
          </Typography>
          <Form>
            <Input
              placeholder="Enter your username"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Input
              type="password"
              placeholder="Enter your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Visibility />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Form>
          <Link to="/portal" style={{ width: "100%" }}>
            <FilledButton variant="contained" fullWidth>
              Login
            </FilledButton>
          </Link>
          <Typography variant="body2" fontWeight={700} color="#ff5c35" style={{cursor: 'pointer'}} mt={2} onClick={() => setPswd((pswd) => !pswd)}>
            Forgot your password ?
          </Typography>

          <Typography variant="body1" mt={4}>
            New to our platform ?{" "}
            <a
              style={{ fontWeight: 700, color: "#ff5c35", cursor: "pointer" }}
              onClick={() => setLogin((login) => !login)}
            >
              Sign Up
            </a>
          </Typography>
        </>
      )}
    </LoginBox>
  );
}
