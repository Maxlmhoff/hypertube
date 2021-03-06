import React from 'react';
import PropTypes from 'prop-types';

const InputTextArea = ({
  label, name, id, placeholder, required, value, onChange,
}) => (
  <div className="form-group">
    <label htmlFor={label}>
      {label}
    </label>
    <textarea
      placeholder={placeholder}
      name={name}
      id={id}
      className="form-control"
      onChange={onChange}
      value={value}
      required={required}
    />
  </div>
);

InputTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputTextArea.defaultProps = {
  placeholder: undefined,
  required: true,
  value: undefined,
  onChange: undefined,
};


export default InputTextArea;
