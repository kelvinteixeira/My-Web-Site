import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import * as Styled from "./Skills.styles";
import HtmlImage from "../../../../assets/html.svg";
import CssImage from "../../../../assets/css.svg";
import JavascriptImage from "../../../../assets/javascript.svg";
import TypescriptImage from "../../../../assets/typescript.svg";
import ReactImage from "../../../../assets/react.svg";
import NodeJsImage from "../../../../assets/nodejs.svg";
import GraphQlImage from "../../../../assets/graphql.svg";

export function Skills() {
  return (
    <>
      <Typography
        variant="h5"
        marginBottom={3}
        color="#fff"
        fontSize="40px"
        align="center"
      >
        My Hard Skills
      </Typography>
      <Grid container alignItems="center" justifyContent="space-evenly">
        <Grid item marginBottom={2}>
          <Card className="grow " sx={{ maxWidth: 180, height: 300 }}>
            <CardActionArea>
              <Styled.CardImg alt="html logo" src={HtmlImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Where every frontend starts, HTML and his brother CSS.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item marginBottom={2}>
          <Card className="grow " sx={{ maxWidth: 180, height: 300 }}>
            <CardActionArea>
              <Styled.CardImg alt="html logo" src={CssImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CSS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Where every frontend starts, CSS and his brother HTML.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item marginBottom={2}>
          <Card className="grow " sx={{ maxWidth: 180, height: 300 }}>
            <CardActionArea>
              <Styled.CardImg alt="html logo" src={JavascriptImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Javascript
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I confess that I had difficulties at first, I even thought
                  about throwing in the towel, but I was strong.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item marginBottom={2}>
          <Card className="grow " sx={{ maxWidth: 180, height: 300 }}>
            <CardActionArea>
              <Styled.CardImg alt="html logo" src={TypescriptImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Typescript
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Typescript is one of the most beautiful things created in the
                  programming world. Ts i ❤ you.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item marginBottom={2}>
          <Card className="grow " sx={{ maxWidth: 180, height: 300 }}>
            <CardActionArea>
              <Styled.CardImg alt="html logo" src={ReactImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React is my current work adn study tool,I intend to reach the
                  advanced level. React & Ts. perfection!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item marginBottom={2}>
          <Card className="grow " sx={{ maxWidth: 180, height: 300 }}>
            <CardActionArea>
              <Styled.CardImg alt="html logo" src={NodeJsImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Node js
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It's not a technology that I master, but I have a nice
                  knowledge to use it daily without problems.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item marginBottom={2}>
          <Card className="grow " sx={{ maxWidth: 180, height: 300 }}>
            <CardActionArea>
              <Styled.CardImg alt="html logo" src={GraphQlImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GraphQl
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  My current work tool, which I study daily to improve myself
                  more and more.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
