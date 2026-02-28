import tigre from "@/assets/tigre.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="relative flex justify-center px-4">
        <div className="flex items-center gap-4 xl:gap-6">
          <img src={tigre} alt="tigre" className="size-16 xl:size-22 mt-6 max-xs:-me-10" />
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl tracking-[-0.3rem] xl:tracking-[-0.5rem] leading-none max-sm:text-center">
            Le Bingo des Tchhhigres
          </h1>
          <img src={tigre} alt="tigre" className="size-16 xl:size-22 mt-6 max-xs:-ms-10" />
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
