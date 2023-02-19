import React from "react";
import Grid from "@mui/material/Grid";
import Input from "./customComp/Input";
import Button from "./customComp/Button";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import instance from "../api/Instance";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userLoginData, setUserLoginData] = React.useState({
    Username: "",
    password: "",
    Firstname: "",
  });
  const navigate = useNavigate();
  const onClickSignup = () => {};
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Box
        sx={{
          boxShadow: 6,
          width: 400,
          height: "100%",
          display: "flex",
          alignItems: "center",
          border: "1px solid grey",
          borderRadius: "10px",
          // backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Box
              style={{
                width: "320px",
                padding: "12px",
              }}
            >
              <Typography
                style={{ fontSize: "24px", fontWeight: "700", color: "#fff" }}
              >
                Welcome
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={(e) => {
                setUserLoginData({
                  ...userLoginData,
                  Username: e.target.value,
                });
              }}
              placeholder="Username"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={(e) => {
                setUserLoginData({
                  ...userLoginData,
                  Firstname: e.target.value,
                });
              }}
              placeholder="Firstname"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={(e) => {
                setUserLoginData({
                  ...userLoginData,
                  password: e.target.value,
                });
              }}
              placeholder="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              style={{
                width: "320px",
                padding: "12px",
              }}
            >
              <Typography style={{ color: "#fff", cursor: "pointer" }}>
                Forget Password
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button style={{ width: "320px" }} onClick={onClickSignup}>
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ width: "320px" }}
              onClick={() => navigate("/login")}
            >
              Already registered login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Signup;
