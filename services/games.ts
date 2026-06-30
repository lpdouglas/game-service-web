import type { Game } from "@/types/game"

const gamesData: Game[] = [
  {
    code: "kingdoms-and-slaves",
    title: "Kingdoms & Slaves",
    description: "A medieval strategy game",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1982480/header.jpg",
    link: "https://store.steampowered.com/app/1982480/Kingdoms_Slaves/",
  },
  {
    code: "rebellion",
    title: "Rebellion",
    description: "A soulslike roguelike game",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1405260/header.jpg",
    link: "https://store.steampowered.com/app/1405260/Rebellion/",
  },
  {
    code: "tatuball",
    title: "TatuBall",
    description: "A lo-fi puzzle game",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1763550/header.jpg",
    link: "https://store.steampowered.com/app/1763550/TatuBall/",
  },
  {
    code: "pandaroll",
    title: "PandaRoll",
    description: "A puzzle game with two heroes",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2119570/header.jpg",
    link: "https://store.steampowered.com/app/2119570/PandaRoll/",
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
