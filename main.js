var fName = [
    "Talib", "Aadi", "Ayush", "Abhimanyu", "Bahadur", "Balvan", "Chandan", "Devashu", "Gautam", "Gaurav", "Harsh", "Hardik", "Hitesh", "Ishan", "Indarjit", "Jagat", "Jatin", "Kabir", "Laksh", "Madhav", "Manav", "Naksh", "Nitesh", "Onvir", "Pranjal", "Rachit", "Ranbir", "Rushil", "Veer",
]

var lName = [
    "Raeen", "Acharya", "Agarwal", "Ahlilya", "Anand", "Chatturji", "Chakraborti", "Bhavra", "Chopra", "Dutt", "Gupta", "Gosawami", "Ganeurya", "Pash", "Kapoor", "Kumar", "Maharaj", "Malhotra", "Mathur", "Mahta", "Manday", "Raj", "Saxena", "Thakur", "Tiwari", "Tripathi", "Varma", "Trived", "Shaikh",
]

var input = document.querySelector("#input input")
function sName() {
    clutter = ""
    if (input.value < 10) {
        for (let i = 0; i < input.value; i++) {
            var rfName = Math.floor(Math.random() * 28)
            var rlName = Math.floor(Math.random() * 28)
            var layer = document.querySelector(".layer")
    
            var div = document.createElement("div")
            div.className = "output"
    
            var divFName = document.createElement("div")
            divFName.className = "fName"
            divFName.innerHTML = fName[rfName];
    
            var divLName = document.createElement("div")
            divLName.className = "lName"
            divLName.innerHTML = lName[rlName];
    
            var cover = document.createElement("div")
            cover.appendChild(div)
            div.appendChild(divFName)
            div.appendChild(divLName)
    
            clutter += cover.innerHTML
            layer.innerHTML = clutter
    }
    }
    else{
            et.style.transform = `translateY(0)`;
            et.style.opacity = 1;

            setTimeout(function () {
                et.style.transform = `translateY(200%)`;
                et.style.opacity = 0;
            }, 3000)

    }
}

