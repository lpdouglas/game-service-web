export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-4xl font-bold mb-16">Welcome to the Game Service Hub!</h2>
        
        <p>
          Here, you can find all what you need to build your dream game!
        </p>
      </div>

      <div className="font-mono text-xs text-muted-foreground">
        (Press <kbd>d</kbd> to toggle dark mode)
      </div>
    </div>
  )
}
