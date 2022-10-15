import React from "react";
import {
  StyledPokemonInfo,
  StyledPokemonInfoId,
  StyledPokemonInfoImg,
  StyledPokemonInfoPannel,
} from "./views";

const PokemonInfo = ({ pokemonData, activePokemon }) => {
  const type = pokemonData[activePokemon - 1].types[0].type.name;
  const height = pokemonData[activePokemon - 1].height;
  const weight = pokemonData[activePokemon - 1].weight;
  const name = pokemonData[activePokemon - 1].name.toUpperCase();
  const icon =
    pokemonData[activePokemon - 1].sprites.other.dream_world.front_default;
  const hp = pokemonData[activePokemon - 1].stats[0].base_stat;
  const attack = pokemonData[activePokemon - 1].stats[1].base_stat;
  const defense = pokemonData[activePokemon - 1].stats[2].base_stat;
  const speed = pokemonData[activePokemon - 1].stats[3].base_stat;

  return (
    <StyledPokemonInfoPannel>
      <StyledPokemonInfoId>ID: {activePokemon}</StyledPokemonInfoId>
      <StyledPokemonInfoImg src={icon} />
      <StyledPokemonInfo>
        <li>Name: {name}</li>
        <li>Type: {type}</li>
        <li>Weight: {weight}</li>
        <li>Height: {height}</li>
        <li>Hp: {hp}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Speed: {speed}</li>
      </StyledPokemonInfo>
    </StyledPokemonInfoPannel>
  );
};

export default PokemonInfo;
