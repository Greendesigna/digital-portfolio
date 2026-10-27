import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Portfolio } from '@/app/components/Portfolio';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#666666',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

export default function App() {
  return (
    <div className="size-full">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Skills />
          <Contact />
        </main>
      </ThemeProvider>
    </div>
  );
}
