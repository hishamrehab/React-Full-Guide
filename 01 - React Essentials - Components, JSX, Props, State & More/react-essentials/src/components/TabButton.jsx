const TabButton = ({children  , isSelected , ...props }) => {
  console.log("TAB BUTTON COMPONENT RENDING");
  return (
    <li>
        <button 
        className={isSelected ? "active" : ""}
        onClick={onSelect}
        {...props}
        >
            {children}
        </button>
    </li>
  )
}

export default TabButton