import { IconButton, InputAdornment, Typography } from "@mui/material";
import { FilledButton } from "../Home/Hero";
import { Dispatch, SetStateAction, useState } from "react";
import { Form, Input, LoginBox } from "./SignIn";
import { Mail, Person, Visibility, VisibilityOff } from "@mui/icons-material";

interface Props {
  setLogin: Dispatch<SetStateAction<boolean>>;
}
export default function SignUp({ setLogin }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  return (
    <LoginBox style={{ paddingTop: 50 }}>
      <Typography variant="h4" fontWeight={600} mb={1}>
        Get started
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
          placeholder="Enter your email"
          type="email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Mail />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Input
          placeholder="Enter your password"
          type={showPassword ? 'text' : 'password'}
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
        />
        <Input
          placeholder="Confirm your password"
          type={showPassword ? 'text' : 'password'}
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
        />
      </Form>
      <FilledButton
        variant="contained"
        fullWidth
        onClick={() => setLogin((login) => !login)}
      >
        Sign Up
      </FilledButton>

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
