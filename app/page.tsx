import { getUser } from "@/services/login";


export default async function Page() {
  const user = await getUser();

  return (
    <div className="flex flex-col gap-8 text-center">
      <div>
        {
        !!user 
        ? <h2 className="text-4xl font-bold mb-16">Welcome, {user.username}, to the Game Service Hub!</h2>
        : <h2 className="text-4xl font-bold mb-16">Welcome to TGM Soft website!</h2>
        }
        
        <p className="w-xl text-justify">
          TGM Soft is an independent software studio focused on backend development and game creation.

With years of professional experience building scalable systems using Java, Spring Boot, databases, messaging technologies, and cloud services, TGM Soft combines solid software engineering with a passion for creating original games and interactive experiences.
        </p>
      </div>

      <div className="font-mono text-xs text-muted-foreground m-16">
        (Press <kbd>d</kbd> to toggle light/dark mode)
      </div>
    </div>
  )
}
