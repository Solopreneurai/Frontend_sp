import { CheckCircle, HorizontalRule } from "@mui/icons-material";

interface RowData {
    id: string;
    feat: string;
    free: string | React.ReactElement;
    start: string | React.ReactElement;
    grow: string | React.ReactElement;
    essential: string | React.ReactElement;
    enterprise: string | React.ReactElement;
  }
  
export const pricingData: RowData[] = [
  {
    id: "1",
    feat: "Pricing",
    free: "$0",
    start: "$19",
    grow: "$49",
    essential: "$99",
    enterprise: "$499",
  },
  {
    id: "2",
    feat: "Chatbots",
    free: "1",
    start: "2",
    grow: "5",
    essential: "15",
    enterprise: "50",
  },
  {
    id: "3",
    feat: "Message Credits",
    free: "30",
    start: "2000",
    grow: "5000",
    essential: "10000",
    enterprise: "40000(beyond this use your own openai key)",
  },
  {
    id: "4",
    feat: "Training Methods",
    free: "1 page",
    start: "25 pages",
    grow: "100 pages & 5 PDF",
    essential: "500 pages & 20 PDF",
    enterprise: "5000 pages & 50 PDF",
  },
  {
    id: "5",
    feat: "Chatbot Guidelines",
    free: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    start: <CheckCircle style={{ color: "#ff5c35" }} />,
    grow: <CheckCircle style={{ color: "#ff5c35" }} />,
    essential: <CheckCircle style={{ color: "#ff5c35" }} />,
    enterprise: <CheckCircle style={{ color: "#ff5c35" }} />,
  },
  {
    id: "6",
    feat: "Chatlog History",
    free: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    start: <CheckCircle style={{ color: "#ff5c35" }} />,
    grow: <CheckCircle style={{ color: "#ff5c35" }} />,
    essential: <CheckCircle style={{ color: "#ff5c35" }} />,
    enterprise: <CheckCircle style={{ color: "#ff5c35" }} />,
  },
  {
    id: "7",
    feat: "Analytics",
    free: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    start: <CheckCircle style={{ color: "#ff5c35" }} />,
    grow: <CheckCircle style={{ color: "#ff5c35" }} />,
    essential: <CheckCircle style={{ color: "#ff5c35" }} />,
    enterprise: <CheckCircle style={{ color: "#ff5c35" }} />,
  },
  {
    id: "8",
    feat: "Rule/Wildcard setting",
    free: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    start: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    grow: <CheckCircle style={{ color: "#ff5c35" }} />,
    essential: <CheckCircle style={{ color: "#ff5c35" }} />,
    enterprise: <CheckCircle style={{ color: "#ff5c35" }} />,
  },
  {
    id: "9",
    feat: "Chat trigger",
    free: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    start: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    grow: <CheckCircle style={{ color: "#ff5c35" }} />,
    essential: <CheckCircle style={{ color: "#ff5c35" }} />,
    enterprise: <CheckCircle style={{ color: "#ff5c35" }} />,
  },
  {
    id: "10",
    feat: "Integrations",
    free: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    start: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    grow: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    essential: <CheckCircle style={{ color: "#ff5c35" }} />,
    enterprise: <CheckCircle style={{ color: "#ff5c35" }} />,
  },
  {
    id: "11",
    feat: "Remove Branding",
    free: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    start: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    grow: <HorizontalRule style={{ color: "#2b3c4d55" }} />,
    essential: <CheckCircle style={{ color: "#ff5c35" }} />,
    enterprise: <CheckCircle style={{ color: "#ff5c35" }} />,
  },
];


export const faqData = [
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

export const customFormData = [
  {
    id: "1",
    label: "Bot Name",
    placeholder: "Enter the name of bot",
    defaultValue: "",
  },
  {
    id: "2",
    label: "Company Name",
    placeholder: "Enter the name of company",
    defaultValue: "Solopreneur",
  },
  {
    id: "3",
    label: "Chatbot Color",
    placeholder: "Pick the color for your chatbot",
    defaultValue: "",
  },
  { id: "4", label: "Chatbot Subheading", placeholder: "", defaultValue: "" },
  {
    id: "5",
    label: "Chatbot Input Placeholder",
    placeholder: "",
    defaultValue: "",
  },
];

export const tabs = [
  { id: "1", name: "Source" },
  { id: "2", name: "Customize" },
  { id: "3", name: "Starter Questions" },
  { id: "4", name: "User Data" },
  { id: "5", name: "Conversations" },
  { id: "6", name: "Embeddings" },
  { id: "7", name: "Analytics" },
];