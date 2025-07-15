"use client"
import assets from "@/assets";
import { Box, Button, Container, Grid2, Skeleton, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            padding: 4,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              {loading ? (
                <Skeleton variant="rectangular" width={100} height={40} />
              ) : (
                <Image src={assets.svgs.logo} alt="logo" />
              )}
            </Box>
            <Box>
              {loading ? (
                <Skeleton width={200} height={30} sx={{ mt: 1 }} />
              ) : (
                <Typography variant="h5" component="h4" fontWeight={600} mt={1}>
                  Patient Register
                </Typography>
              )}
            </Box>
          </Stack>

          <Box sx={{ my: 2 }}>
            {loading ? (
              <Stack spacing={2}>
                <Skeleton height={56} />
                <Skeleton height={56} />
                <Skeleton variant="rectangular" height={40} />
              </Stack>
            ) : (
              <form>
                <Grid2 container spacing={2}>
                  <Grid2 size={6} sx={{ py: 1 }}>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid2>
                  <Grid2 size={6} sx={{ py: 1 }}>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid2>

                  <Grid2 size={12}>
                    <Button fullWidth sx={{ mt: 2 }}>
                      Login
                    </Button>
                  </Grid2>
                </Grid2>
              </form>
            )}
          </Box>

          {loading ? (
            <Skeleton width={250} height={20} />
          ) : (
            <Typography>
              Do not have an account?{" "}
              <Link href="/register">
                <Typography component="span" color="blue">
                  Create an account
                </Typography>
              </Link>
            </Typography>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
