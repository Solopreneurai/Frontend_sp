import { Box, FormControl, TextField, styled } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
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

const Error = styled(Box)({
  minHeight: '24px',
  fontSize: '12px',
  color: 'red',
})

export default function TextInput(props: Props) {
  const { control } = useFormContext()
  return (
    <Controller
      name={props.name}
      control={control}
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
          <Error>
            {error?.message}
          </Error>
        </FormControl>
      )}
    />
  );
}
