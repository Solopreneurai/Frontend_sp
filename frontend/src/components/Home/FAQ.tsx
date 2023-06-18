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
  backgroundColor: "var(--light-blue)",
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
        color="var(--main-blue)"
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mt: 8 }}>
        {faqData.map((item) => (
          <Accordion sx={{ mb: 3, color: "var(--main-color)" }} key={item.id}>
            <AccordionSummary
              expandIcon={
                <ExpandMore style={{ color: "var(--secondary-color)" }} />
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