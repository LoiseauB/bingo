import tigre from "@/assets/tigre.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="relative flex justify-center">
        <div className="flex items-center gap-6">
          <img src={tigre} alt="tigre" className="w-22 h-22 mt-6" />
          <h1 className="font-title text-7xl tracking-[-0.5rem] leading-none">
            Le Bingo des Tchhhigres
          </h1>
          <img src={tigre} alt="tigre" className="w-22 h-22 mt-6" />
        </div>
      </header>
      <main className="relative px-4 py-6 mb-auto">{children}</main>
      <footer className="relative mt-6 bg-primary w-full border-t-2 p-2.5">
        <p className="text-center">On va le réussir ce bingo !</p>
      </footer>
    </div>
  );
};

export default Layout;
