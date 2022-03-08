// Muhammad Reynaldi

const checkTypeNumber = (givenNumber) =>{
    if(givenNumber == null){
        return "Error: Bro Where is Parameter?";
    }
    else{
        if (typeof givenNumber !== "number") {
            return "Error: Invalid data type";
        }
        else{
            if (givenNumber % 2 == 0) {
                return "GENAP";

            }
            else if(givenNumber % 2 == 1){
               return "GANJIL";
            }
        }
    }
}
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

