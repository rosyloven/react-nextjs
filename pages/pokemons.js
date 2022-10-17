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
        {pokemonData.map((el, index) => {
          const icon = el.sprites.other.dream_world.front_default;
          const name = el.name.toUpperCase();
          const type = el.types[0].type.name;

          return (
            <PokemonCard
              key={index}
              name={name}
              id={el.id}
              icon={icon}
              type={type}
            />
          );
        })}
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
