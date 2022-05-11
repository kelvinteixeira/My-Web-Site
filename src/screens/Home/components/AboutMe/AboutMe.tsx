import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
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
            variant="h5"
            marginBottom={1}
            color="#fff"
            fontSize="40px"
          >
            Kelvin Teixeira Santos
          </Typography>
          <Styled.StyledAvatar alt="Joao" src={MyImage} />

          <Typography variant="h6" marginTop={1} color="#fff">
            Student, Front-end Developer & Gamer
          </Typography>
        </Grid>

        <Grid item textAlign="center" justifyContent="space-evenly">
          <IconButton
            href="https://www.instagram.com/kelvinteixeira_/"
            target="_blank"
            aria-label="instagram"
          >
            <AiOutlineInstagram color="#fff" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/kelvin-teixeira-8707b41a8/"
            target="_blank"
            aria-label="linkedin"
          >
            <AiOutlineLinkedin color="#fff" />
          </IconButton>
          <IconButton
            href="https://github.com/kelvinteixeira"
            target="_blank"
            aria-label="linkedin"
          >
            <AiOutlineGithub color="#fff" />
          </IconButton>

          <IconButton
            onClick={() => window.open("mailto:kelvin.teixeira.dev@gmail.com")}
            aria-label="email"
          >
            <AiOutlineMail color="#fff" />
          </IconButton>

          <IconButton
            href="https://api.whatsapp.com/send?phone=5583996157313"
            target="_blank"
            aria-label="whatsapp"
          >
            <AiOutlineWhatsApp color="#fff" />
          </IconButton>
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
