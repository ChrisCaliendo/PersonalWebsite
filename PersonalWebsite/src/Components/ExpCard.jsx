const ExpCard = ({title, desc, photoUrl, employer}) => {
    return ( 
        <div className=" p-2 grid grid-cols-1 grid-rows-1 place-content-center h-88">
            <div className="">
            <div className={`px-3 pr-10 py-2 ${photoUrl!="" && photoUrl!=null ? ' flex rounded-t-2xl': 'rounded-t-2xl'} border-slate-800 bg-slate-200 col-span-1 grow justify-between `}>
                
                <div>
                    <p className="text-2xl">{title}</p>
                    <p className="text-xl">at {employer}</p>
                </div>
                {
                (photoUrl != "" && photoUrl != null) &&
                <div className="flex w-40 xl:w-40 2xl:w-30 ">
                    <img className="object-fill m-4 rounded-2xl border-8 border-slate-800" src={photoUrl} alt="No Photo Available :(" />
                </div>
                }
            </div>
            
            </div>
            
            
            <div className="row-end px-3 py-2 rounded-b-2xl border-t-4 border-slate-800 col-span-2 bg-white bg-opacity-50 h-60">
                <p className="">{desc}</p>
            </div>
            

        </div>
    );
}
export default ExpCard;