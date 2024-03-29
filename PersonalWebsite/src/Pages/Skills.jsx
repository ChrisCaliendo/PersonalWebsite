import SkillBar from "../Components/OtherComponents/SkillBar";

const Skills = () => {
    return ( 
        <>
        <p className="text-4xl bg-emerald-500 flex justify-center font-ptSans font-bold">Skills</p>
        <div className="bg-emerald-300 grid grid-rows-3 grid-cols-2 gap-4 p-4 place-content-evenly font-ptSans font-bold">
            <div className="bg-purple-400 rounded-md shadow-md col-span-2 md:col-span-1">
                <p className="text-2xl p-1 text-center">Coding Languages</p>
                <SkillBar name="Java" progress={100}/>
                <SkillBar name="JavaScript" progress={100}/>
                <SkillBar name="Python" progress={80}/>
                <SkillBar name="C#" progress={80}/>
                <SkillBar name="SQL" progress={60}/>
                <SkillBar name="C++" progress={20}/>
            </div>
            <div className="bg-orange-300 rounded-md shadow-md col-span-2 md:col-span-1">
                <p className="text-2xl p-1 text-center">Frameworks</p>
                <SkillBar name="React" progress={100}/>
                <SkillBar name="Node.js" progress={80}/>
                <SkillBar name="Flask" progress={60}/>
                <SkillBar name="React Native" progress={60}/>
                <SkillBar name="TypeScript" progress={60}/>
                <SkillBar name="Angular" progress={60}/>
            </div>
            <div className=" bg-cyan-200 rounded-md shadow-md col-span-2 md:col-span-1">
                <p className="text-2xl p-1 text-center">Methodologies</p>
                <SkillBar name="Object-Oriented-Programming" progress={100}/>
                <SkillBar name="Agile Development" progress={60}/>
                <SkillBar name="DevOps" progress={40}/>
                <SkillBar name="SDLC" progress={20}/>
                <SkillBar name="Code Reviews" progress={40}/>
                <SkillBar name="Automated Testing" progress={40}/>
            </div>
            <div className=" bg-amber-200 rounded-md shadow-md col-span-2 md:col-span-1">
                <p className="text-2xl p-1 text-center">Developer Tools</p>
                <SkillBar name="Amazon Web Services" progress={60}/>
                <SkillBar name="MongoDB" progress={60}/>
                <SkillBar name="Firebase" progress={60}/>
                <SkillBar name="Visual Studio" progress={60}/>
                <SkillBar name="PostgreSQL" progress={40}/>
                <SkillBar name="Docker" progress={20}/>
            </div>
        </div>
        </>
    );
}
export default Skills;