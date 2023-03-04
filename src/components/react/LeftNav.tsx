import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useStore } from "@nanostores/react";
import type { CollectionEntry } from "astro:content";
import { open } from "../../leftNavStore";

interface Props {
  items: CollectionEntry<"example">[];
}

export default function LeftNav(props: Props) {
  const { items } = props;

  const $open = useStore(open);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      variant={smallScreen ? "temporary" : "permanent"}
      open={$open}
      sx={{ top: 30 }}
    >
      <Toolbar />
      <List>
        <Typography m={1} fontWeight={600}>
          Astro Examples
        </Typography>
        {items.map((item, index) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
              onClick={() => {
                console.log(`Setting open to false`);
                open.set(false);
              }}
            >
              {/* TODO We need to use routing to avoid a full page refresh */}
              <ListItemText
                primary={
                  <a href={`/examples/${item.slug}`}>{item.data.title}</a>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
