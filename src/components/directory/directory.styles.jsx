import { styled } from "styled-components";

export const DirectoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 1900px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DirectoryHeader = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  padding: 10px 0;
  color: teal;
`;
