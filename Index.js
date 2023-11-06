function shopOpenCountDown(){
    const openDate = new Date ("August 1, 2024 09:00");
    const now = new Date();

    const diff = openDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 1000 * 60;
    const msinHour = 1000 * 60 * 60;
    const msinDay = 1000 * 60 * 60 * 24;

    const displayDay = Math.floor(diff/msinDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msinDay)/msinHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msinHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
    
        clearInterval(timeID);
        weAreOpen();
    }
    
}

let timeID = setInterval(shopOpenCountDown, 1000);

function weAreOpen(){
    const heading = document.querySelector("h2");
    heading.textContent = "We are finally open!";
    heading.classList.add("openShop");
}

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        removeFocus();
        item.classList.add('selected');
    })
    removeFocus = () => {
        items.forEach (item => {
            item.classList.remove('selected');
        })
    }
})
