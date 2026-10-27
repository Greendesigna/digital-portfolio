import { Box, Container, Typography, Card, CardContent, Avatar, Button } from '@mui/material';
import { Email, LinkedIn, GitHub, Download } from '@mui/icons-material';

const contactMethods = [
  {
    icon: Email,
    label: 'Email',
    value: 'sarayusuf@mail.com',
    href: 'mailto:sarayusuf@mail.com',
  },
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    value: 'linkedin.com/in/syusuf23',
    href: 'https://linkedin.com/in/syusuf23',
  },
  {
    icon: GitHub,
    label: 'GitHub',
    value: 'github.com/sarayusuf',
    href: 'https://github.com',
  },
];

export function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: 12 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Let's Work Together
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
            Whether you're looking to shape a product, redesign a service, build a design system, or simply explore what's possible — I'd love to hear from you.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 3,
          mb: 8
        }}>
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.label}
                component="a"
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'grey.100',
                      color: 'primary.main',
                      width: 56,
                      height: 56,
                    }}
                  >
                    <Icon />
                  </Avatar>
                  <Box>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {method.label}
                    </Typography>
                    <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                      {method.value}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Button
            component="a"
            href="/Sara_Yusuf_CV_2026.pdf"
            download
            variant="outlined"
            size="large"
            startIcon={<Download />}
            sx={{ borderRadius: 8, px: 4, py: 1.5 }}
          >
            Download CV
          </Button>
        </Box>

        <Box sx={{ pt: 6, borderTop: 1, borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Design Portfolio. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
