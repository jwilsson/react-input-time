import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TimeInput from '../src/TimeInput';

configure({
    adapter: new Adapter(),
});

describe('TimeInput', () => {
    it('should render a text input with default props', () => {
        expect(shallow(<TimeInput initialTime="13:37" />).containsMatchingElement(<input type="text" />)).toBe(true);
    });

    it('should render a custom input with default props', () => {
        const custom = <input type="time" />;
        const component = (
            <TimeInput
                input={ custom }
                initialTime="13:37"
            />
        );

        expect(shallow(component).containsMatchingElement(custom)).toBe(true);
    });

    it('should render a passed "initialTime" prop', () => {
        const component = <TimeInput initialTime="13:37" />;

        expect(shallow(component).containsMatchingElement(<input value="13:37" />)).toBe(true);
    });

    it('should call the "onChange" prop when using a default input and passed one', () => {
        const onChange = ({ event, value }) => {
            expect(event).toBeTruthy();
            expect(value).toBe('13:37');
        };

        const component = (
            <TimeInput
                onChange={ onChange }
                initialTime="13:37"
            />
        );

        const event = {
            target: {
                value: '13:37',
            },
        };

        shallow(component).find('input').simulate('change', event);
    });

    it('should call the "onChange" prop when using a custom input and passed one', () => {
        const onChange = ({ event, value }) => {
            expect(event).toBeTruthy();
            expect(value).toBe('14:00');
        };

        const component = (
            <TimeInput
                input={
                    <input type="time" />
                }
                initialTime="13:37"
                onChange={ onChange }
            />
        );

        const event = {
            target: {
                value: '14:00',
            },
        };

        shallow(component).find('input').simulate('change', event);
    });

    it('should pass on other props when using a default input', () => {
        const component = (
            <TimeInput
                initialTime="13:37"
                placeholder="HH:MM"
            />
        );

        expect(shallow(component).containsMatchingElement(<input placeholder="HH:MM" />)).toBe(true);
    });

    it('should pass on other props when using a custom input', () => {
        const component = (
            <TimeInput
                input={ <input type="time" /> }
                initialTime="13:37"
                name="foo"
            />
        );

        expect(shallow(component).containsMatchingElement(
            <input
                type="time"
                name="foo"
            />,
        )).toBe(true);
    });

    it('should add the separator when only given an hour', () => {
        const onChange = ({ value }) => {
            expect(value).toBe('14:');
        };

        const component = (
            <TimeInput
                input={
                    <input type="time" />
                }
                initialTime="14:15"
                onChange={ onChange }
            />
        );

        const event = {
            target: {
                value: '14',
            },
        };

        shallow(component).find('input').simulate('change', event);
    });
});
