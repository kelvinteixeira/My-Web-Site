import {
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
import { animateScroll as scroll } from "react-scroll";

export function Header() {
  return (
    <Styled.Container>
      <Grid container alignItems="center" justifyContent="space-evenly">
        <Grid item>
          <Button size="small" onClick={() => scroll.scrollTo(0)}>
            <Styled.HeaderTypography variant="overline" color="#fff">
              Home
            </Styled.HeaderTypography>
          </Button>
        </Grid>

        <Grid item>
          <Button size="small" onClick={() => scroll.scrollTo(150)}>
            <Styled.HeaderTypography variant="overline" color="#fff">
              About me
            </Styled.HeaderTypography>
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" onClick={() => scroll.scrollTo(850)}>
            <Styled.HeaderTypography variant="overline" color="#fff">
              Skills
            </Styled.HeaderTypography>
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" onClick={() => scroll.scrollTo(1300)}>
            <Styled.HeaderTypography variant="overline" color="#fff">
              My projects
            </Styled.HeaderTypography>
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
              <AiOutlineInstagram className="header-icons" />
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
              <AiOutlineLinkedin className="header-icons" />
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
              <AiOutlineGithub className="header-icons" />
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
              <AiOutlineMail className="header-icons" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Let's chatting"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <IconButton
              href={String(import.meta.env.VITE_WHATSAPP_LINK)}
              target="_blank"
              aria-label="whatsapp"
            >
              <AiOutlineWhatsApp className="header-icons" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Styled.Container>
  );
}
