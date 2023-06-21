import { Box, ButtonBase, Typography, styled } from "@mui/material";

const Link = styled('a') ({
    marginBottom: 5,
    fontWeight: 600,
    color:"#ff7f53",
    textDecoration:'underline',
    cursor: 'pointer'
})
type Props = {
  text: string;
  defaultSrc?: string;
  subText: string;
};

export default function FileUploadText(props: Props) {
  const handleChange = (e: React.SyntheticEvent) => {
    console.log(e);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
        <img src={props?.defaultSrc} height={42} />

        <Link style={{ position: "relative" }}>
            {props.text}
          <ButtonBase
            style={{
              position: "absolute",
              left: 0,
              height: "100%",
              width: "100%",
            }}
          >
            <input
              type="file"
              accept="image/png, image/jpeg"
              style={{ opacity: 0, width: "100%", height: "100%" }}
              onChange={handleChange}
            />
          </ButtonBase>
        </Link>
      </Box>

      <Typography fontSize={12} mb={0.5} color="#6b7280" fontWeight={600}>
        {props.subText}
      </Typography>
    </Box>
  );
}