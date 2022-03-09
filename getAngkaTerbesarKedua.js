// Muhammad Reynaldi

const dataAngka =[9,4,7,7,4,3,2,2,8]

function getAngkaTerbesarKedua(personName) {
    if(personName == null){
        return "Error: Tidak ada isinya?";
    }
    else{
        if (typeof personName!== "object") {
            return "Error: Tipe Data Salah";
        }
        else{
            const data=[];
            new Set(personName).forEach((item) => data.push(item))
            return data.sort((a,b) => b-a)[1];
        }
    }
}

console.log(getAngkaTerbesarKedua(dataAngka));