const currencyEl_one =document.getElementById('currency-one');
const amountEl_one =document.getElementById('amount-one');

const currencyEl_two =document.getElementById('currency-two');
const amountEl_two =document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rate and update the DOM
function calculate() {
    const currency_one =currencyEl_one.value;
    const currency_two =currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
    const rate = data.rates[currency_two];
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;


    amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
}

// event listners
currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);

swap.addEventListener('click',() => {
    const temp=currencyEl_one.value;
    currencyEl_one.value=currencyEl_two.value;
    currencyEl_two.value=temp;

    calculate();
})

calculate();






































// trial fetch
// async function calcs() {
//     const url = 'https://api.exchangerate-api.com/v4/latest/USD';
    
//     try {
//         const res = await fetch(url)
//         if (!res.ok){
//             console.log(res.status);
//         }
        
//         const json = await res.json();
//         console.log(json);
        

//     } catch (error) {
//         console.error();     
        
//     }

//     //  fetch(`items.json`)
//     // .then(response => response.json())
//     // .then(data => console.log(data))
    
//     // .catch(error => console.error('Error:', error));
//     // .then(data => document.body.innerHTML=data[0].text); http://192.168.1.2:3000/
// }

// calcs();




