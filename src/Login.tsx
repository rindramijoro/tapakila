import React, { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from "@mui/material";
import './Styles/login.css'

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid username or password", { type: "error" }),
    );
  };

   return (
     <Box className="login-container">
       <Card className="login-card">
         <CardContent>
           <Box className="form-container">
             <Typography component="h1" variant="h5" className="login-title">
               Tapakila Admin Dashboard Login
             </Typography>
             <Box
               component="form"
               onSubmit={handleSubmit}
               className="login-form"
             >
               <TextField
                 label="Username"
                 variant="outlined"
                 fullWidth
                 margin="normal"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 required
                 className="inputs"
               />
               <TextField
                 label="Password"
                 type="password"
                 variant="outlined"
                 fullWidth
                 margin="normal"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 className="inputs"
               />
               <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 className="login-button"
               >
                 Sign In
               </Button>
             </Box>
           </Box>
         </CardContent>
       </Card>
     </Box>
   );
};
