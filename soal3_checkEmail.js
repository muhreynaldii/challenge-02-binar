// Muhammad Reynaldi

function checkEmail(email) {
    let str = /\S+@\S+\.\S+/;
    if(email == null) return "Error: Tidak ada isinya?";
    if (typeof email !== "string")  return "Error: Tipe Data Salah";

    if (str.test(email) == true) {
        return "Valid";
    }
    else{
        return "Invalid";
    }
}
console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail());
console.log(checkEmail(32));