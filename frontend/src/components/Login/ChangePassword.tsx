import { InputAdornment, Typography } from "@mui/material";
import { Form, Input } from "./SignIn";
import { FilledButton, OutlinedButton } from "../Home/Hero";
import { Dispatch, SetStateAction } from "react";
import { Mail } from "@mui/icons-material";

interface Props {
    setPswd: Dispatch<SetStateAction<boolean>>;
  }
export default function ChangePassword({setPswd}:Props) {
  return (
    <div>
      <Typography variant="h4" fontWeight={600} mb={1}>
        Reset your password
      </Typography>
      <Typography variant="body1" mb={3}>
        We’ll send you an email to reset your password.
      </Typography>
      <Form>
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
      </Form>
      <FilledButton variant="contained" style={{marginBottom: 20}} fullWidth>
        Continue
      </FilledButton>
      <OutlinedButton variant="outlined" fullWidth onClick={() => setPswd(() => false)}>
        Back to Login
      </OutlinedButton>
    </div>
  );
}
