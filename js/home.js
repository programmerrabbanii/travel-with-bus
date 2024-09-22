
const getSeatBooking=document.getElementById('adding-seat')
const getAllSeatCountt=document.getElementById('allSeatCount')
let seatCount=[]
function handler(event){
    console.log(event);
    event.classList.add('bg-primary')
    event.classList.add('text-white')
    seatCount.push(event.innerText)
    getAllSeatCountt.innerText=seatCount.length
    // document.getElementById('adding-seat').innerHTML=`
    // <li class="flex justify-between">
    // <span> ${event.innerText} </span>
    // <span> Ecomomy</span>
    // <span>500</span>
    
    // </li>
    
    // `


}



