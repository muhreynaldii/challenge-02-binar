// Muhammad Reynaldi

const changeWord = (selectedText,changedText,text) =>{

    return text.split(selectedText).join(changedText);
}
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku";

console.log(changeWord('mencintai','membenci',kalimat1));
console.log(changeWord('bromo','semeru',kalimat2));
