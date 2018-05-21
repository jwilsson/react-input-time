import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import isValid from './utils/isValid';

class TimeInput extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            value: this.props.initialTime,
        };
    }

    handleChange (event) {
        const { onChange } = this.props;
        const lastValue = this.state.value;
        let newValue = event.target.value;

        if (newValue === lastValue || !isValid(newValue)) {
            return;
        }

        if (newValue.length === 2 && lastValue.length !== 3 && !newValue.includes(':')) {
            newValue = `${newValue}:`;
        }

        if (newValue.length === 2 && lastValue.length === 3) {
            newValue = newValue.slice(0, 1);
        }

        this.setState({
            value: newValue,
        });

        if (onChange) {
            onChange({
                event,
                value: newValue,
            });
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
