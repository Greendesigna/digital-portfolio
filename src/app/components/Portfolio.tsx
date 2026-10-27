import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Divider,
  Button,
} from "@mui/material"
import { ArrowOutward } from "@mui/icons-material"
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback"

const projects = [
  {
    id: 1,
    title: "Design Systems & Token Systems — From Concept to Implementation",
    description:
      "Starting with a conceptual design system created in 2022, this case study explores how reusable components, scalable patterns, and system-thinking were validated across multiple product concepts. It then follows how those principles were applied within a separate enterprise design system through Figma UI libraries, Storybook component libraries, semantic token architecture, and design-engineering collaboration.",
    image: "/design-systems.jpg",
    tags: [
      "Design Systems",
      "Design Tokens",
      "Storybook",
      "Figma Libraries",
      "Component Architecture",
      "Design Engineering",
      "Component UI Library",
    ],
    results:
      "Established and validated reusable design-system principles across two product concepts using 20+ shared components, then applied those learnings in an enterprise environment through a separate design system spanning Figma, Storybook, and front-end implementation. This contributed to a token architecture refactor that reduced overall token volume by 15.6%, reduced component-token volume by 24.6%, and achieved 100% semantic token routing.",
    link: [
      {
        label: "CASE STUDY - Design System",
        href: "https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=61-3&viewport=-379%2C202%2C0.1&t=rXA5ODvQpDSqtBFt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=61%3A3&show-proto-sidebar=1&page-id=0%3A1",
      },
    ],
  },
  {
    id: 2,
    title: "Rebuilding the Architecture of Social Care Platforms",
    description:
      "A multi-platform transformation programme focused on improving how people access support services across a complex care network. Through usability research, information architecture, and service design, I redesigned the experience across multiple charities and support organisations, simplifying navigation and making critical resources easier to find.",
    image: "/information-architecture.jpg",
    tags: [
      "Service Design",
      "Information Architecture",
      "UX Research",
      "Web & Moboile",
      "Accessibility",
      "Content Strategy",
    ],
    results:
      "Delivered a 500% increase in average monthly member sign-ups while simplifying complex navigation across the ecosystem.",
    links: [
      {
        label: "CASE STUDY - Foster Support Network",
        href: "https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=9-3&viewport=-306%2C511%2C0.11&t=K4Z51guWVWhIUD65-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A3&show-proto-sidebar=1&page-id=0%3A1",
      },
      {
        label: "CASE STUDY - Global Childcare Foundation",
        href: "https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=9-335&viewport=-611%2C538%2C0.15&t=grbu5YBlrb3tnI7i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A335&show-proto-sidebar=1&page-id=0%3A1",
      },
      {
        label: "CASE STUDY - Global Care Network",
        href: "https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=9-664&viewport=-611%2C538%2C0.15&t=grbu5YBlrb3tnI7i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A664&page-id=0%3A1",
      },
    ],
  },
  {
    id: 3,
    title: "Design Sprints & Product Discovery",
    description:
      "A case study exploring how structured design sprints accelerated product discovery, reduced alignment bottlenecks, and helped teams move from assumptions to validated decisions in days rather than months.",
    image: "design-sprints.jpg",
    tags: [
      "Design Sprints",
      "Facilitation",
      "Workshop Design",
      "Product Discovery",
      "Rapid Validation",
      "Stakeholder Alignment",
    ],
    results:
      "Turned lengthy discovery discussions into actionable outcomes through a repeatable, evidence-driven process.",
    link: [
      {
        label: "CASE STUDY - Design Sprint",
        href: "https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=38-3636&viewport=-379%2C202%2C0.1&t=rXA5ODvQpDSqtBFt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=38%3A3636&page-id=0%3A1",
      },
    ],
  },
  {
    id: 4,
    title: "Interaction Design & Prototyping — Two Mobile App Case Studies",
    description:
      "Two concept applications designed to explore how interaction design, design systems, and prototyping work together to create intuitive mobile experiences. The projects demonstrate complete user journeys, thoughtful micro-interactions, and scalable interface patterns across very different product contexts.",
    image: "/nft-app.jpg",
    tags: [
      "Mobile UX",
      "Interaction Design",
      "Prototyping",
      "Design System",
      "User Flows",
      "Micro-interactions",
    ],
    results:
      "Applied a shared design-system approach across multiple products while delivering fully interactive, end-to-end prototype experiences.",
    links: [
      {
        label: "CASE STUDY - NFT Comparison App",
        href: "https://www.figma.com/proto/b8iYxtzDjfokTxXx5lzAqA/GDA.-Project---NFT-Comparison-Application?node-id=7615-995&viewport=355%2C132%2C0.1&t=JirRkAJLpy48soUx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7615%3A995&show-proto-sidebar=1&page-id=1%3A166",
      },
      {
        label: "CASE STUDY - Healthcare App",
        href: "https://www.figma.com/proto/zmSQ4QbVcGEKR7I6U3MW2o/GDA---Health-Care-Delivery-Application?node-id=4410-3&t=dEF2i4H9OtiS1Uzr-1",
      },
    ],
  },
]

export function Portfolio() {
  return (
    <Box id="work" component="section" sx={{ py: 12, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Featured Work
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            A collection of projects where I've helped organizations create
            better user experiences
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 4,
          }}
        >
          {projects.map((project) => {
            const rawLink =
              "links" in project
                ? project.links
                : "link" in project
                  ? project.link
                  : undefined
            const linkList = Array.isArray(rawLink)
              ? rawLink
              : typeof rawLink === "string"
                ? [{ label: "View Prototype", href: rawLink }]
                : []

            return (
              <Card
                key={project.id}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%",
                    overflow: "hidden",
                  }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}
                  >
                    {project.tags.filter(Boolean).map((tag) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Stack>
                  <Divider sx={{ mb: 2 }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: linkList.length ? 2 : 0 }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      Impact:
                    </Box>{" "}
                    {project.results}
                  </Typography>
                  {linkList.length > 0 && (
                    <Stack
                      direction="row"
                      sx={{
                        mt: "auto",
                        pt: 1,
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      {linkList.map((l) => (
                        <Chip
                          key={l.label}
                          label={l.label}
                          component="a"
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          icon={
                            <ArrowOutward
                              sx={{
                                fontSize: "0.875rem !important",
                              }}
                            />
                          }
                          clickable
                          variant="outlined"
                          color="primary"
                          size="small"
                          sx={{
                            borderRadius: 8,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
