import { FormControl, TextField, styled } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type Props = {
  name: string;
  control: Control<FieldValues>;
  type?: string;
  placeholder: string;
  endAdornment?: JSX.Element;
};

export const Input = styled(TextField)({
  borderRadius: "10px",
  border: "1px solid #2b3c4d",
  "& fieldset": {
    display: "none",
  },
});

export default function TextInput(props: Props) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState: { error } }: any) => (
        <FormControl fullWidth>
          <Input
            placeholder={props.placeholder}
            autoComplete="off"
            fullWidth
            type={props?.type || "text"}
            InputProps={{
              endAdornment: props?.endAdornment,
            }}
            {...field}
            error={!!error}
          />
          {error && <div>{error.message}</div>}
        </FormControl>
      )}
    />
  );
}
