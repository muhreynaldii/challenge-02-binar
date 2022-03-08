//no 6
//*cara mudah
// const reverseName = (text) => text.split('').reverse().join('').split(' ').reverse().join(' ');

// console.log(reverseName('Kezia Adenia Timbalo'));


//*carasusah
const reverseName = (text) => {
    const splitName = text.split('')
    const hasilLoop = []
    for (let i = splitName.length - 1; i >= 0; i--) {
        hasilLoop.push(splitName[i])
    }

    // Direverse ulang
    const hasilLoopNew = hasilLoop.join('')
    const splitNameNew = hasilLoopNew.split(' ')
    const result = []
    for (let i = splitNameNew.length - 1; i >= 0; i--) {
        result.push(splitNameNew[i])
    }

    return result.join(' ')
}

console.log(reverseName('Kezia Adenia Timbalo'));