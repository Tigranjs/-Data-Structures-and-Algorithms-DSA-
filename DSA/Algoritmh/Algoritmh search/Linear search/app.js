
let time  = null;
let pause = false;

function Linear_Search(arr, x) {

    let post = 0;
    let count = 0
    pause = true;
    document.querySelector(".search").innerHTML = arr[count];
    time = setInterval(() => {

        if (arr[count] == x) {
            pause = false
            clearInterval(time);
        }
        document.querySelector(".search").innerHTML = arr[count];
        document.querySelector(".search").style.left = post + "px";

        post += 110;
        count++;

    }, 1500)
}

function ViewsScreen(arr) {

    document.querySelector(".example > .list_items").innerHTML = "<div class='search'></div>";
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement("div")

        item.innerHTML = `<span>${arr[i]}</span>`;

        document.querySelector(".example > .list_items").append(item);
    }

}


function CreateNumberRandom() {

    let arr = [];

    for (let i = 0; i < 100; i++) {
        arr.push(Math.round(Math.random() * 100));
    }

    return [...new Set(arr)].slice(0, Math.round(Math.random() * 8 + 5));
}


function CreateWordRandom() {

    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("");
    let arr = []

    for (let i = 0; i < 100; i++) {
        arr.push(str[Math.round(Math.random() * str.length - 1)])
    }

    return [...new Set(arr)].slice(0, Math.round(Math.random() * 10 + 5))
}


buttonNumber.addEventListener("click", () => {
    if(!pause){
        let arr = CreateNumberRandom();
        let x = arr[Math.round(Math.random() * arr.length - 1)];
    
        ViewsScreen(arr);
        document.querySelector(".screen").innerHTML = `<h2> 
        <span>Search: ${x}<span>
        </h2>
        `;
        Linear_Search(arr, x);
    }
    
})

buttonWord.addEventListener("click",()=>{
    if(!pause){
        let arr = CreateWordRandom();
        let x = arr[Math.round(Math.random() * arr.length - 1)];
    
        ViewsScreen(arr);
        document.querySelector(".screen").innerHTML = `<h2> 
        <span>Search: ${x}<span>
        </h2>
        `;
        Linear_Search(arr, x);
    }
})