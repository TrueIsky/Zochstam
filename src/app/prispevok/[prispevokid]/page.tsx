// project001-filipisky-nextjs/src/app/prispevok/[id]/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = { title: `Detail prispevku | Zochstam`};

export default function SubmissionDetail({ params}: { params: {prispevokid: string}},) {

  return(

      <Typography> Detail konkrétneho príspevku {params.prispevokid}</Typography>

  );
}