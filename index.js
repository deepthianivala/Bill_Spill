let globaltipPercent = 0
let value=0;
function increment_1() {
    value++;
    document.getElementById("initial_num").innerHTML=value;
    calculateBill();
}

function decrement_1() {
    value--;
    if(value<0){
        value=0;
    }
    document.getElementById("initial_num").innerHTML=value;
    calculateBill();

}

const calculateBill = (tipPercent=0)=> {
    document.getElementById("total_rupee").innerHTML=0;
    let billAmount = Number(document.getElementById("enter_amount").value)
    let numOfPeople = document.getElementById("initial_num").innerHTML=value;
    let tipAmount=(tipPercent/100) * billAmount
    billAmount=billAmount+tipAmount

    let totalPerPerson = billAmount / numOfPeople
    let tipAmountPerPerson = tipAmount / numOfPeople

    document.getElementById("tip_rupee").innerHTML = `₹ ${tipAmountPerPerson.toFixed(2)}`
    document.getElementById("total_rupee").innerHTML = `₹ ${totalPerPerson.toFixed(2)}`

}
function reset(){
	document.getElementById("enter_amount").value = ''
	document.getElementById("initial_num").value = '1'
	document.getElementById("tip_rupee").innerText = `₹ 0.00`
	document.getElementById("total_rupee").innerText = `₹ 0.00`
}