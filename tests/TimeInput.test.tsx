import {
    cleanup,
    fireEvent,
    render,
    type RenderResult,
} from '@testing-library/react';
import React from 'react';
import TimeInput, { type Props } from '../src/TimeInput';

afterEach(cleanup);

const setup = (props: Props): RenderResult => render(<TimeInput {...props} />);

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

        if (container.firstChild) {
            fireEvent.change(container.firstChild, {
                target: {
                    value: '14:00',
                },
            });
        }

        expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call the "onChange" prop when using a custom input', () => {
        const onChange = jest.fn();
        const { container } = setup({
            initialTime: '13:37',
            input: <input type="time" />,
            onChange,
        });

        if (container.firstChild) {
            fireEvent.change(container.firstChild, {
                target: {
                    value: '14:00',
                },
            });
        }

        expect(onChange).toHaveBeenCalledWith(expect.any(Object));
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

    it('should not call the "onChange" prop when passed something invalid', () => {
        const onChange = jest.fn();
        const { container } = setup({
            initialTime: '13:37',
            onChange,
        });

        if (container.firstChild) {
            fireEvent.change(container.firstChild, {
                target: {
                    value: 'invalid',
                },
            });
        }

        expect(onChange).not.toHaveBeenCalled();
    });
});
