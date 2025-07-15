import { Box, CircularProgress, Typography } from "@mui/material";
const LoadingPage=({ message = "Loading..." })=>{
    return (
        <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // full page height
      }}
    >
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
    )
}

export default LoadingPage;