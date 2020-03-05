export function generateId(prefix) {
    return prefix + '_' + new Date().getTime();
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}