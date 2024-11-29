export const FooterSection = (props) => {
    return <>
        <div className={`${props.className} list-none`}>
            <div className="text-2xl font-bold mb-2">{props.title}</div>
            {props.children}
        </div>
    </>
}