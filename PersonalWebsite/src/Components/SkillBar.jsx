const SkillBar = ({name, progress}) => {
    return (  
        <div className="px-5 pb-4 ">
            <div className="bg-white bg-opacity-50 rounded-t-lg">
                <p className="pl-3 opacity-100">
                    {name} 
                </p>
            </div>
            <div className="bg-slate-400 bg-opacity-50 rounded-b-lg">
                <div 
                    className="opacity-100 p-2 bg-green-700 text-xs font-medium text-blue-100 text-center leading-none rounded-b-lg "
                    style={{width: `${progress}%`}}
                > 
                    {}
                </div> 
            </div>
        </div>
    );
}
export default SkillBar;