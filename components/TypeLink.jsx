import Link from 'next/link'
/**
 * @description Used to add links to Types(Number, string etc.) 
 * @param {import('next/link').LinkProps} linkProps link Properties 
*/
export default function TypeLink({ style = { color: '#a8aff8'}, ...props }, ...a) {
    console.log("props", style, props, a)
    return (
        <Link style={style} {...props}>{props.label}</Link>
    )
}