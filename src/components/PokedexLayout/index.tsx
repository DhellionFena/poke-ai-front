export default function PokedexLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="bg-red-700 h-7 border border-zinc-900 flex items-center justify-around">
                <div className="w-6 h-7 border border-zinc-950"></div>
                <div className="w-6 h-7 border border-zinc-950"></div>
            </div>
            <div className="bg-red-700 pl-36 pr-12 py-5 h-[calc(100vh-1.75rem)] overflow-auto"
            >
                <div className="h-full w-full">

                    {children}
                </div>
            </div>
            {/* linha lateral */}
            <div className="fixed h-[calc(100vh-20.1rem)] w-7 top-0 border border-zinc-950 bg-red-700 border-b-transparent flex items-center justify-end flex-col">
            </div>

            {/* bolinhas lateral */}
            <div className="fixed top-0 w-7 h-[calc(100vh-12rem)] flex items-center justify-end flex-col">

                <div className="w-4 h-4 my-3 rounded-full bg-green-700 border border-zinc-950"></div>
                <div className="w-4 h-4 my-3 rounded-full bg-yellow-500 border border-zinc-950"></div>
                <div className="w-4 h-4 my-3 rounded-full bg-red-800 border border-zinc-950"></div>
            </div>

            {/* quadrado */}
            <div className="fixed h-44 w-[7.72rem] bottom-0 border border-y-transparent border-zinc-950 flex items-start justify-center">
                <div className="w-20 h-20 mt-4 bg-sky-400 rounded-full border border-zinc-950 flex items-center justify-start">
                    <div className="w-8 h-8 bg-sky-200 rounded-full  ml-2 mb-6"></div>
                </div>
            </div>

            {/* triangulo linha inclinada */}
            <div className="fixed h-44 w-[1px] bottom-40 left-[4.7rem] bg-zinc-950 rotate-[147deg]"></div>
        </>
    );
}