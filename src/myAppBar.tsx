import { AppBar } from "react-admin";
import { Typography, Toolbar, Box } from "@mui/material";

const MyAppBar: React.FC<React.PropsWithChildren<{}>> = (props) => (
  <AppBar
    {...props}
    sx={{ backgroundColor: "white", color: "#1e2939", marginBottom: "10vh"}}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginLeft: 2 }}>
        TAPAKILA ADMIN
      </Typography>

      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, marginRight: 2 }}
      >
        {props.children}
      </Box>
    </Toolbar>
  </AppBar>
);


export default MyAppBar;
