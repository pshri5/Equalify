
export const Avatar = (props)=> {
    return <div className="flex items-center justify-center rounded-full bg-brand-700 w-12 h-12 text-2xl text-white">
        {props.initials}
    </div>
}