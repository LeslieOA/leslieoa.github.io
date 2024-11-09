export default function Page() {
  return (
    <main className="flex flex-grow items-center">
      <nav className="flex flex-col items-start">
        {["Experiments", "Projects", "Words", "Readme"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="inline-block text-[clamp(30px,6vw,70px)] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-muted"
          >
            {item}
          </a>
        ))}
      </nav>
    </main>
  );
}
