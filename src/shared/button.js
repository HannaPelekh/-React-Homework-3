export default function Appbutton({children, className, cb}) {
    return <button className={className} onClick={cb}>{children}</button>;
}