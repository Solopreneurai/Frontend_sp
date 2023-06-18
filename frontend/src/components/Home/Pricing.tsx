import { Box, styled, Typography } from "@mui/material";
import { pricingData } from "../../utils/constants";

const PricingSection = styled(Box)({
  padding: "100px 20px",
  width: "100%",
});

const Table = styled(Box)({
  display: "grid",
  border: "1px solid #ffebe6",
  position: "relative",
  "& .head": {
    backgroundColor: "#ff7f53",
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