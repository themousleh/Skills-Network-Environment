let groery1;
let groery2;
let groery3;

function calculateTotalAmount(){
    groery1 = parseFloat(document.getElementById('grocery1').value);
    groery2 = parseFloat(document.getElementById('grocery2').value);
    groery3 = parseFloat(document.getElementById('grocery3').value);


    let totalamount= groery1+groery2+groery3;

    document.getElementById('result').innerText= `The total amount is:$ ${totalamount}`;

}


// function calculateTotalAmount(){
//     console.log("Function called!"); // Add this line for debugging
//     groery1 = parseFloat(document.getElementById('grocery1').value);
//     groery2 = parseFloat(document.getElementById('grocery2').value);
//     groery3 = parseFloat(document.getElementById('grocery3').value);

//     let totalamount = groery1 + groery2 + groery3;

//     document.getElementById('result').innerText = `The total amount is: $${totalamount}`;
// }
