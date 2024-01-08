const ProjectCard = ({title, desc, photUrl}) => {
    return ( 
        <div className="grid grid-cols-2 grid-rows-1 place-content-center">
            <div className="rounded-tl-2xl">
                <p>{title}</p>
                <p className="italic">{desc}</p>
            </div>
            <img className="w-20 rounded-tr-2xl" src={photUrl} alt="" />
            <div className="col- col-span-2">

            </div>

        </div>
    );
}
export default ProjectCard;