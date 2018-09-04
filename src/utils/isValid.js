const isValidMinute = (minute) => Number.isInteger(minute) && minute >= 0 && minute < 60;
const isValidHour = (hour) => Number.isInteger(hour) && hour >= 0 && hour < 24;
const regexp = /^\d{0,2}?:?\d{0,2}$/u;

const isValid = (value) => {
    if (!regexp.test(value)) {
        return false;
    }

    const parts = value.split(':');
    const hourString = parts[0] || '';
    const minuteString = parts[1] || '';
    const hours = parseInt(hourString) || 0;
    const minutes = parseInt(minuteString) || 0;

    if (!isValidHour(hours) || !isValidMinute(minutes)) {
        return false;
    }

    if (minutes < 10 && Number(minuteString[0]) > 5) {
        return false;
    }

    return true;
};

export default isValid;
