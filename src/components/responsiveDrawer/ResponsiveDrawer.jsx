import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import conditions from "../../data/conditions"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Grid, useMediaQuery } from '@mui/material';


export default function ResponsiveDrawer(props) {
  const desktop = useMediaQuery('(min-width: 1080px)');
  const drawerWidth = !desktop ? 200 : 425;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="">
      <Grid container>
        <Grid item xs={6} md={2} className="icon-center"><PersonAddIcon sx={{ width: '50px', height: '50px', color: 'text.black' }} className="sidebar-icon" /></Grid>
        {desktop && <Grid item xs={10} className="sidebar-text"><p>Add New Character</p></Grid>}

        <Grid item xs={6} md={2} className="icon-center"><PersonRemoveIcon sx={{ width: '50px', height: '50px', color: 'text.black' }} className="sidebar-icon" /></Grid>
        {desktop && <Grid item xs={10} className="sidebar-text"><p>Remove Character</p></Grid>}
      </Grid>

      {/* <Divider variant="middle" /> */}
      {/* <hr style={{ width: '85%', marginRight: '2.5rem' }} /> */}

      <Grid container sx={{ pb: 4 }}>
        {
          Object.keys(conditions).map((cond, ind) => {
            let current = conditions[cond];
            return (
              <Grid item xs={6} key={ind}>
                <Grid container>
                  <Grid item xs={12} md={2} className="icon-center"><img src={current.img} alt={current.name} width="50px" className="condition-icon" /></Grid>
                  {desktop && <Grid item xs={10} className="icon-text"><p>{current.name}</p></Grid>}
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>

      {/* <hr style={{ width: '85%', marginRight: '2.5rem' }} /> */}

      {/* <Grid container sx={{ pb: 4 }}>
        <p style={{ paddingLeft: '1.6em' }}>Status icons come from <a href="https://www.reddit.com/r/Pathfinder2e/comments/g19a98/roll20_token_markers_pathfinder_2e_conditions/" target="_blank" rel="noreferrer">this reddit post by FatMani</a></p>
      </Grid> */}
    </div>
    // <div>
    //   <Toolbar />
    //   <Divider />
    //   <List>
    //     {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //       <ListItem key={text} disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //           </ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItemButton>
    //       </ListItem>
    //     ))}
    //   </List>
    //   <Divider />
    //   <List>
    //     {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //       <ListItem key={text} disablePadding>
    //         <ListItemButton>
    //           <ListItemIcon>
    //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //           </ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItemButton>
    //       </ListItem>
    //     ))}
    //   </List>
    // </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'background.card',
          color: 'text.black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' }, ':hover': { bgcolor: 'background.main', color: 'background.card' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            PF2e Initiative Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.card' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.card' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}