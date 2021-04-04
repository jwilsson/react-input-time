import isValid from './isValid';

const getNewValue = (prevValue: string, newValue: string): string => {
    if (newValue === prevValue || !isValid(newValue)) {
        return '';
    }

    if (
        newValue.length === 2 &&
        prevValue.length !== 3 &&
        !newValue.includes(':')
    ) {
        newValue = `${newValue}:`;
    }

    if (newValue.length === 2 && prevValue.length === 3) {
        newValue = newValue.slice(0, 1);
    }

    return newValue;
};

export default getNewValue;
