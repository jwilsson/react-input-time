import React, {
    ChangeEvent,
    ComponentPropsWithoutRef,
    ReactElement,
    useState,
} from 'react';
import PropTypes from 'prop-types';

import getNewValue from './utils/getNewValue';

export interface Props extends ComponentPropsWithoutRef<'input'> {
    initialTime: string;
    input?: ReactElement;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TimeInput = ({ initialTime, input, onChange, ...props }: Props) => {
    const [value, setValue] = useState(initialTime);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = getNewValue(value, event.target.value);

        if (newValue) {
            setValue(newValue);

            if (onChange) {
                onChange(event);
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
        <input {...props} onChange={handleChange} type="text" value={value} />
    );
};

TimeInput.propTypes = {
    initialTime: PropTypes.string.isRequired,
    input: PropTypes.node,
    onChange: PropTypes.func,
};

export default TimeInput;
