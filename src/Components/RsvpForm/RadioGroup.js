const RadioGroup = (props) => (
  <div className={`radioGroup ${props.error ? 'error' : ''}`}>
    {props.options.map((option) => (
      <label key={`${props.name}-${option.value}`}>
        <input
          type="radio"
          name={props.name}
          onChange={() => props.onChange(option.value)}
          className="niceRadio"
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default RadioGroup;
