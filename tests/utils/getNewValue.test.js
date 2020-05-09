import getNewValue from '../../src/utils/getNewValue';

describe('getNewValue', () => {
    it('should not return anything when passed nothing', () => {
        const result = getNewValue('', '');

        expect(result).toBe('');
    });

    it('should not return anything when passed something invalid', () => {
        const result = getNewValue('23', '25');

        expect(result).toBe('');
    });

    it('should append the separator to valid values', () => {
        const result = getNewValue('', '14');

        expect(result).toBe('14:');
    });

    it('should remove the separator and part of the hour when removing the separator', () => {
        const result = getNewValue('14:', '14');

        expect(result).toBe('1');
    });
});
