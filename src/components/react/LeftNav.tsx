import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import type { CollectionEntry } from "astro:content";

interface Props {
  items: CollectionEntry<"example">[];
}

export default function LeftNav(props: Props) {
  const { items } = props;

  return (
    <Drawer variant="permanent" open>
      <List>
        {items.map((item, index) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
            >
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
