const ButtonTag =({tag}: { tag: string })=>{
    return (
        <div className="btn border-accent border-2 w-[94px] h-[34px] text-accent ">
            {tag}
        </div>
    )
}
export default ButtonTag;