import { Box, Typography } from '@mui/material';

export const metadata = { title: `GDPR | Zochstam` };

export default function GDPRPage() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        General Data Protection Regulation (GDPR)
      </Typography>
      <Typography variant="body1" paragraph>
        V zochstame berieme vaše súkromie seriózne. V tejto stránke sa dozviete ako zbierame, zneužívame, a chránime vaše osobné údaje v rámci General Data Protection Regulation (GDPR).
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        1. Čo zbierame?
      </Typography>
      <Typography variant="body1" paragraph>
        Všetko.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Ako používame vaše dáta?
      </Typography>
      <Typography variant="body1" paragraph>
        Predávame vaše dáta FBI, KGB a Číňanom.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Vaše práva v rámci GDPR
      </Typography>
      <Typography variant="body1" paragraph>
        V rámci GDPR, máte právo sprístupniť, upraviť, alebo zmazať Vaše osobné údaje. Takisto môžete namietať spracovianie Vašich dát. Ak si prajete využiť toto právo prosím kontaktujte nás na adrese: [FilipIsky@s.zochova.sk].
      </Typography>
    </Box>
  );
}
