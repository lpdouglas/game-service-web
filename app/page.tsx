import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from "@/components/navbar"
import { GameCard } from "@/components/game-card"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Game Service Hub</h1>
          < NavigationMenuDemo />
          <p>Lista de jogos:</p>
            <GameCard title="Kingdoms & Slaves" description="A medieval strategy game" image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1982480/header.jpg"/>
            <GameCard title="Rebellion" description="A soulslike roguelike game" image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1405260/header.jpg"/>
            <GameCard title="TatuBall" description="A lo-fi puzzle game" image="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1763550/header.jpg"/>
          <Button className="mt-2">Open All</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
