import { Typography } from "@mui/material";
import { CustomBox, NavBox } from "./UserNav";
import { Cottage, Group, Payment } from "@mui/icons-material";

function AdminNav() {
  return (
    <>
      <NavBox mt={4}>
        <CustomBox sx={{px: 0.5, py: 1.5, mb: 2}} to="/portal">
          <Cottage />
          <Typography variant="h6" fontWeight={600}>
            Dashboard
          </Typography>
        </CustomBox>
        <CustomBox sx={{px: 0.5, py: 1.5,}} to="/portal/admin/plans">
          <Payment />
          <Typography variant="subtitle1" fontWeight={600}>
            Pricing
          </Typography>
        </CustomBox>
        <CustomBox sx={{px: 0.5, py: 1.5, }} to="/portal/admin/tenants">
          <Group />
          <Typography variant="subtitle1" fontWeight={600}>
            Tenants
          </Typography>
        </CustomBox>
      </NavBox>
    </>
  );
}

export default AdminNav;
