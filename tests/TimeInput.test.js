import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import TimeInput from '../src/TimeInput';

afterEach(cleanup);

const setup = (props) => render(<TimeInput {...props} />);

describe('TimeInput', () => {
    it('should render a text input with default props', () => {
        const { container } = setup({
            initialTime: '13:37',
        });

        expect(container).toMatchSnapshot();
    });

    it('should render a custom input with default props', () => {
        const custom = <input type="time" />;
        const { container } = setup({
            initialTime: '13:37',
            input: custom,
        });

        expect(container).toMatchSnapshot();
    });

    it('should call the "onChange" prop when using a default input', () => {
        const onChange = jest.fn();
        const { container } = setup({
            initialTime: '13:37',
            onChange,
        });

        fireEvent.change(container.firstChild, {
            target: {
                value: '14:00',
            },
        });

        expect(onChange).toHaveBeenCalledWith(expect.any(Object), '14:00');
    });

    it('should call the "onChange" prop when using a custom input', () => {
        const onChange = jest.fn();
        const { container } = setup({
            initialTime: '13:37',
            input: <input type="time" />,
            onChange,
        });

        fireEvent.change(container.firstChild, {
            target: {
                value: '14:00',
            },
        });

        expect(onChange).toHaveBeenCalledWith(expect.any(Object), '14:00');
    });

    it('should pass on other props when using a default input', () => {
        const { container } = setup({
            initialTime: '13:37',
            placeholder: 'HH:MM',
        });

        expect(container).toMatchSnapshot();
    });

    it('should pass on other props when using a custom input', () => {
        const { container } = setup({
            initialTime: '13:37',
            input: <input type="time" />,
            name: 'foo',
        });

        expect(container).toMatchSnapshot();
    });

    it('should add the separator when only given an hour', () => {
        const onChange = jest.fn();
        const { container } = setup({
            initialTime: '13:37',
            onChange,
        });

        fireEvent.change(container.firstChild, {
            target: {
                value: '14',
            },
        });

        expect(onChange).toHaveBeenCalledWith(expect.any(Object), '14:');
    });

    it('should not call the "onChange" prop when passed something invalid', () => {
        const onChange = jest.fn();
        const { container } = setup({
            initialTime: '13:37',
            onChange,
        });

        fireEvent.change(container.firstChild, {
            target: {
                value: 'invalid',
            },
        });

        expect(onChange).not.toHaveBeenCalled();
    });
});
