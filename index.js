const billAmount = document.querySelector('#bill')
const btn = document.querySelector('.btn')
const totalAmountOfPeople = document.querySelector('#Tpeople')
const finalAmount = document.querySelector('#final')
const colorChanger = document.querySelector('.colorChanger')
const changeBg = document.querySelector('.changeBg')
const form = document.getElementsByTagName('form')[0]
console.log(form)
// console.log(totalAmountOfPeople)

const homeDisplay = () =>{

}
function getnumbers(){
    const initialAmount = parseFloat(billAmount.value.trim());
    const amountOfPeople = parseFloat(totalAmountOfPeople.value.trim())
    if(isNaN(initialAmount) || isNaN(amountOfPeople) ){
        alert("please enter a number value no letters")
        return;
    } 
    const total = initialAmount / amountOfPeople;
    finalAmount.textContent = `each person will pay: R${total.toFixed(2)}`
    if(total > 0){
       finalAmount.style.display = 'block'
    } else{
        finalAmount.style.display = 'none'
    }
 
 
}
const changingBg = () => {
    const userInput = colorChanger.value.trim()
    if(userInput){
        form.style.backgroundColor = userInput;
    }
    console.log(userInput)
}


changeBg.addEventListener('click', changingBg)
btn.addEventListener('click', getnumbers)