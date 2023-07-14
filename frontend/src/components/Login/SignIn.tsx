import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FilledButton } from "../Home/Hero";
import { Dispatch, SetStateAction, useState } from "react";
import ChangePassword from "./ChangePassword";
import { useDispatch } from "react-redux";
import { login, setAdmin } from "../../store/actions";
import { useSelector } from "react-redux";
import TextInput from "../TextInput";
import { useForm } from "react-hook-form";
import Form from "../Form";

// export const Form = styled(Box)({
//   margin: "20px 0",
//   width: "100%",
//   display: "flex",
//   gap: "20px",
//   flexDirection: "column",
// });
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

type FormProps = {
  email: string;
  password: string;
  afterSubmit?: string;
}

interface Props {
  setLogin: Dispatch<SetStateAction<boolean>>;
}
export default function SignIn({ setLogin }: Props) {
  const dispatch = useDispatch();
  const admin = useSelector((state: State) => state.isAdmin);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [changePswd, setPswd] = useState(false);
  
  // const defaultValues = {
  //   username: "",
  //   password: "",
  // };
  // const [showPassword, setShowPassword] = useState(false);
  // const handleShowPassword = () => {
  //   setShowPassword((showPassword) => !showPassword);
  // };
  const handleLogin = () => {
    console.log("trying to log in");
    if (username === "SolopreneurAI" && password === "solopreneurai@chatbot") {
      dispatch(setAdmin(!admin));
    }
    dispatch(login());
  };
  const { handleSubmit, control } = useForm();
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
          <Form methods={methods} onSubmit={handleSubmit(handleLogin)}>
          <TextInput
            name={username}
            placeholder="Enter your username"
            control={control}
            endAdornment={
              <InputAdornment position="end">
                <Person />
              </InputAdornment>
            }
          />
          </Form>
          
          {/* <Form>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person />
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ p: 0 }} onClick={handleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
          </Form> */}
          <Link to="/portal" style={{ width: "100%" }} onClick={handleLogin}>
            <FilledButton variant="contained" fullWidth>
              Login
            </FilledButton>
          </Link>
          <Typography
            variant="body2"
            fontWeight={700}
            color="#ff5c35"
            style={{ cursor: "pointer" }}
            mt={2}
            onClick={() => setPswd((pswd) => !pswd)}
          >
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
