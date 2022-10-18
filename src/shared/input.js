export default function AppInput({onChange, className, name, defaultValue}) {
    return <input type="text" 
    name = {name}
    className = {className}       
    defaultValue = {defaultValue} 
    onChange = {onChange}         
    />    
}