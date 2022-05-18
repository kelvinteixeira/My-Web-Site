import React from "react";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import MyImage from "../../../../assets/MyImage.jpg";
import * as Styled from "./AboutMe.styles";

export function AboutMe() {
  return (
    <Styled.Container>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item textAlign="center">
          <Typography
            className="name-tittle"
            variant="h5"
            marginBottom={3}
            color="#fff"
            fontSize="40px"
          >
            Kelvin Teixeira Santos
          </Typography>
        </Grid>

        <Grid item textAlign="center">
          <Styled.StyledAvatar alt="Kelvin" src={MyImage} />

          <Typography
            variant="body1"
            marginTop={1}
            marginBottom={3}
            color="#fff"
            fontSize="20px"
          >
            Twenty-eight year old, Brazilian, Student, Front-end Developer,
            Dreamer, Potterhead & Gamer. Waiting for my turn to reach the top of
            the world to enjoy the most beautiful view and rest in peace.
          </Typography>
        </Grid>

        <Grid item paddingLeft={2} paddingRight={2} marginBottom={2}>
          <Typography
            variant="body2"
            align="center"
            marginTop={2}
            color="#fff"
            fontSize="15px"
          >
            <i>
              "Words are, in my not so humble opinion, our most inexhaustible
              source of magic. Capable of both inflicting injury, and remedying
              it"
            </i>
          </Typography>

          <Typography
            variant="body2"
            align="right"
            marginBottom={1}
            marginTop={1}
            color="#fff"
            fontSize="15px"
          >
            Albus Dumbledore.
          </Typography>
        </Grid>
      </Grid>
    </Styled.Container>
  );
}
