import { Box, styled, Typography } from "@mui/material";
import { HorizontalRule, CheckCircle } from "@mui/icons-material/";

const PricingSection = styled(Box)({
  padding: "100px 20px",
  color: "#2b3c4d",
  width: "100%",
});

const Table = styled(Box)({
  display: "grid",
  border: "1px solid #ffebe6",
  position: "relative",
  "& .head": {
    backgroundColor: "#ff5c35",
    position: "sticky",
    top: "100px",
    color: "#fff",
  },
  "@media screen and (max-width: 991px)": {
    overflow: "auto",
    "& .head": {
      position: "static",
    },
  },
});

const Row = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  "@media screen and (max-width: 991px)": {
    gridAutoColumns: "minmax(150px, 1fr)",
    gridTemplateColumns: "repeat(6, minmax(150px, 1fr))",
    overflow: "visible",
  },
});
const Cell = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  border: "1px solid #ffebe6",
  borderStyle: "none solid solid none",
  "&:first-of-type": {
    justifyContent: "flex-start",
  },
});

const columns = [
  { id: "1", name: "Features" },
  { id: "2", name: "Free" },
  { id: "3", name: "Starter" },
  { id: "4", name: "Growth" },
  { id: "5", name: "Essential" },
  { id: "6", name: "Enterprise" },
];

interface RowData {
  id: string;
  feat: string;
  free: string | React.ReactElement;
  start: string | React.ReactElement;
  grow: string | React.ReactElement;
  essential: string | React.ReactElement;
  enterprise: string | React.ReactElement;
}

const pricingData: RowData[] = [
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

export default function Pricing() {
  return (
    <PricingSection id="pricing">
      <Typography variant="h4" fontWeight={600} align="center" mb={5}>
        Pricing
      </Typography>
      <Table>
        <Row className="head">
          {columns.map((item) => (
            <Cell key={item.id}>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.name}
              </Typography>
            </Cell>
          ))}
        </Row>
        {pricingData.map((item) => (
          <Row key={item.id}>
            <Cell>
              <Typography variant="body1">{item.feat}</Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{item.free}</Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{item.start}</Typography>{" "}
            </Cell>
            <Cell>
              <Typography variant="body1">{item.grow}</Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{item.essential}</Typography>
            </Cell>
            <Cell>
              <Typography variant="body1">{item.enterprise}</Typography>
            </Cell>
          </Row>
        ))}
      </Table>
    </PricingSection>
  );
}