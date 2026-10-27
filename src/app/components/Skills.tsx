import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Smartphone,
  DesignServices,
  People,
  Palette,
  BarChart,
  Lightbulb,
} from '@mui/icons-material';

const skills = [
  {
    icon: Lightbulb,
    title: 'Product Discovery & Strategy',
    description: 'Product discovery, journey mapping, information architecture and product strategy — aligning organisational goals with real human needs from the start.',
  },
    {
    icon: People,
    title: 'User Research & Usability Testing',
    description: 'Product research, workshops, stakeholder interviews and usability testing — translating findings into actionable product and content recommendations.',
  },
  {
    icon: DesignServices,
    title: 'Design Systems & Tokens',
    description: 'Building and maintaining scalable, token-based design systems and component libraries with full engineering handoff across Figma, Storybook and VS Code.',
  },
  {
    icon: Palette,
    title: 'UX/UI & Interaction Design',
    description: 'End-to-end UI design from wireframes to production-ready interfaces, with a strong focus on accessibility, WCAG compliance and inclusive design.',
  },
  {
    icon: Smartphone,
    title: 'Prototyping & Validation',
    description: 'Low and high-fidelity prototyping to validate ideas rapidly — including Google Ventures-aligned design sprints from problem definition through to tested prototypes.',
  },
  {
    icon: BarChart,
    title: 'Agile Delivery & Collaboration',
    description: 'Agile delivery, project management and cross-functional collaboration — experienced working alongside product, engineering and research teams through full delivery cycles.',
  },
];

const tools = [
  'Figma',
  'Storybook',
  'Token Studio',
  'VS Code',
  'Azure DevOps',
  'GitHub',
  'Claude',
  'Adobe Creative Cloud',
];

export function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: 12, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Skills & Expertise
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            A multidisciplinary practice spanning product design, service design, and design systems — end to end
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8
        }}>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 56,
                      height: 56,
                      mb: 2,
                    }}
                  >
                    <Icon />
                  </Avatar>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Tools & Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
              {tools.map((tool) => (
                <Chip
                  key={tool}
                  label={tool}
                  sx={{
                    fontSize: '0.875rem',
                    '&:hover': {
                      bgcolor: 'grey.200',
                    },
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
