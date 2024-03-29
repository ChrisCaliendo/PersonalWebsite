const EducationCard = ({degree, place, photoUrl}) => {
    return ( 
        <div className=" p-2 grid grid-cols-1 grid-rows-1 place-content-center h-88">
            <div className="">
                <div className={`flex px-3 pr-6 py-2 rounded-2xl border-slate-800 bg-slate-200 col-span-1 grow justify-between `}>
                    
                    <div>
                        <p className="text-xl">{degree}</p>
                        <p className="text-xl">from {place}</p>
                    </div>
                    {
                    (photoUrl != "" && photoUrl != null) &&
                    <div className="flex w-40 xl:w-40 2xl:w-30 ">
                        <img className="object-fill m-2 rounded-2xl border-8 border-slate-800" src={photoUrl} alt="No Photo Available :(" />
                    </div>
                    }
                </div>
            </div>
            
            

            

        </div>
    );
}
export default EducationCard;