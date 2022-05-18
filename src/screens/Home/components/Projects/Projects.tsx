import { Fade, Tooltip, Typography } from "@mui/material";
import React from "react";
import * as Styled from "./Projects.styles";
import OnePieceProjectImg from "../../../../assets/onePiece.jpg";
import VtexProjectImg from "../../../../assets/vtex.png";
import BSProjectImg from "../../../../assets/BsAdvogados.png";
import AldieselProjectImg from "../../../../assets/download.png";
import { animateScroll as scroll } from "react-scroll";
import { BsArrowUpCircle } from "react-icons/bs";

export function Projects() {
  return (
    <>
      <Styled.Container>
        <Typography
          align="center"
          variant="h5"
          marginBottom={1}
          marginLeft={2}
          color="#fff"
          fontSize="40px"
        >
          My projects
        </Typography>

        <Styled.CardContainer marginBottom={3}>
          <Styled.Card>
            <Styled.CardWrapper>
              <Typography variant="h5" color="#fff">
                One Piece Form
              </Typography>
              <Styled.ProjectImage src={OnePieceProjectImg} alt="" />
              <a href="https://onepiecelogin.netlify.app" target="_blank">
                Check me out
              </a>
            </Styled.CardWrapper>
          </Styled.Card>
          <Styled.CardText>
            <Typography variant="overline" fontSize="14px">
              One of the first singin forms i have done and for didactic
              purposes only, this application simulates a site from the anime
              One Piece (all rights reserved), you can register a new user, the
              user datas will be saved in browser local storage, and is possible
              logging in to recent create account.
              <p>HTML | CSS | Javascript</p>
              <Typography align="right" variant="h6">
                Finished Project
              </Typography>
            </Typography>
          </Styled.CardText>
        </Styled.CardContainer>

        <Styled.CardContainer marginBottom={3}>
          <Styled.Card>
            <Styled.CardWrapper>
              <Typography variant="h5" color="#fff">
                Vtex Form E-commerce
              </Typography>
              <Styled.ProjectImage src={VtexProjectImg} alt="" />
              <a
                href="https://hiringcodersecommerceproject.netlify.app/"
                target="_blank"
              >
                Check me out
              </a>
            </Styled.CardWrapper>
          </Styled.Card>
          <Styled.CardText>
            <Typography variant="overline" fontSize="14px">
              For didactic purposes only, this application was built during
              Hiring Coders 2021, an event organized by GamaAcademy and VTEX.
              The application consists of a main page build with ReactJs with
              two buttons for registration, one for new customers and another
              for new products generating their respective forms.
              <p>HTML | CSS | React</p>
              <Typography align="right" variant="h6">
                Finished Project
              </Typography>
            </Typography>
          </Styled.CardText>
        </Styled.CardContainer>

        <Styled.CardContainer marginBottom={3}>
          <Styled.Card>
            <Styled.CardWrapper>
              <Typography variant="h5" color="#fff">
                Landing Page
              </Typography>
              <Styled.ProjectImage src={VtexProjectImg} alt="" />
              <a href="https://programminglife.netlify.app/" target="_blank">
                Check me out
              </a>
            </Styled.CardWrapper>
          </Styled.Card>
          <Styled.CardText>
            <Typography variant="overline" fontSize="14px">
              For didactic purposes only, my first landing page build with js.
              Programming life is a simple web application built during the 2021
              Hiring Coders edition, an event organized by GamaAcademy and VTEX
              The application consists of a landing page to register and receive
              offers for programming courses.
              <p>HTML | CSS | Javascript</p>
              <Typography align="right" variant="h6">
                Finished Project
              </Typography>
            </Typography>
          </Styled.CardText>
        </Styled.CardContainer>

        <Styled.CardContainer marginBottom={3}>
          <Styled.Card>
            <Styled.CardWrapper>
              <Typography variant="h5" color="#fff">
                BS Law Firm
              </Typography>
              <Styled.ProjectImage src={BSProjectImg} alt="" />
              <a href="https://bsadvogados.netlify.app/" target="_blank">
                Check me out
              </a>
            </Styled.CardWrapper>
          </Styled.Card>
          <Styled.CardText>
            <Typography variant="overline" fontSize="14px">
              A real and fully functional application developed for the BS
              Advogados law firm, in this project you can contact the office or
              partner lawyers by sending a message via email or whatsapp
              <p>HTML | CSS | Typescript | React | Material UI | Email Js</p>
              <Typography align="right" variant="h6">
                Finished Project
              </Typography>
            </Typography>
          </Styled.CardText>
        </Styled.CardContainer>

        <Styled.CardContainer marginBottom={3}>
          <Styled.Card>
            <Styled.CardWrapper>
              <Typography variant="h5" color="#fff">
                Aldiesel
              </Typography>
              <Styled.ProjectImage src={AldieselProjectImg} alt="" />
              <a
                href="https://github.com/kelvinteixeira/Site-Aldiesel"
                target="_blank"
              >
                Check me out
              </a>
            </Styled.CardWrapper>
          </Styled.Card>
          <Styled.CardText>
            <Typography variant="overline" fontSize="14px">
              Unfortunately, this application is still under development, but
              its purpose is to be used in a car repair shop so that customers
              can be registered, the cars with problems and the entire situation
              will be stored in a database and API service, and it will be
              possible to print the service order of the respective car that
              entered.
              <p>
                HTML | CSS | Typescript | React | React bootstrap | MySQL | Knex{" "}
              </p>
              <Typography align="right" variant="h6">
                Unfinished Project
              </Typography>
            </Typography>
          </Styled.CardText>
        </Styled.CardContainer>
        <Tooltip
          title="To the moon"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Styled.TopButton onClick={() => scroll.scrollTo(0)}>
            <BsArrowUpCircle className="header-icons" />
          </Styled.TopButton>
        </Tooltip>
      </Styled.Container>
    </>
  );
}
