import { Typography, styled, Box, InputLabel } from "@mui/material";
import { Input } from "./Customize";
import { FilledButton } from "../../Home/Hero";
import { Add } from "@mui/icons-material/";

const Form = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
});

export default function Starter() {
  return (
    <>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Starter Questions
      </Typography>
      <Form>
        <Box>
          <InputLabel htmlFor="">
            <Typography fontSize={12} mb={0.5}>
              Question
            </Typography>
          </InputLabel>
          <Input fullWidth required multiline rows={2} id="" />
        </Box>
        <Box>
          <InputLabel htmlFor="">
            <Typography fontSize={12} mb={0.5}>
              Answer
            </Typography>
          </InputLabel>
          <Input fullWidth required multiline rows={2} id="" />
        </Box>
      </Form>
      <Box textAlign="center" mt={3}>
        <FilledButton
          variant="contained"
          startIcon={<Add />}
          style={{ width: "60%", borderRadius: "10px" }}
        >
          Add Question
        </FilledButton>
      </Box>
    </>
  );
}
