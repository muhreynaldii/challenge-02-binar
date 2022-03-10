// Muhammad Reynaldi

function getSplitName(personName) {
    if(personName == null) return "Error: Tidak ada isinya?";
    if (typeof personName !== "string") return "Error: Tipe Data Salah";

        const splitName= personName.split(' ');
        const lengthData = splitName.length;

        switch (lengthData) {
            case 1:
                return{
                    firstName :splitName[0],
                    middleName :null,
                    lastName :null,
                }
            case 2:
                return{
                    firstName :splitName[0],
                    middleName :null,
                    lastName :splitName[1],
                }
            case 3:
                return{
                    firstName : splitName[0],
                    middleName : splitName[1],
                    lastName : splitName[2],
                }
            default:
                return "Error : this function only for 3 characters name";
        }
}
console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName(0));