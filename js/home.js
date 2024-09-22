
const getSeatBooking=document.getElementById('adding-seat')
const getAllSeatCountt=document.getElementById('allSeatCount')
const totalSeatinBus=document.getElementById('total-seatinbus')
const getTotalPrices=document.getElementById('sumPrices')
const disableEBtn=document.getElementById('disabledBtn')
const disableInput=document.getElementById('disabledInput')
const noSeatBooked=document.getElementById('no-seat')
const granTotalPrices=document.getElementById('grandTotal')
const phoneNumber=document.getElementById('phone-number')
const nexBtn=document.getElementById('next-btn')
let seatCount=[]
let totalPrices=0
function handler(event){
    noSeatBooked.classList.add('hidden')
    const value=event.innerText;
    if(seatCount.includes(value)){
        return alert(' are bara seat already Booked bara')
    } else if(seatCount.length < 4) {
        event.classList.add('bg-primary')
        event.classList.add('text-white')
        seatCount.push(event.innerText)
        getAllSeatCountt.innerText=seatCount.length
    
        const totalSeatinBusNumber=parseFloat(totalSeatinBus.innerText)
        const newSeat=totalSeatinBusNumber-1
        totalSeatinBus.innerText=newSeat;
    
        document.getElementById('adding-seat').innerHTML+=`
        <li class="flex justify-between">
        <span> ${event.innerText} </span>
        <span> Ecomomy</span>
        <span>500</span>
        
        </li>
        
        `
        totalPrices+=550
        getTotalPrices.innerText=totalPrices
    
       if(seatCount.length > 3){
        disableInput.removeAttribute('disabled')
        disableEBtn.removeAttribute('disabled')
       }

    } else{
        return alert ('are baba maximum seat booked bara tumi ki bara sob seat niba naki bara')
    }
  



}

document.getElementById('disabledBtn').addEventListener('click', function(){
    const couponNumber=disableInput.value
    let couponSave=0
    if(couponNumber!=='New50' && couponNumber!=='Couple20'){
        alert('your  provaied coupon is not valid bara')
        return
    } if(couponNumber==='New50'){
        couponSave=totalPrices * .15

    } else if(couponNumber=== 'Couple20'){
        couponSave=totalPrices * .20
    }
    const getCoupon=document.getElementById('show-coupon-prices')
    getCoupon.innerHTML=`
    <p>Discount</p>
    <p>
    <span> BDT:</span>
    <span> ${couponSave} </span>
    
    </p>
    `
    const grandValue=totalPrices - couponSave;
    granTotalPrices.innerText=grandValue
})

phoneNumber.addEventListener('input', function(e) {
    const inputValue = e.target.value;
    if (inputValue.length >= 11) {
        nexBtn.removeAttribute('disabled');
    }
});



