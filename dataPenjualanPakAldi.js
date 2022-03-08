//NO 7

// bisa pake map atau reduce

const data = [
    {size:10},
    {size:10},
    {size:10},
    {size:10},
    {size:20},
]

const total = (arr) =>arr.reduce((prev,curr) => prev+curr.size, 0)
console.log(total(data));