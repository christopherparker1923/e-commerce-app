import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  setDarkMode: () => void;
}

export default function Header({ darkMode, setDarkMode }: Props) {
  return (
    <AppBar position="sticky" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Ski Shop</Typography>
        <Switch checked={darkMode} onChange={setDarkMode} />
      </Toolbar>
    </AppBar>
  );
}
