import { Box, Container, Typography, Paper } from "@mui/material"
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback"

const stats = [
  { value: "35+", label: "Projects Delivered" },
  { value: "2", label: "UI Libraries Managed" },
  { value: "15+", label: "Years Experience" },
]

export function About() {
  return (
    <Box id="about" component="section" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 8,
              }}
            >
              <ImageWithFallback
                src="/sara-profile.jpg"
                alt="Designer workspace"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              About Me
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ fontSize: "1.125rem" }}
              >
                Driven by the challenge of making complex products and services
                easier to understand, use and deliver. I connect user needs,
                business goals and technical realities to create practical
                experiences that move from design into implementation.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ fontSize: "1.125rem" }}
              >
                My work spans product discovery, research, interaction design,
                service design, prototyping, front-end UI design and design
                systems.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ fontSize: "1.125rem" }}
              >
                Recent work includes re-architecting a multi-brand, token-based
                design system, reducing token bloat by 15.6%, and taking
                concepts from idea to tested prototype in as little as five
                days.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 3,
              }}
            >
              {stats.map((stat) => (
                <Paper
                  key={stat.label}
                  elevation={0}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    bgcolor: "grey.50",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
