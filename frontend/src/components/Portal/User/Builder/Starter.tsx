import { Typography, styled, Box, InputLabel } from "@mui/material";
import { Input } from "./Customize";
import { FilledButton } from "../../../Home/Hero";
import { Add } from "@mui/icons-material/";

const Form = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
});
const Table = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  "& .head": {
    background: "#cbd6e2",
    borderRadius: "5px",
  },
});
const Row = styled(Box)({
  display: "grid",
  gridTemplateColumns: "30% 70%",
  borderBottom: "1px solid #cbd6e2",
});
const Cell = styled(Box)({
  padding: "16px 20px",
  display: "flex",
  justifyContent: "center",
  fontSize: '14px',
  fontWeight: 600
});

interface Info {
  id: string;
  ques: string;
  ans: string;
}

export default function Starter() {
  const data: Info[] = [
    // {id: "1", ques: "Ques 1", ans: "here comes our answer"}
  ];
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
      <Typography variant="subtitle1" fontWeight={600} mt={5} mb={0.5}>
        Starter Questions
      </Typography>
      <Table>
        <Row className="head">
          <Cell>Questions</Cell>
          <Cell>Answers</Cell>
        </Row>
        {data?.map((item) => (
          <Row key={item.id}>
            <Cell>{item.ques}</Cell>
            <Cell>{item.ans}</Cell>
          </Row>
        ))}
      </Table>
    </>
  );
}