import {
  Box,
  styled,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const FAQSection = styled(Box)({
  color: "#2b3c4d",
  backgroundColor: "#f6f9fc",
  padding: "60px",
});

const data = [
  {
    id: "1",
    ques: "Question 1",
    ans: "Ans 1",
  },
  {
    id: "2",
    ques: "Question 2",
    ans: "Ans2",
  },
];

export default function FAQ() {
  return (
    <FAQSection>
      <Typography variant="h4" align="center" fontWeight={600} color="#304457">
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mt: 8 }}>
        {data.map((item) => (
          <Accordion sx={{ mb: 3, color: "#2b3c4d" }} key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMore style={{ color: "#ff5c35" }} />}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {item.ques}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{item.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </FAQSection>
  );
}
