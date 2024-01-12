const ProjectCard = ({title, desc, photoUrl, elements, depoLink, gitLink}) => {
    return ( 
        <div className="p-2 grid grid-cols-1 grid-rows-1 place-content-center">
            <div className="px-3 py-2 rounded-tl-2xl border-r-2 border-slate-800 bg-slate-200">
                <p className="text-2xl">{title}</p>
                <p>Made with:</p>
                <p className="italic">{elements}</p>
            </div>
            <div className="rounded-tr-2xl border-l-2 border-slate-800">
                <img className="object-cover h-48 w-48 sm:w-80 md:w-80 lg:w-200 xl:w-200 2xl:w-200 rounded-tr-2xl" src={photoUrl} alt="No Photo Available :(" />
            </div>
            <div className="px-3 py-2 border-t-4 border-slate-800 col-span-2 bg-white bg-opacity-50">
                <p>{desc}</p>
            </div>
            <div className="px-3 py-2 rounded-b-2xl border-t-4 border-slate-800 col-span-2 bg-slate-200">
                {
                    depoLink!="" &&
                    <p>Link to Deployment: {depoLink}</p>
                }
                {
                    gitLink!="" &&
                    <p>Link to GitHub: {gitLink}</p>
                }
                
            </div>

        </div>
    );
}
export default ProjectCard;