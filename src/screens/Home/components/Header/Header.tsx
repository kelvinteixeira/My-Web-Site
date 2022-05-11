import {
  Box,
  Button,
  Fade,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import * as Styled from "./Header.styles";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function Header() {
  return (
    <Styled.Container>
      <Grid container alignItems="center" justifyContent="space-evenly">
        <Grid item>
          <Button size="small">
            <Typography variant="overline" color="#fff">
              Home
            </Typography>
          </Button>
        </Grid>

        <Grid item>
          <Button size="small">
            <Typography variant="overline" color="#fff">
              About me
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button size="small">
            <Typography variant="overline" color="#fff">
              My projects
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button size="small">
            <Typography variant="overline" color="#fff">
              Skills
            </Typography>
          </Button>
        </Grid>

        <Grid item>
          <Tooltip
            title="A little bit of my life"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              href="https://www.instagram.com/kelvinteixeira_/"
              target="_blank"
              aria-label="instagram"
            >
              <AiOutlineInstagram color="#fff" />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Networking"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              href="https://www.linkedin.com/in/kelvin-teixeira-8707b41a8/"
              target="_blank"
              aria-label="linkedin"
            >
              <AiOutlineLinkedin color="#fff" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Wecolme to my heart"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              href="https://github.com/kelvinteixeira"
              target="_blank"
              aria-label="linkedin"
            >
              <AiOutlineGithub color="#fff" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Send me a mail ;)"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              onClick={() =>
                window.open("mailto:kelvin.teixeira.dev@gmail.com")
              }
              aria-label="email"
            >
              <AiOutlineMail color="#fff" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Thats my whatsApp"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              href="https://api.whatsapp.com/send?phone=5583996157313"
              target="_blank"
              aria-label="whatsapp"
            >
              <AiOutlineWhatsApp color="#fff" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Styled.Container>
  );
}
