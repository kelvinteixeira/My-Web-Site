import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import MyImage from "../../../../assets/MyImage.jpg";
import * as Styled from "./AboutMe.styles";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function AboutMe() {
  return (
    <Styled.Container>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item textAlign="center">
          <Typography
            className="name-tittle"
            variant="h5"
            marginBottom={1}
            color="#fff"
            fontSize="40px"
          >
            Kelvin Teixeira Santos
          </Typography>
        </Grid>

        <Grid item textAlign="center">
          <Styled.StyledAvatar alt="Kelvin" src={MyImage} />

          <Typography variant="h6" marginTop={1} color="#fff">
            28 year old, living in Campina Grande/Paraíba-Brazil. Student,
            Front-end Developer & Gamer
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body2" align="center" marginTop={2} color="#fff">
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
          >
            Albus Dumbledore.
          </Typography>
        </Grid>
      </Grid>
    </Styled.Container>
  );
}
