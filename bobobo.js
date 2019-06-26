const input = process.argv[2];

const insertBo = str => {
    const boPos = parseInt(Math.random() * (str.length + 1))
    return `${str.slice(0, boPos)}ボ${str.slice(boPos)}`
}

const insertBoBo = str => {
    const boCount = parseInt(Math.random() * 5) - 1
    for (let i = 0; i < boCount; i++)
        str = insertBo(str)

    return str;
}

console.log(insertBoBo(input))