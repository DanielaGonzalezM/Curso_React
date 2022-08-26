import { Box } from "@mui/system";
import { NavBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      {/*Sidebar drawerWidth*/}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/*Toolbarr */}
        {children}
      </Box>
    </Box>
  );
};
