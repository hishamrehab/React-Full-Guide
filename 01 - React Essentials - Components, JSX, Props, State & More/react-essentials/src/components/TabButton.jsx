const TabButton = ({children , onSelect , isSelected }) => {
  console.log("TAB BUTTON COMPONENT RENDING");
  return (
    <li>
        <button 
        className={isSelected ? "active" : ""}
        onClick={onSelect}>
            {children}
        </button>
    </li>
  )
}

export default TabButton