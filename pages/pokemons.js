import Link from "next/link";
import PokemonCard from "./components/pokemons/PokemonCard";
import { withPokemons } from "../hocs/withPokemons";
import {
  StyledLink,
  StyledPokemonsElement,
  StyledPokemonsWrapper,
  StyledRequest,
} from "./components/pokemons/PokemonCard/views";
import PokemonInfo from "./components/pokemons/PokemonInfo";

const Pokemons = ({ pokemonData, activePokemon, loading }) => (
  <>
    <StyledPokemonsWrapper>
      <StyledPokemonsElement>
        {pokemonData.map((el, index) => (
          <PokemonCard
            key={index}
            name={el.name.toUpperCase()}
            id={el.id}
            icon={el.sprites.other.dream_world.front_default}
            type={el.types[0].type.name}
          />
        ))}
      </StyledPokemonsElement>
      {activePokemon ? (
        <PokemonInfo pokemonData={pokemonData} activePokemon={activePokemon} />
      ) : (
        <StyledRequest>
          Click on a pokemon to see more information!
        </StyledRequest>
      )}
    </StyledPokemonsWrapper>
    <Link href="/">
      {!loading && <StyledLink>← Go To Home Page</StyledLink>}
    </Link>
  </>
);

export default withPokemons(Pokemons);
