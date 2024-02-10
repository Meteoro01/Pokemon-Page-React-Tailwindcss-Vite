// stats
import hp from "../assets/stats/hp.svg";
import attack from "../assets/stats/attack.svg";
import defense from "../assets/stats/defense.svg";
import specialAttack from "../assets/stats/specialAttack.svg";
import specialDefense from "../assets/stats/specialDefense.svg";
// icons color
import speed from "../assets/stats/speed.svg";
import bug from "../assets/iconsTypes/bug.svg";
import dark from "../assets/iconsTypes/dark.svg";
import dragon from "../assets/iconsTypes/dragon.svg";
import electric from "../assets/iconsTypes/electric.svg";
import fairy from "../assets/iconsTypes/fairy.svg";
import fighting from "../assets/iconsTypes/fighting.svg";
import fire from "../assets/iconsTypes/fire.svg";
import flying from "../assets/iconsTypes/flying.svg";
import ghost from "../assets/iconsTypes/ghost.svg";
import grass from "../assets/iconsTypes/grass.svg";
import ground from "../assets/iconsTypes/ground.svg";
import ice from "../assets/iconsTypes/ice.svg";
import normal from "../assets/iconsTypes/normal.svg";
import poison from "../assets/iconsTypes/poison.svg";
import psychic from "../assets/iconsTypes/psychic.svg";
import rock from "../assets/iconsTypes/rock.svg";
import steel from "../assets/iconsTypes/steel.svg";
import water from "../assets/iconsTypes/water.svg";
// icons white
import ibug from "../assets/types/bug.svg";
import idark from "../assets/types/dark.svg";
import idragon from "../assets/types/dragon.svg";
import ielectric from "../assets/types/electric.svg";
import ifairy from "../assets/types/fairy.svg";
import ifighting from "../assets/types/fighting.svg";
import ifire from "../assets/types/fire.svg";
import iflying from "../assets/types/flying.svg";
import ighost from "../assets/types/ghost.svg";
import igrass from "../assets/types/grass.svg";
import iground from "../assets/types/ground.svg";
import iice from "../assets/types/ice.svg";
import inormal from "../assets/types/normal.svg";
import ipoison from "../assets/types/poison.svg";
import ipsychic from "../assets/types/psychic.svg";
import irock from "../assets/types/rock.svg";
import isteel from "../assets/types/steel.svg";
import iwater from "../assets/types/water.svg";

function DetectStats(stats) {
  switch (stats) {
    case "hp":
      return { img: hp, bg: "bg-[#ffae00]" };
    case "attack":
      return { img: attack, bg: "bg-[#0f5]" };
    case "defense":
      return {
        img: defense,
        bg: "bg-[#24ff00] shadow-[rgba(175,209,212,0.76)] shadow-xl",
      };
    case "special-attack":
      return { img: specialAttack, bg: "bg-[#0f5]" };
    case "special-defense":
      return { img: specialDefense, bg: "bg-[#ffae00]" };
    case "speed":
      return { img: speed, bg: "bg-[#0f5]" };
    default:
      return { img: hp, bg: "bg-red-600" };
  }
}

function Detec(name) {
  switch (name) {
    case "bug":
      return {
        name: "bug",
        img: bug,
        icon: ibug,
        bg: "bg-red-600",
      };
    case "dark":
      return {
        name: "dark",
        img: dark,
        icon: idark,
        bg: "bg-gray-600",
      };
    case "dragon":
      return {
        name: "dragon",
        img: dragon,
        icon: idragon,
        bg: "bg-violet-600",
      };
    case "electric":
      return {
        name: "electric",
        img: electric,
        icon: ielectric,
        bg: "bg-yellow-600",
      };
    case "fairy":
      return {
        name: "fairy",
        img: fairy,
        icon: ifairy,
        bg: "bg-violet-600",
      };
    case "fighting":
      return {
        name: "fighting",
        img: fighting,
        icon: ifighting,
        bg: "bg-orange-600",
      };
    case "fire":
      return {
        name: "fire",
        img: fire,
        icon: ifire,
        bg: "bg-red-600",
      };
    case "flying":
      return {
        name: "flying",
        img: flying,
        icon: iflying,
        bg: "bg-sky-600",
      };
    case "ghost":
      return {
        name: "ghost",
        img: ghost,
        icon: ighost,
        bg: "bg-indigo-600",
      };
    case "grass":
      return {
        name: "grass",
        img: grass,
        icon: igrass,
        bg: "bg-green-600",
      };
    case "ground":
      return {
        name: "ground",
        img: ground,
        icon: iground,
        bg: "bg-amber-600",
      };
    case "ice":
      return {
        name: "ice",
        img: ice,
        icon: iice,
        bg: "bg-cyan-600",
      };
    case "normal":
      return {
        name: "normal",
        img: normal,
        icon: inormal,
        bg: "bg-gray-600",
      };
    case "poison":
      return {
        name: "poison",
        img: poison,
        icon: ipoison,
        bg: "bg-purple-600",
      };
    case "psychic":
      return {
        name: "psychic",
        img: psychic,
        icon: ipsychic,
        bg: "bg-pink-600",
      };
    case "rock":
      return {
        name: "rock",
        img: rock,
        icon: irock,
        bg: "bg-slate-600",
      };
    case "steel":
      return {
        name: "steel",
        img: steel,
        icon: isteel,
        bg: "bg-zinc-600",
      };
    case "water":
      return {
        name: "water",
        img: water,
        icon: iwater,
        bg: "bg-blue-600",
      };
    default:
      return {
        name: "normal",
        img: normal,
        icon: inormal,
        bg: "bg-gray-600",
      };
  }
}


export {DetectStats,Detec}