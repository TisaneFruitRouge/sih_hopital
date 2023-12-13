export const getTimeOfDay = (date: Date) => {
    let m = date.getMinutes();
    let h = date.getHours();

    const s_m = m < 10 ? `0${m}` : m.toString();
    const s_h = h < 10 ? `0${h}` : h.toString();

    return `${s_h}:${s_m}`;
}