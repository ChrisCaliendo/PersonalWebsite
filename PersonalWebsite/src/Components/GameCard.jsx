const GameCard = ({title, desc, photoUrl, gameLink, note}) => {
    return ( 
        <div className="p-2 grid grid-cols-1 grid-rows-1 place-content-center">
            <div className="px-3 py-2 rounded-tl-2xl border-r-2 border-slate-800 bg-slate-200">
                <p className="text-2xl">{title}</p>
                <p className="italic">{desc}</p>
            </div>
            <div className="rounded-tr-2xl border-l-2 border-slate-800">
                <img className="object-cover h-48 w-48 sm:w-80 md:w-80 lg:w-200 xl:w-200 2xl:w-200 rounded-tr-2xl bg-blue-400" src={photoUrl} alt="No Photo Available :(" />
            </div>
            <div className="px-3 py-2 rounded-b-2xl border-t-4 border-slate-800 col-span-2 bg-white bg-opacity-50">
                {
                    (gameLink!="" && gameLink!=null) ?
                    <a className="" href={gameLink}>
                        <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-1 px-2 rounded-xl">
                            Go to Itch.io Page
                        </button>
                    </a>
                    :
                    <p>No link available at this time</p>
                    
                }
                <p>{note}</p>
            </div>

        </div>
    );
}
export default GameCard;