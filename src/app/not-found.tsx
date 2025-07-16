"use client"
import { Container, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const NotFoundPage=()=>{
  const router=useRouter()

  const handleGoHome = () => {
      router.push("/")
  };
    return (
       <Container
      sx={{
        textAlign: "center",
        py: 8,
      }}
    >
      <Box>
        <Typography variant="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleGoHome}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
    )
}

export default NotFoundPage;