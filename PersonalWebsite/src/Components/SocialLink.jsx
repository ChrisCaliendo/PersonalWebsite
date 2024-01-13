const SocialLink = ({ picture, link}) => {
    return (  
        <div className="px-3">
            <a href={link}>
                <img className="w-16 rounded-full border border-4 border-white hover:border-slate-300" src={picture} alt="" />
            </a>
        </div>
    );
}
export default SocialLink;