import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/game-card"
import { getGames } from "@/services/games"

export default async function Page() {
  const games = await getGames()
  let open = 4

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold">Games Catalog</h1>
      <div className="flex max-w-full min-w-0 gap-4 text-sm leading-loose">
        {games.map((game) => (
          <GameCard
            key={game.code}
            title={game.title}
            description={game.resume}
            image={game.image}
            link={`/games/${game.code}`}
          />
        )).slice(0, open)}
      </div>
      <Button className="w-md">Open All</Button>
    </div>
  )
}
