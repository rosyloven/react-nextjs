import {
  StyledPokemonCardWrapper,
  StyledPokemonImg,
  StyledPokemonName,
} from "./views";
import {useDispatch} from "react-redux";
import {setActivePokemonAction} from "../../../../store/modules/pokemonsSlice";

const PokemonCard = ({ id, name, icon, type }) => {
  const dispatch = useDispatch();
  const setActivePokemon = () => dispatch(setActivePokemonAction(id))

  return (
    <StyledPokemonCardWrapper onClick={setActivePokemon} type={type}>
      <StyledPokemonImg src={icon} />
      <StyledPokemonName>
        #{id}.{name}
      </StyledPokemonName>
    </StyledPokemonCardWrapper>
  );
};

export default PokemonCard;
