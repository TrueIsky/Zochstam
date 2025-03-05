import { Box, Typography } from '@mui/material';

export const metadata = { title: `Podmienky Používania | Zochstam` };

export default function TermsOfUsePage() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Podmienky Používania
      </Typography>
      
      <Typography variant="body1" paragraph>
        Vitajte v Zochstame! Prihlásením sa do tejte stránky, súhlasíte byť viazaný týmito Podmienkami Používania.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Vaše povinnosti
      </Typography>
      <Typography variant="body1" paragraph>
        Ako používateľ, ste povinný riadiť sa všetkými zákonmi a reguláciami. Súhlasíte že nebudete praktizovať žiadne nelegálne aktivity na našej stránke.
      </Typography>

      <Typography variant="h6" gutterBottom>
        6. Zmena podmienok
      </Typography>
      <Typography variant="body1" paragraph>
        Môžeme aktualizovať podmienky používania po určitom čase. Upozorníme Vás o dôležitých zmenách automaticky, ale je to Vaša zodpovednosť si ich periodicky preštudovať.
      </Typography>

    </Box>
  );
}
