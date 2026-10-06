import { ThemeToggle } from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border px-6 py-3">
        <h1 className="text-base font-semibold tracking-tight">Catchall</h1>
        <ThemeToggle />
      </header>

      <main className="mx-auto w-full max-w-2xl px-6 py-10">
        <h2 className="text-lg font-semibold">Welcome to the App!</h2>
      </main>
    </div>
  );
};

export default App;
