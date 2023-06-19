import { IconButton, InputAdornment, Snackbar, Typography } from "@mui/material";
import { Form, Input } from "./SignIn";
import { FilledButton, OutlinedButton } from "../Home/Hero";
import { Dispatch, SetStateAction, useState } from "react";
import { Close, Mail } from "@mui/icons-material";

interface Props {
  setPswd: Dispatch<SetStateAction<boolean>>;
}
export default function ChangePassword({ setPswd }: Props) {
  const [alert, setAlert] = useState(false)

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
      <FilledButton
        onClick={() => setAlert((alert) => !alert)}
        variant="contained"
        style={{ marginBottom: 20 }}
        fullWidth
      >
        Continue
      </FilledButton>
      <OutlinedButton
        variant="outlined"
        fullWidth
        onClick={() => setPswd(() => false)}
      >
        Back to Login
      </OutlinedButton>
      {alert && 
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={alert}
      onClose={() => setAlert((alert) => !alert)}
      message="Email sent. Please check your mail"
      key={'top' + 'right'}
      action={
        <IconButton sx={{p: 0, color: '#fff'}} onClick={() => setAlert((alert) => !alert)}>
          <Close />
        </IconButton>
      }
    />
      }
    </div>
  );
}
