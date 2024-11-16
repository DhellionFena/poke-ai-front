export default function PokedexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-7 items-center justify-around border border-zinc-900 bg-red-700">
        <div className="h-7 w-6 border border-zinc-950"></div>
        <div className="h-7 w-6 border border-zinc-950"></div>
      </div>
      <div className="h-[calc(100vh-1.75rem)] overflow-auto bg-red-700 px-10 py-5 md:pl-36 md:pr-12">
        <div className="h-full w-full">{children}</div>
      </div>
      {/* linha lateral */}
      <div className="fixed top-0 flex h-[calc(100vh-20.1rem)] w-7 flex-col items-center justify-end border border-zinc-950 border-b-transparent bg-red-700"></div>

      {/* bolinhas lateral */}
      <div className="fixed top-0 flex h-full w-7 flex-col items-center justify-center border border-black border-b-transparent border-t-transparent md:h-[calc(100vh-10.8rem)] md:justify-end md:border-r-transparent">
        <div className="my-3 h-4 w-4 rounded-full border border-zinc-950 bg-green-700"></div>
        <div className="my-3 h-4 w-4 rounded-full border border-zinc-950 bg-yellow-500"></div>
        <div className="my-3 h-4 w-4 rounded-full border border-zinc-950 bg-red-800"></div>
      </div>

      {/* quadrado */}
      <div className="fixed bottom-0 hidden h-44 w-[7.72rem] items-start justify-center border border-zinc-950 border-y-transparent md:flex">
        <div className="mt-4 flex h-20 w-20 items-center justify-start rounded-full border border-zinc-950 bg-sky-400">
          <div className="mb-6 ml-2 h-8 w-8 rounded-full bg-sky-200"></div>
        </div>
      </div>

      {/* triangulo linha inclinada */}
      <div className="fixed bottom-40 left-[4.7rem] hidden h-44 w-[1px] rotate-[147deg] bg-zinc-950 md:block"></div>
    </>
  );
}
