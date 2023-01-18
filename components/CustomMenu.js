import React from "react";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,} from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InboxIcon from "@mui/icons-material/Inbox";
import LogoutIcon from "@mui/icons-material/Logout";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import PeopleIcon from "@mui/icons-material/People";

const CustomMenu = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <Box>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="Notifications"
                sx={{ color: "text.primary" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              <ListItemText primary="Issues" sx={{ color: "text.primary" }} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" sx={{ color: "text.primary" }} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText primary="Services" sx={{ color: "text.primary" }} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => props.logout()}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ color: "text.primary" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default CustomMenu;