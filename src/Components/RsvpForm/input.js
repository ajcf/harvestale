const Input = (props) => (
    <input
        className={props.error ? "error" : ""}
        type="text"
        onChange={props.onChange}
        value={props.value}
    />
);

export default Input;