//project001-filipisky-nextjs/src/app/not-found.tsx

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: `404 | Zochstam`};

export default function NotFound() {

  return(
    <Container>
        <Typography> Nič také tu neni </Typography>
    </Container>
  );
}