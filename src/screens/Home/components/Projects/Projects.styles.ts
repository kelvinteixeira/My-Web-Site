import styled from "@emotion/styled";
import { Avatar, Box } from "@mui/material";


export const Container = styled(Box)`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 48px 0;
`;

export const CardContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
`;

export const Card = styled(Box)`
  display: inherit;
  line-height: 16px;

  img {
  border-radius: 100px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(.4);
  color: #000;
  transition: .5s ease-in-out;
}

:hover img {
  filter: unset;
}

:hover img>.card-wrapper::before {
  height: 175px;
  width: 175px;
  opacity: 1;
}

:hover a {
  opacity: 1;
  visibility: visible;
  font-size: 14px;
}
`;

export const CardWrapper = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
  content: '';
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: block;
  border: 1px solid #fff;
  opacity: 0;
  transition: .5s ease-in-out;
}

h2 {
  font-size: 30px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  transition: .5s ease-in-out;
}

 a {
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 0;
  visibility: 0;
  opacity: 0;
  font-weight: bold;
  text-transform: uppercase;
  transition: .5s ease-in-out;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
}
`;

export const ProjectImage = styled(Avatar)`
  width: 200px;
  height: 200px;
 `;

export const CardText = styled(Box)`
  width: 50%;
  letter-spacing: 1px;
  color: #fff;

  p {
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
}
`;