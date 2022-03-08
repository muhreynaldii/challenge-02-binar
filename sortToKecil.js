// const sortToKecil = (arr) => arr.sort((a,b)=>b-a)

//No 6

// console.log(sortToKecil([5,3,4,7,8,9,12]));

//tinggal bikin unik bisa pake filter, atau reduce

const sortToKecil = (arr) =>{
    const data=[];
    new Set(arr).forEach((item)=> data.push(item))
    return data.sort((a,b) => b-a)[1];
}

console.log(sortToKecil([5,5,5,3,4,7,8,9,12]));