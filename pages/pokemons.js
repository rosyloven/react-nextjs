import Link from "next/link";
import PokemonCard from "./components/pokemons/PokemonCard";
import { withPokemons } from "../hocs/withPokemons";
import {
  StyledLink,
  StyledPokemonsWrapper,
} from "./components/pokemons/PokemonCard/views";

const Pokemons = ({ pokemonData, loading }) => (
  <StyledPokemonsWrapper>
    {pokemonData.map((el, index) => (
      <PokemonCard
        key={index}
        name={el.name.toUpperCase()}
        id={el.id}
        icon={el.sprites.other.dream_world.front_default}
      />
    ))}
    <Link href="/">{!loading && <StyledLink>Go To Home Page</StyledLink>}</Link>
  </StyledPokemonsWrapper>
);

export default withPokemons(Pokemons);
