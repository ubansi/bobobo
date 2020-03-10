/**
 * ランダムな位置にボを挿入
 * @param {string} str 
 */
const insertBoToRandom = str => {
    const boPos = parseInt(Math.random() * (str.length + 1));
    return `${str.slice(0, boPos)}ボ${str.slice(boPos)}`;
}

/**
 * ランダムな回数ボを挿入する
 * @param {string} str 
 */
const insertBoRandomTimes = str => {
    const boCount = parseInt(Math.random() * 5);

    for (let i = 0; i <= boCount; i++)
        str = insertBoToRandom(str);

    return str;
}