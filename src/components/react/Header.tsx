import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { open } from "../../leftNavStore";
import { useStore } from "@nanostores/react";

interface Props {
  onClick: () => void;
}

export default function Header(props: Props) {
  const { onClick } = props;

  const $open = useStore(open);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar disableGutters sx={{ ml: 0.75, mr: 2 }}>
        {smallScreen && (
          <IconButton onClick={() => open.set(!$open)}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography ml={smallScreen ? 1 : 2}>N I X</Typography>
      </Toolbar>
    </AppBar>
  );
}
