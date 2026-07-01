import type { Game } from "@/types/game"

const gamesData: Game[] = [
  {
    code: "kingdoms-and-slaves",
    title: "Kingdoms & Slaves",
    resume: "A medieval strategy game",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1982480/header.jpg",
    link: "https://store.steampowered.com/app/1982480/Kingdoms_Slaves/",
    description: "Even with the slavery of the weak green-skinned, the kingdom couldn't resist to the curse of the crystals and began to fall, driving them madness, death, and leading the Kingdom to the catastrophe."
  },
  {
    code: "rebellion",
    title: "Rebellion",
    resume: "A soulslike roguelike game",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1405260/header.jpg",
    link: "https://store.steampowered.com/app/1405260/Rebellion/",
    description: "Rebellion is a souls like and roguelite action game about your revenge saga. Unfairly imprisoned, you seek to cross swords with the King again, for the last time! Escape the jail, explore the castle and it's different areas and layouts, find and recruit allies, choose to fight or sneak from enemies."
  },
  {
    code: "tatuball",
    title: "TatuBall",
    resume: "A lo-fi puzzle game",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1763550/header.jpg",
    link: "https://store.steampowered.com/app/1763550/TatuBall/",
    description: "With puzzle gameplay in a relaxed atmosphere with LoFi music, you must help Tatu (an armadillo) to find burrows to survive during the seasons, but for that, you can only move when Tatu is stopped, and every new season, new challenges will appear."
  },
  {
    code: "pandaroll",
    title: "PandaRoll",
    resume: "A puzzle game with two heroes",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2119570/header.jpg",
    link: "https://store.steampowered.com/app/2119570/PandaRoll/",
    description: "Meet Pandara and Mulatta, the heroes who are looking forward to find the mighty Sun Bamboo, in order to cure Mulatta's mother. In this adventure you will control both at the same time, so that you can use their friendship and trust go through all the puzzles and difficulties to achieve their goals."
  },
]

export async function getGames(): Promise<Game[]> {
  await new Promise((resolve) => setTimeout(resolve, 0))
  return gamesData
}

export async function getGameByCode(code: string): Promise<Game | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 0))
  return gamesData.find((game) => game.code === code)
}
