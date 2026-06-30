import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/game-card"
import { getGames } from "@/services/games"

export default async function Page() {
  const games = await getGames()

  return (
    <div>
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <p>Games:</p>
        {games.map((game) => (
          <GameCard
            key={game.code}
            title={game.title}
            description={game.description}
            image={game.image}
            link={`/games/${game.code}`}
          />
        ))}
        <Button className="mt-2">Open All</Button>
      </div>
    </div>
  )
}
