const SkillBar = ({name, progress}) => {
    let level = "In Progress";
    if (progress<=20) {
        level = "Beginner";
    } else if (progress<=40) {
        level = "Intermediate";
    } else if (progress<=60) {
        level = "Proficient";
    } else if (progress<=80) {
        level = "Exceptional";
    } else {
        level = "Expert";
    }

    return (  
        <div className="px-5 pb-4 ">
            <div className="bg-white bg-opacity-50 rounded-t-lg">
                <p className="pl-3 opacity-100">
                    {name} 
                </p>
            </div>
            <div className="bg-slate-400 bg-opacity-50 rounded-b-lg font-bold">
                <div 
                    className="opacity-100 p-1 bg-green-700 text-xs font-medium text-blue-100 text-left leading-none rounded-b-lg "
                    style={{width: `${progress}%`}}
                > 
                <p className="pl-3 opacity-100">{level}</p>
                    
                </div> 
            </div>
        </div>
    );
}
export default SkillBar;