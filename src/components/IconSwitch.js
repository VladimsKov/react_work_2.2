export default function IconSwitch({icon, onSwitch}) {
  
  return (
  <button className="view-btn material-icons" onClick= {() => onSwitch(icon)}>{icon}</button>  
  )
}