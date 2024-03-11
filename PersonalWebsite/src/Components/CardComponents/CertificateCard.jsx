const Certificatecard = ({title, company, photoUrl, certLink}) => {
    return (  
        <div className=" p-2 grid grid-cols-1 grid-rows-1 place-content-center h-88">
            <div className="">
                <div className={`flex px-3 pr-6 py-2 rounded-t-2xl border-slate-800 bg-slate-200 col-span-1 grow justify-between `}>
                    
                    <div>
                        <p className="text-xl">{title}</p>
                        <p className="text-xl">provided by {company}</p>
                    </div>
                    {
                    (photoUrl != "" && photoUrl != null) &&
                    <div className="flex w-40 xl:w-40 2xl:w-30 ">
                        <img className="object-fill m-2 rounded-2xl border-8 border-slate-800" src={photoUrl} alt="No Photo Available :(" />
                    </div>
                    }
                </div>
            </div>
            <div className="px-3 py-2 rounded-b-2xl border-t-4 border-slate-800 col-span-2 bg-white bg-opacity-50">
                {
                    (certLink!="" && certLink!=null) ?
                    <a href={certLink}>
                        <button className="bg-cyan-500 hover:bg-cyan-800 text-white font-bold py-1 px-2 rounded-xl">
                            Go To Credential page
                        </button>
                    </a>
                    :
                    <p>No link available at this time</p>
                    
                }
            </div>
        </div>
    );
}
 
export default Certificatecard;