export function getDate () {
    const monthString = {
        1: 'Janvier',
        2: 'Février',
        3: 'Mars',
        4: 'Avril',
        5: 'Mai',
        6: 'Juin',
        7: 'Juillet',
        8: 'Août',
        9: 'Septembre',
        10: 'Octobre',
        11: 'Novembre',
        12: 'Décembre'
    }
    const d = new Date();
    const month = monthString[d.getMonth() + 1];
    const myDate = `${d.getDate()} ${month} ${d.getFullYear()}`;
    return myDate;
};

export function getHours () {
    const d = new Date();
    const myHour = `${d.getHours()} h ${d.getMinutes()} et ${d.getSeconds()} sec`
    return myHour;
};  