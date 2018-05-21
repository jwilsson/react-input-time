import isValid from '../../src/utils/isValid';

const testValues = [
    {
        valid: true,
        value: '12:12',
    },
    {
        valid: true,
        value: '23:14',
    },
    {
        valid: true,
        value: '23:14',
    },
    {
        valid: false,
        value: '19:99',
    },
    {
        valid: false,
        value: '44:12',
    },
    {
        valid: true,
        value: '00:00',
    },
    {
        valid: false,
        value: '44:1',
    },
    {
        valid: true,
        value: '4',
    },
    {
        valid: true,
        value: '00:',
    },
    {
        valid: false,
        value: '00:78',
    },
    {
        valid: false,
        value: '23:6',
    },
    {
        valid: true,
        value: '0',
    },
    {
        valid: true,
        value: '23:3',
    },
    {
        valid: true,
        value: '23:59',
    },
    {
        valid: true,
        value: '2:59',
    },
    {
        valid: true,
        value: ':21',
    },
    {
        valid: true,
        value: '6:21',
    },
    {
        valid: false,
        value: 'invalid',
    },
];

describe('isValid', () => {
    testValues.forEach((test) => {
        it(test.value, () => {
            expect(isValid(test.value)).toBe(test.valid);
        });
    });
});
