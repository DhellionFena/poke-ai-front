export default function LoadingPokeBola(){
    return(
        <main className="flex h-full w-full flex-grow flex-col items-center justify-center px-5 ">
            <div className="w-32 h-32 rounded-full border border-black overflow-hidden animate-spin-clockwise"> 
                <div className="h-1/3 bg-red-600"></div>
                
                <div className="h-1/3 bg-black"></div>
            
                <div className="h-1/3 bg-white"></div>
            </div>

        </main>
    );
}