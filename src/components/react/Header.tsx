import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  onClick: () => void;
}

export default function Header(props: Props) {
  const { onClick } = props;

  return (
    <AppBar position="relative">
      <Toolbar disableGutters sx={{ ml: 0.75, mr: 2 }}>
        <IconButton onClick={onClick}>
          <MenuIcon />
        </IconButton>
        <Typography>N I X</Typography>
      </Toolbar>
    </AppBar>
  );
}
