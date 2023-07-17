import {
  IconButton,
  InputAdornment,
  Snackbar,
  Typography,
} from "@mui/material";
import { FilledButton, OutlinedButton } from "../Home/Hero";
import { Dispatch, SetStateAction, useState } from "react";
import { Close, Mail } from "@mui/icons-material";
import Form from "../Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import TextInput from "../TextInput";

type FormProps = {
  email: string;
};
interface Props {
  setPswd: Dispatch<SetStateAction<boolean>>;
}

export default function ChangePassword({ setPswd }: Props) {
  const [alert, setAlert] = useState(false);

  const ChangeSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
  });

  const defaultValues = {
    email: "",
  };

  const methods = useForm<FormProps>({
    resolver: yupResolver(ChangeSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const handleChange = (data: FormProps) => {
    try {
      setAlert((alert) => !alert);
      console.log("changing password", data);
    } catch (error) {
      reset();
      console.log(error);
    }
  };

  return (
    <div>
      <Typography variant="h4" fontWeight={600} mb={1}>
        Reset your password
      </Typography>
      <Typography variant="body1" mb={3}>
        We’ll send you an email to reset your password.
      </Typography>
      <Form methods={methods} onSubmit={handleSubmit(handleChange)}>
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

        <FilledButton
          type="submit"
          variant="contained"
          style={{ marginBottom: 20 }}
          fullWidth
        >
          Continue
        </FilledButton>
      </Form>

      <OutlinedButton
        variant="outlined"
        fullWidth
        onClick={() => setPswd(() => false)}
      >
        Back to Login
      </OutlinedButton>

      {alert && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={alert}
          onClose={() => setAlert((alert) => !alert)}
          message="Email sent. Please check your mail"
          key={"top" + "right"}
          action={
            <IconButton
              sx={{ p: 0, color: "#fff" }}
              onClick={() => setAlert((alert) => !alert)}
            >
              <Close />
            </IconButton>
          }
        />
      )}
    </div>
  );
}
