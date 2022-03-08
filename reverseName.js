//N0 5

// *Cara Manual

const reverseName = (text)=>{
    const splitName = text.split(' ');
    // console.log(splitName);
    const hasilLoop=[]
    for(let i=splitName.length-1;i>=0;i--){
        hasilLoop.push(splitName[i]);
    }
    return hasilLoop.join(' ')
}

console.log(reverseName('Kezia Adenia Timbalo'));

// *Cara Mudah

// const reverseName = (text) => text.split(' ').reverse().join();

// console.log(reverseName('Kezia Adenia Timbalo'));