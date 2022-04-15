import PropTypes from 'prop-types';
import type { FC } from 'react';
import React, {
    useState,
    type ChangeEvent,
    type ComponentPropsWithoutRef,
    type ReactElement,
} from 'react';
import getNewValue from './utils/getNewValue';

export type Props = ComponentPropsWithoutRef<'input'> & {
    initialTime: string;
    input?: ReactElement;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TimeInput: FC<Props> = ({ initialTime, input, onChange, ...props }) => {
    const [value, setValue] = useState(initialTime);
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
    input: PropTypes.element,
    onChange: PropTypes.func,
};

export default TimeInput;
