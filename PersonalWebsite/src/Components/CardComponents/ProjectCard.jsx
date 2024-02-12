const ProjectCard = ({title, desc, photoUrl, elements, depoLink, gitLink}) => {
    return ( 
        <div className=" p-2 grid grid-cols-1 grid-rows-1 place-content-center h-88">
            <div className="flex">
            <div className={`px-3 py-2 ${photoUrl!="" && photoUrl!=null ? 'rounded-tl-2xl border-r-2': 'rounded-t-2xl'} border-slate-800 bg-slate-200 col-span-1 grow`}>
                <p className="text-2xl">{title}</p>
                <p>Made with:</p>
                <p className="italic">{elements}</p>
            </div>
            {
                (photoUrl != "" && photoUrl != null) &&
                <div className="flex rounded-tr-2xl border-l-2 border-slate-800 justify-center bg-slate-800">
                    <img className="object-scale-down sm:w-50 md:w-80 lg:w-200 xl:w-200 2xl:w-300 rounded-tr-2xl" src={photoUrl} alt="No Photo Available :(" />
                </div>
            }
            </div>
            
            
            <div className="row-end px-3 py-2 border-t-4 border-slate-800 col-span-2 bg-white bg-opacity-50 h-60">
                <p className="">{desc}</p>
            </div>
            <div className="px-3 pt-2 rounded-b-2xl border-t-4 border-slate-800 col-span-2 bg-slate-200">
                {
                    depoLink!="" &&
                    <a href={depoLink}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-2 py-1 px-2 mr-2 rounded-xl">
                            Go to Deployment Site
                        </button>
                    </a>
                }
                {
                    gitLink!="" &&
                    <a href={gitLink} className="">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold mb-2 py-1 px-2 rounded-xl">
                            Go to GitHub Page
                        </button>
                    </a>
                }
                
            </div>

        </div>
    );
}
export default ProjectCard;