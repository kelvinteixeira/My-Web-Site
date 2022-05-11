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
              href={String(import.meta.env.VITE_INSTAGRAM_LINK)}
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
              href={String(import.meta.env.VITE_LINKEDIN_LINK)}
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
              href={String(import.meta.env.VITE_GITHUB_LINK)}
              target="_blank"
              aria-label="github"
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
                window.open(String(import.meta.env.VITE_EMAIL_LINK))
              }
              aria-label="email"
            >
              <AiOutlineMail color="#fff" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Lets chating"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              href={String(import.meta.env.VITE_WHATSAPP_LINK)}
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
