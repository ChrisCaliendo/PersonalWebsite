const ProjectCard = ({
  title,
  desc,
  photoUrl,
  elements,
  depoLink,
  gitLink,
}) => {
  return (
    <div className=" p-2 flex flex-col place-content-center h-full">
      <div className="flex h-min-40">
        <div
          className={`px-3 py-2 ${
            photoUrl != "" && photoUrl != null
              ? "rounded-tl-2xl border-r-2"
              : "rounded-t-2xl "
          } border-slate-800 bg-slate-200 col-span-1 grow`}
        >
          <p className="text-2xl">{title}</p>
          <p>Made with:</p>
          <p className="italic">{elements}</p>
        </div>
        {photoUrl != "" && photoUrl != null && (
          <div className="flex rounded-tr-2xl border-l-2 border-slate-800 justify-center bg-slate-800 ">
            <img
              className="object-scale-down h-32  rounded-tr-2xl"
              src={photoUrl}
              alt="No Photo Available :("
            />
          </div>
        )}
      </div>

      <div className="grow row-end px-3 pt-3 border-t-4 border-slate-800 col-span-2 bg-white bg-opacity-50 h-full">
        <p className="flex pb-4 h-full">{desc}</p>
      </div>
      <div className="px-3 pt-2 rounded-b-2xl border-t-4 border-slate-800 col-span-2 bg-slate-200">
        {depoLink != "" && (
          <a href={depoLink}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-2 py-1 px-2 mr-2 rounded-xl">
              Go to Deployment
            </button>
          </a>
        )}
        {gitLink != "" && (
          <a href={gitLink} className="">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold mb-2 py-1 px-2 rounded-xl">
              Go to GitHub page
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
