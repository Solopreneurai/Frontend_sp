import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FilledButton } from "../Home/Hero";
import { Dispatch, SetStateAction, useState } from "react";
import ChangePassword from "./ChangePassword";
import { useDispatch } from "react-redux";
import { login, setAdmin, setUser } from "../../store/actions";
import TextInput from "../TextInput";
import { useForm } from "react-hook-form";
import Form from "../Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { loginRequest } from "../../api";

export const FormStyle = styled(Form)({
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

type FormProps = {
  username: string;
  password: string;
};

interface Props {
  setLogin: Dispatch<SetStateAction<boolean>>;
}
export default function SignIn({ setLogin }: Props) {
  const dispatch = useDispatch();

  const [changePswd, setPswd] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    username: "",
    password: "",
  };

  const methods = useForm<FormProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
  } = methods;

  const onSubmit = async (data: FormProps) => {
    console.log(data);
    try {
      await loginRequest(data)
        .then((res) => {
          dispatch(setUser(res.data));
          setTimeout(() => {
            dispatch(setAdmin(res.data.user.role === "admin"));
            dispatch(login());
          }, 1000);
        })
        .catch((err) => console.log("error", err));
    } catch (err) {
      reset();
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

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
          <FormStyle methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name="username"
              placeholder="Enter your username"
              endAdornment={
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              }
            />
            <TextInput
              name="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton sx={{ p: 0 }} onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FilledButton variant="contained" fullWidth type="submit">
              Login
            </FilledButton>
          </FormStyle>

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
