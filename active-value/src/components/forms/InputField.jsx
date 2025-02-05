const InputField = ({type = 'text', value, name, id, label, onChange}) => {
    return (
        <div className='form-group'>
            <label htmlFor={id || name}>{label}:</label>
            <input
                type={type}
                id={id || name}
                name={name}
                value={value}
                onChange={onChange}
            />
            <div className='error' id={`${name}_feedback`}></div>
        </div>
    )
}

export default InputField;