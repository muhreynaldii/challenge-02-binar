// bukuTerlaris = dataPenjualan.reduce(function (prev, curr) {
//     return curr.totalTerjual > prev.totalTerjual ? curr : prev.namaProduk;
//   });

var objA = {
    a: 10,
    b: 20,
    c: 30
  };
  var objB = {
    a: 3,
    c: 6,
    d: 3
  };

  console.log(
    // concatenate keys array
    Object.keys(objA).concat(Object.keys(objB))
    // or use Object.keys(Object.assign({},objA,objB))

    // iterate to generate the object
    .reduce(function(obj, k) {
      // define object property, treat as 0 if not defined
      obj[k] = (objA[k] || 0) + (objB[k] || 0);
      // return object difference
      return obj;
      // set initial value as an empty object
    }, {})
  )

  const bukuTerlaris = (listBuku)=>{
    return listBuku.reduce((prev,curr)=> prev+((curr.terjual-20)*5), 0);
  }
  console.log(bukuTerlaris(data));