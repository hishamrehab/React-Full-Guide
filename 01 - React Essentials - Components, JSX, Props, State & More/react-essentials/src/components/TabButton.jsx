const TabButton = ({children , onSelect }) => {
  console.log("TAB BUTTON COMPONENT RENDING");
  return (
    <li>
        <button onClick={onSelect}>
            {children}
        </button>
    </li>
  )
}

export default TabButton