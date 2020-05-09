import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import getNewValue from './utils/getNewValue';

class TimeInput extends PureComponent {
    state = {
        value: this.props.initialTime,
    };

    handleChange = (event) => {
        const { onChange } = this.props;
        const { value } = this.state;

        const newValue = getNewValue(value, event.target.value);

        if (newValue) {
            this.setState({
                value: newValue,
            });

            if (onChange) {
                onChange(event, newValue);
            }
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
