import axios from "axios";
import { API } from "./UrlApi.js";

async function getPokemonDetails(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Network error: ${error.message}`);
  }
}

async function ListPoke(offset = 9, limit = 9) {
  let PokemonList;

  try {
    const response = await axios.get(`${API}pokemon?offset=${offset}&limit=${limit}`);
    const data = response.data;

    const pokemonDetailsPromises = data.results.map((pokemon) =>
      getPokemonDetails(pokemon.url)
    );
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    PokemonList = pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
  }

  return PokemonList;
}

async function SearchTypesPokemon(TYPE) {
  let PokemonList;

  try {
    const response = await axios.get(`${API}pokemon?offset=0&limit=10000`);
    const data = response.data;

    const pokemonDetailsPromises = data.results.map((pokemon) =>
      getPokemonDetails(pokemon.url)
    );
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    PokemonList = pokemonDetails.filter(
      (pokemon) => pokemon.types[0].type.name === TYPE
    );
  } catch (error) {}

  return PokemonList;
}

async function SearchPoke(name) {
  try {
    const response = await axios.get(`${API}pokemon/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(`Network error: ${error.message}`);
  }
}

export { ListPoke, SearchTypesPokemon, SearchPoke };