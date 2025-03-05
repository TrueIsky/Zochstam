import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Box from '@mui/material/Box';

export const metadata = { title: `O mne | Zochstam` };

export default function AboutMe() {
  return (
    <Container 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        textAlign: "center", 
        mt: 5 
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>O mne</Typography>
      <Typography variant="body1" paragraph>
        Skromný programátor ,(Génius) Filip Išky priamo z SPŠE Zochová
      </Typography>

      <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>Kontakt</Typography>

      {/* Contact Info Container */}
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Box 
          className="contactInfo" 
          sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
        >
          <Typography variant="body1">tel.:</Typography>
          <Typography variant="body1">+421 999 543 815</Typography>
        </Box>
        <Box 
          className="contactInfo" 
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="body1">email.:</Typography>
          <Typography variant="body1">FilipIsky@s.zochova.sk</Typography>
        </Box>
        <Box 
          className="contactInfo" 
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="body1">Facebook.:</Typography>
          <Link href={"https://sk-sk.facebook.com/spsezochova/photos/"}>Zochová</Link>
        </Box>
      </Box>
    </Container>
  );
}
