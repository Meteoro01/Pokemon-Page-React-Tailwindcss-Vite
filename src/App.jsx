import { useEffect, useState } from "react";
import "./App.css";
import {
  ListPoke,
  SearchTypesPokemon,
  SearchPoke,
} from "./helpers/ListPokemon";
import Header from "./home/Header";
import Panel from "./components/Panel/Index";
import ContainPokemon from "./components/ContainPokemon";
import Pagination from "./components/Pagination";
import Contact from "./components/Contac";
import CardDetailPokemon from "./components/CardDetailPokemon";
import Alert from "./components/Alert";
import PreContain from "./components/Pre-Loads/PreContain";
import PreCard from "./components/Pre-Loads/PreCard";

function App() {
  // !useStates
  // ?Arrays
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [Pokemon, setPokemon] = useState([]);
  // ? State
  const [Alerts, setAlerts] = useState(false);
  const [loadingContain, setLoadingContain] = useState(false);
  const [loadingCard, setLoadingCard] = useState(false);
  const [StPagination, setStPagination] = useState(false);

  // ? values
  const $body = document.querySelector("body");

  useEffect(() => {
    async function fetchData() {
      setLoadingContain(true);
      const list = await ListPoke(currentPage * 9);
      setPokemonList(list);
      setLoadingContain(false);
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if (Pokemon.length !== 0) {
      $body.style.overflow = "hidden";
    } else {
      $body.style.overflow = "auto";
    }
  }, [Pokemon]);

  function handlePagination(direccion) {
    //* scroll
    const panelElement = document.getElementById("panel");
    panelElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (!direccion && currentPage === 0) return;
    const newPage = direccion ? currentPage + 1 : currentPage - 1;
    setCurrentPage(newPage);
  }

  // *search Pokemon
  const Search = async function (name) {
    setLoadingCard(true);
    try {
      const pokemon = await SearchPoke(name.toLowerCase());
      setPokemon(pokemon);
      setLoadingCard(false);
    } catch (error) {
      setLoadingCard(false);
      setAlerts(true);
      setTimeout(() => {
        setAlerts(false);
      }, 2000);
    }
  };

  const SearchType = async function (type) {
    setLoadingContain(true);
    setStPagination(true);  
    try {
      const pokemons = await SearchTypesPokemon(type);
      setPokemonList(pokemons);
      setLoadingContain(false);
    } catch (error) {
      setAlerts(true);
      setTimeout(() => {
        setAlerts(false);
      }, 2000);
    }
  };
 async function ResetType (){
  setLoadingContain(true);
  setStPagination(false);
  const list = await ListPoke(currentPage * 9);
  setPokemonList(list);
  setLoadingContain(false);
}
  const CloseCard = () => {
    setPokemon([]);
  };

  return (
    <>
      {Alerts && <Alert />}

      {loadingCard ? (
        <PreCard />
      ) : Pokemon.length !== 0 ? (
        <CardDetailPokemon Pokemon={Pokemon} CloseCard={CloseCard} />
      ) : (
        <></>
      )}
      <Header />
      <div className=" " id="content-pk">
        <Panel Search={Search} SearchType={SearchType} setStPagination={setStPagination} StPagination={StPagination} ResetType={ResetType}/>
        {loadingContain ? (
          <PreContain />
        ) : (
          <ContainPokemon pokemonList={pokemonList} Search={Search} />
        )}
        {StPagination ? <></> : <Pagination handlePagination={handlePagination} />}
        <Contact />
      </div>
    </>
  );
}

export default App;
