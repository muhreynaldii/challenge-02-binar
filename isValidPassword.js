// Muhammad Reynaldi

function isValidPassword(pass) {
    let str = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(pass == null){
        return "Error: Tidak ada isinya?";
    }
    else{
        if (typeof pass !== "string") {
            return "Error: Tipe Data Salah";
        }
        else{
            return str.test(pass);
        }
    }
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());