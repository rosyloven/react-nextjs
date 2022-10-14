import {
  StyledPokemonCardWrapper,
  StyledPokemonImg,
  StyledPokemonName,
} from "./views";

const PokemonCard = ({ id, name, icon }) => (
  <StyledPokemonCardWrapper>
    <StyledPokemonImg src={icon} />
    <StyledPokemonName>
      {id}.{name}
    </StyledPokemonName>
  </StyledPokemonCardWrapper>
);

export default PokemonCard;
