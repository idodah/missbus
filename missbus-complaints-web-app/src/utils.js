import { format } from 'date-fns'

export const getDateFromHours = (time) => {
    time = time.split(':');
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
}

export const getStringFromDate = (date) => {
    try {
        return format(date, 'HH:mm')
    } catch {
        console.log(date)
    }
}
