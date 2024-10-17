// src/sections/LoggedIn.tsx
import Typography from "@mui/material/Typography";

export default function LoggedIn({ name }: { name: string }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h5">Welcome back, {name}!</Typography>
    </div>
  );
}
