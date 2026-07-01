import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/game-card"
import { getGameByCode } from "@/services/games"

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const game = await getGameByCode(code)

  if (!game) {
    return <div>Game not found.</div>
  }

  return (
    <div>
      <div className="flex flex-col gap-4 text-sm leading-loose">
        <h2>Game Code: {code}</h2>
        <div className="flex gap-4 w-xl">
        <GameCard
          title={game.title}
          description={game.resume}
          image={game.image}
          link={game.link}
          className="w-full"
        />
        <p className="w-full">
          {game.description}
        </p>
        </div>
        <Button asChild>
          <a href={game.link} target="_blank" rel="noopener noreferrer">
            Get on Steam
          </a>
        </Button>
      </div>
    </div>
  )
}

