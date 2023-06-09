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
  padding: "100px 300px",
  width: "100%",
});

const data = [
  {
    id: "1",
    ques: "Can I train custom data?",
    ans: "Yes, you can train custom data by simply pasting content to our platform",
  },
  {
    id: "2",
    ques: "Does chatbot require coding?",
    ans: "Traditional chatbots require complex coding to set them up. However, advanced AI chatbots like ours which is built on GPT-4 is code-free and take just a few minutes to set up from scratch.",
  },
  {
    id: "3",
    ques: "What is no-code chatbot?",
    ans: "A no-code chatbot is an AI bot builder that can be implemented on your online platforms as your personal AI customer enhancement executive quickly and easily without any hardcore coding.All you need to do is sign up for this no-code AI chatbot builder platform, fill in your details, select brand colors, and upload your logos and documents. With just an embed script, you can make your own AI chatbot live on your website in minutes.",
  },
  {
    id: "4",
    ques: "Can I create my own custom chatbot?",
    ans: "Why not?! You can easily create your own custom chatbot without any coding using ai support system. AI Support chatbot is an AI chatbot builder that helps brands and agencies enhance their customer experience and take it a level up.",
  },
  {
    id: "5",
    ques: "How to build a custom AI chatbot without coding?",
    ans: "If you have minimal to zero coding knowledge or tech experience or just want to create a super-smart AI chatbot in minutes without coding, sign up for our platform. We use a no-code AI chatbot builder powered by GPT-4 that lets you build a custom AI chatbot where you can train it on your own data or knowledge base. Once you sign up, all you need to do is upload your data, help docs, or product information, set your brand name, colors, logo, and chatbot picture, then save it. You’ll get a unique embed script and API key to integrate your personalized AI chatbot into your website.",
  },
  {
    id: "6",
    ques: "What happens if I exceed my plan's limits?",
    ans: "If you exceed your plan's limits for projects or pages, we will notify you. However, if you exceed the token limit for your plan, your chatbots will stop generating AI responses and will instead respond with a predefined message.",
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
