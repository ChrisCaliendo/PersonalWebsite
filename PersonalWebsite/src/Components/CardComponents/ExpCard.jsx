const ExpCard = ({title, desc, photoUrl, employer}) => {
    return ( 
        <div className=" p-2 grid grid-cols-1 grid-rows-1 gap-0 place-content-center h-full">
            <div className="flex flex-col">
                <div className={`flex px-3 pr-6 py-2 border-slate-800 bg-slate-200 col-span-1  justify-between rounded-t-2xl `}>
                    
                    <div>
                        <p className="text-2xl">{title}</p>
                        <p className="text-xl">at {employer}</p>
                    </div>
                    {
                    (photoUrl != "" && photoUrl != null) &&
                    <div className="flex justify-end">
                        <img className="object-fill aspect-square w-20  xs:min-h-32 xs:max-w-32 xs:min-w-32 sm:max-w-40 sm:min-w-40 ml-2 my-2 rounded-2xl border-8 border-slate-800" src={photoUrl} alt="No Photo Available :(" />
                    </div>
                    }
                </div>
                <div className="flex items-stretch row-end px-3 py-2 rounded-b-2xl border-t-4 border-slate-800 col-span-2 bg-white bg-opacity-50 h-full">
                    <p className="">{desc}</p>
                </div>
            </div>
        </div>
    );
}
export default ExpCard;