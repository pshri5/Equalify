
const defaultStyles = 'border-2 px-12 py-12 rounded-3xl bg-brand-100 opacity-50 shadow-lg';

export const Card = (props)=>{
    return <div className={`
        ${defaultStyles}
        ${props.className}
        `}>
        {props.children}
    </div>
}