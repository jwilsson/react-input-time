import React, { useState } from 'react';
import PropTypes from 'prop-types';

import getNewValue from './utils/getNewValue';

const TimeInput = ({ initialTime, input, onChange, ...props }) => {
    const [value, setValue] = useState(initialTime);
    const handleChange = (event) => {
        const newValue = getNewValue(value, event.target.value);

        if (newValue) {
            setValue(newValue);

            if (onChange) {
                onChange(event, newValue);
            }
        }
    };

    if (input) {
        return React.cloneElement(input, {
            ...props,
            onChange: handleChange,
            value,
        });
    }

    return (
        <input
            {...props}
            onChange={handleChange}
            type="text"
            value={value}
        />
    );
};

TimeInput.propTypes = {
    initialTime: PropTypes.string.isRequired,
    input: PropTypes.node,
    onChange: PropTypes.func,
};

export default TimeInput;
