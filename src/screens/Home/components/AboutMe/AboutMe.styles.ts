import styled from "@emotion/styled";
import { Avatar, Box, Grid } from "@mui/material";

export const Container = styled(Box)`
  display: grid;
  align-items: center;
  max-width: 35rem;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 8rem;
`;

export const StyledAvatar = styled(Avatar)`
  width: 256px; 
  height: 256px;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const StyledAvatarLanguages = styled(Avatar)`
  margin: 1rem;
`;