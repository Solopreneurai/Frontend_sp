import { IconButton, InputAdornment, Typography } from "@mui/material";
import { FilledButton } from "../Home/Hero";
import { Dispatch, SetStateAction, useState } from "react";
import { LoginBox } from "./SignIn";
import { Mail, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import Form from "../Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import TextInput from "../TextInput";
import { signupRequest } from "../../api";

type FormProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface Props {
  setLogin: Dispatch<SetStateAction<boolean>>;
}
export default function SignUp({ setLogin }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  const handleShowConfirmPassword = () => {
    setConfirmPassword((showPassword) => !showPassword);
  };
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const SignUpSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Email should be in correct format")
      .required("Email is required"),
  });

  const methods = useForm<FormProps>({
    resolver: yupResolver(SignUpSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data: FormProps) => {
    console.log("trying to be sign up");
    const { confirmPassword, ...rest } = data;
    try {
      await signupRequest(rest)
        .then((res) => {
          console.log(res);
          setTimeout(() => {setLogin((login) => !login)},1000)
        })
        .catch((error) => console.log(error));
    } catch (err) {
      reset();
    }
  };

  return (
    <LoginBox style={{ paddingTop: 50 }}>
      <Typography variant="h4" fontWeight={600} mb={1}>
        Get started
      </Typography>
      <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
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
          name="email"
          type="email"
          placeholder="Enter your email"
          endAdornment={
            <InputAdornment position="end">
              <Mail />
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
        <TextInput
          name="confirmPassword"
          placeholder="Confirm your password"
          type={showConfirmPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton sx={{ p: 0 }} onClick={handleShowConfirmPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FilledButton variant="contained" fullWidth type="submit">
          Sign Up
        </FilledButton>
      </Form>

      <Typography variant="body1" mt={2}>
        Already have an account ?{" "}
        <a
          style={{ fontWeight: 700, color: "#ff5c35", cursor: "pointer" }}
          onClick={() => setLogin((login) => !login)}
        >
          Login
        </a>
      </Typography>
      <Typography fontSize={10} mt={2}>
        By creating an account, you are agreeing to our Terms of Service and
        Privacy Policy. You also agree to receive product-related marketing
        emails from Writesonic, which you can unsubscribe from at any time.
      </Typography>
    </LoginBox>
  );
}
