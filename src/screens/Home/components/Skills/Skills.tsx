import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import * as Styled from "./Skills.styles";

export function Skills() {
  return (
    <>
      <Grid alignItems="center" justifyContent="center">
        <Typography
          variant="h5"
          marginBottom={1}
          color="#fff"
          fontSize="40px"
          align="center"
        >
          My Hard Skills
        </Typography>

        <Grid
          container
          className="fadeInOut"
          marginBottom={8}
          alignItems="center"
          justifyContent="center"
        >
          <Tooltip
            title="HTML"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <Styled.StyledAvatarLanguages src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          </Tooltip>
          <Tooltip
            title="CSS"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <Styled.StyledAvatarLanguages src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          </Tooltip>
          <Tooltip
            title="Javascript"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <Styled.StyledAvatarLanguages src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          </Tooltip>
          <Tooltip
            title="Typescript"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <Styled.StyledAvatarLanguages src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
          </Tooltip>
          <Tooltip
            title="React"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <Styled.StyledAvatarLanguages src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
          </Tooltip>
          <Tooltip
            title="NodeJs"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <Styled.StyledAvatarLanguages src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
          </Tooltip>
          <Tooltip
            title="GraphQL"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <Styled.StyledAvatarLanguages src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" />
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}
