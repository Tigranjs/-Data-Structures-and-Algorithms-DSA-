
let isStart = true

function Create_Itmes(arr) {

    document.querySelector(".list-items").innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        document.querySelector(".list-items").innerHTML += `<div>${arr[i]}</div>`;
    }
}


function Create_Matrix() {
    let arr = [];

    while (true) {
        let random = Math.round(Math.random() * 999);
        if (arr.length >= 24) {
            break;
        } else if (!arr.includes(random)) {
            arr.push(random)
        }
    }

    return arr
}

function Change_Items(arr) {
    document.querySelectorAll(".list-items > div").forEach((item) => !arr.includes(+item.innerHTML) ? item.style.opacity = ".3": item);

}

function Views(value) {
    document.querySelector(".screen").innerHTML = `<h2><span>${value}</span></h2>`;
}

function Includes_Max(arr) {

    let count = 0,
        last_length = arr.length,
        min_array = null;

    let time = setInterval(() => {

        if (arr.length <= 1) {
            clearInterval(time);
            isStart = true
            Views("Max: "+arr.toString())
        }else{
            last_length = arr.length
            min_array = arr.filter(item => item < arr[count])
            arr = arr.filter(item => item >= arr[count]);

            if(min_array.length){
                Views("remove: "+min_array.toString())
            }else{
                Views("Not remove")
            }
            Change_Items(arr)
    
            if(last_length === arr.length){
                count++
            }
        }
        

    }, 1500);

}

function Start() {
    if(isStart){
        document.querySelector(".screen").innerHTML = "";
        isStart = false;
        let arr = Create_Matrix();
        Create_Itmes(arr);
        Includes_Max(arr);
    }
    
}

document.querySelectorAll(".menu button").forEach((item) => item.addEventListener("click", Start));