function checkEmail(email) {
    let str = /\S+@\S+\.\S+/;
    if(email == null){
        return "Error: Tidak ada isinya?";
    }
    else{
        if (typeof email !== "string") {
            return "Error: Tipe Data Salah";
        }
        else{
            if (str.test(email) == true) {
                return "Valid";
            }
            else{
                return "Invalid";
            }
        }
    }
}
console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail());
console.log(checkEmail(32));


// const checkTypeNumber = (givenNumber) =>{
//     if(givenNumber == null){
//         return "Error: Bro Where is Parameter?";
//     }
//     else{
//         if (typeof givenNumber !== "number") {
//             return "Error: Invalid data type";
//         }
//     }
// }
