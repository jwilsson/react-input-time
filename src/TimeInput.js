import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import isValid from './utils/isValid';

class TimeInput extends PureComponent {
    state = {
        value: this.props.initialTime,
    };

    handleChange (event) {
        const { onChange } = this.props;
        const lastValue = this.state.value;
        let { value } = event.target;

        if (value === lastValue || !isValid(value)) {
            return;
        }

        if (value.length === 2 && lastValue.length !== 3 && !value.includes(':')) {
            value = `${value}:`;
        }

        if (value.length === 2 && lastValue.length === 3) {
            value = value.slice(0, 1);
        }

        this.setState({
            value,
        });

        if (onChange) {
            onChange(event, value);
        }
    }

    render () {
        // eslint-disable-next-line no-unused-vars
        const { initialTime, input, ...props } = this.props;
        const { value } = this.state;

        if (input) {
            return React.cloneElement(input, {
                ...props,
                onChange: (e) => this.handleChange(e),
                value,
            });
        }

        return (
            <input
                { ...props }
                onChange={ (e) => this.handleChange(e) }
                type="text"
                value={ value }
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
