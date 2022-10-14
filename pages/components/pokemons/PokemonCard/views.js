import styled from "styled-components";

export const StyledPokemonsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-color: white;
`;

export const StyledLink = styled.a`
  cursor: pointer;
`;

export const StyledPokemonCardWrapper = styled.div`
  font-family: "Comic Sans MS";
  display: inline-flex;
  width: 200px;
  height: 220px;
  margin: 10px 5px 5px 10px;
  flex-flow: column;
  border-radius: 13px;
  background-color: darkslategray;
  color: #f3f3f3;
  box-shadow: 1px 1px 2px black;
`;

export const StyledPokemonImg = styled.img`
  border-radius: 13px 13px 0 0;
  height: 85%;
`;
export const StyledPokemonName = styled.h1`
  border: none;
  font-size: 11px;
  text-align: center;
  margin: 15px auto;
  height: 5px;
`;

export const StyledLoading = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }

  & {
    color: darkslategray;
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
  }

  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 3.5em;
  }

  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
