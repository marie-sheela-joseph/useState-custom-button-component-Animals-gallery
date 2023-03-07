function CustomButton({ label, handleClick, id }) {
    console.log(label);
    return <button onClick={handleClick} id={id}>{label}</button>
}
export default CustomButton;