const GameCard = ({title, desc, photUrl}) => {
    return ( 
        <div className="grid grid-cols-2 grid-rows-1 place-content-center">
            <div className="rounded-tl-2xl border-r-4 border-indigo-500 bg-slate-200">
                <p>{title}</p>
                <p className="italic">{desc}</p>
            </div>
            <div className="rounded-tr-2xl border-l-4 border-indigo-500">
                <img className="object-fill w-400 " src={photUrl} alt="" />
            </div>
            <div className="col-span-2">
                
            </div>

        </div>
    );
}
export default GameCard;