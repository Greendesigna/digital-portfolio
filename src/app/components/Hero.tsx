import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Connecting people, products and services
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Product and service designer with 15+ years of experience balancing user needs, business goals and technical realities across B2B SaaS, consumer products and service design—from discovery through to delivery.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={scrollToWork}
              sx={{ borderRadius: 8, px: 4, py: 1.5 }}
            >
              View My Work
            </Button>
          </Box>
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box
              sx={{
                position: 'relative',
                aspectRatio: '1',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 8,
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716703432522-d6d2aab1c993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njk0MTY1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design workspace"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
