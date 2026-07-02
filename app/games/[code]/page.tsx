import { Button } from "@/components/ui/button"
import { GameCard } from "@/components/game-card"
import { getGameByCode, getGameData as getGameParams } from "@/services/games"

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const game = await getGameByCode(code)
  const gameParams = await getGameParams(code)

  if (!game) {
    return <div>Game not found.</div>
  }

  return (
    <div>
      <div className="flex flex-col gap-4 text-sm leading-loose">
        <h2>Game Code: {code}</h2>
        <div className="flex gap-4 w-xl">
          <div className="w-full flex flex-col items-center">
            <GameCard
              title={game.title}
              description={game.resume}
              image={game.image}
              link={game.link}
              className="mb-2"
            />
            <Button asChild>
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                Get on Steam
              </a>
            </Button>
          </div>
          <p className="w-full">
            {game.description}
          </p>
        </div>
        <div className="w-xl">
          <h1>Parameters</h1>
          <p>{JSON.stringify(gameParams)}</p>
        </div>
      </div>
    </div>
  )
}

