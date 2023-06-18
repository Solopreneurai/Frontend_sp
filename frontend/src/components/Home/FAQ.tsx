import {
  Box,
  styled,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { faqData } from "../../utils/constants";

const FAQSection = styled(Box)({
  backgroundColor: "#f6f9fc",
  padding: "100px 300px",
  width: "100%",
});

export default function FAQ() {
  return (
    <FAQSection>
      <Typography
        variant="h4"
        align="center"
        fontWeight={600}
        color="#304457"
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mt: 8 }}>
        {faqData.map((item) => (
          <Accordion sx={{ mb: 3, color: "#2b3c4d" }} key={item.id}>
            <AccordionSummary
              expandIcon={
                <ExpandMore style={{ color: "#ff5c35" }} />
              }
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