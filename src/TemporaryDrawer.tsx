import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'top';

export default function TemporaryDrawer({ pages }: any) {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text: string) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                {text === 'Upcoming' && <AccessTimeIcon />}
                {text === 'Trending' && <TrendingUpIcon />}
                {text === 'Top Movies' && <EmojiEventsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="top">
        <Button onClick={toggleDrawer('top', true)}>
          <MenuIcon sx={{ color: 'white' }} />
        </Button>
        <Drawer
          anchor="top"
          open={state.top}
          onClose={toggleDrawer('top', false)}
          PaperProps={{
            sx: {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
        >
          {list('top')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
