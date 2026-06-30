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
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <p>Games:</p>
        <h2>Game Code: {code}</h2>
        <GameCard
          title={game.title}
          description={game.description}
          image={game.image}
          link={game.link}
        />
        <Button asChild>
          <a href={game.link} target="_blank" rel="noopener noreferrer">
            Get on Steam
          </a>
        </Button>
      </div>
    </div>
  )
}

