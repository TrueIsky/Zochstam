ls – list

cd Dokumenty/dev – change directory

npx create-next-app@latest – installs next.js

Yes
Yes
No
Yes
Yes
No

npm run dev – runs server
npm run build – compiles build
npm run start – runs build

Container = div – responsive 
Typography = p – notresponsive 
Metadata – Title of card

git init – creates hidden folder .git
git branch -m main – renames master to main
git config --global user.name "Zochstam" – connects our code to github
git config --global user.email "filipisky1@gmail.com" -			-||-
git remote add origin https://github.com/TrueIsky/Zochstam.git - 	-||-
git remote -v – verifies process
git add . – adds everything to git


vercel – provides free domain ( https://zochstam.vercel.app/ )
gitignore – place where we write credentials, does not go on internet
in source code we have break points we can return to and comit it to github
git - > github - > production
manual - > automatic


code - page:
ls – list

cd Dokumenty/dev – change directory

npx create-next-app@latest – installs next.js

Yes
Yes
No
Yes
Yes
No

npm run dev – runs server
npm run build – compiles build
npm run start – runs build

Container = div – responsive 
Typography = p – notresponsive 
Metadata – Title of card

git init – creates hidden folder .git
git branch -m main – renames master to main
git config --global user.name "Zochstam" – connects our code to github
git config --global user.email "filipisky1@gm
import Typography from '@mui/material/Typography';project001-filipisky-nextjs/src/app/page.tsx

export default function Home() {
  return(
    <Typography variant="h4" gutterBottom>
      Be gone heathen!
    </Typography>
  );
}

code – layout:

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "SnapZoska",
description: "Made by yours truelly, Filip Išky",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="sk">
<body >
{children}
</body>
</html>


code – not-found:
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: `404 | ZoškaSnap`};

export default function NotFound() {

return(
<Container>
<Typography> Nič také tu neni </Typography>
</Container>
);
}

files:

(home) – doesnt count/root
page – neccesary name for site
-all names are neccesary
not-found – overwrites deafult 404
HomeView and NavBar – For now empty