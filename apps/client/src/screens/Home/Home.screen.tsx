"use client";
import Logo from "@/components/Logo/Logo";
import URLForm from "@/components/URLForm/URLForm";
import { URLResult } from "@/components/URLResult/URLResult";
import { Box, Container } from "@mui/material";
import { useState } from "react";

export default function HomeScreen() {
  const [shortUrl, setShortUrl] = useState<string | undefined>(undefined);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "background.paper",
      }}
    >
      <Container>
        <Box
          width="100%"
          minHeight="100svh"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            display="flex"
            margin="auto"
            flexDirection="column"
            py={16}
            rowGap={8}
            width="100%"
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              rowGap={16}
              maxWidth={440}
              margin="auto"
            >
              <Logo />
              <URLForm onSuccess={setShortUrl} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              margin="auto"
            >
              <URLResult shortUrl={shortUrl} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
