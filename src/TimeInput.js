import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import isValid from './utils/isValid';

class TimeInput extends PureComponent {
    state = {
        value: this.props.initialTime,
    };

    handleChange = (event) => {
        const { onChange } = this.props;
        const { value } = this.state;

        let newValue = event.target.value;

        if (newValue === value || !isValid(newValue)) {
            return;
        }

        if (newValue.length === 2 && value.length !== 3 && !newValue.includes(':')) {
            newValue = `${newValue}:`;
        }

        if (newValue.length === 2 && value.length === 3) {
            newValue = newValue.slice(0, 1);
        }

        this.setState({
            value: newValue,
        });

        if (onChange) {
            onChange(event, newValue);
        }
    };

    render () {
        // eslint-disable-next-line no-unused-vars
        const { initialTime, input, ...props } = this.props;
        const { value } = this.state;

        if (input) {
            return React.cloneElement(input, {
                ...props,
                onChange: this.handleChange,
                value,
            });
        }

        return (
            <input
                {...props}
                onChange={this.handleChange}
                type="text"
                value={value}
            />
        );
    }
}

TimeInput.propTypes = {
    initialTime: PropTypes.string.isRequired,
    input: PropTypes.node,
    onChange: PropTypes.func,
};

export default TimeInput;
