
let texts = [];
let globalIndex = 0;
let time = null;

function Selection_sort(arr) {

    let count = arr.length
    let res = [];
    for (let i = 0; i < count; i++) {
        let min = Math.min(...arr);
        texts.push(`Min number ${min}`);
        arr.splice(arr.indexOf(min), 1);
        res.push(min);
    }

    return res
}


function RandomArray() {

    let arr = [];
    let ranodm = Math.round(Math.random() * 20) + 10;
    for (let i = 0; i < ranodm; i++) {
        arr.push(Math.round(Math.random() * 999))
    }

    return arr

}

function AddElements(arr) {
    document.querySelector(".list-items").innerHTML = "";
    arr.forEach((item) => document.querySelector(".list-items").innerHTML += `<div>${item}</div>`);
}

function Views(text) {
    document.querySelector(".screen > h2 > span").innerHTML = `${text}`

}

function ItmesAnime(index) {
    document.querySelectorAll(".list-items > div")[index].classList.add("active")
    setTimeout(() => {
        document.querySelectorAll(".list-items > div")[index].classList.remove("active")
    },1500);
}

function Change_Element(index, value) {
    ItmesAnime(index);
    setTimeout(()=>{
        document.querySelectorAll(".list-items > div")[index].innerHTML = value;
    },800) 
}


function Timer(arr) {
    let count = 0;
    time = setInterval(() => {
        if (count < texts.length) {
            Views(texts[count]);
            Change_Element(count, arr[count])
            count++;
        } else {
            Views(`Sorted array`);
            clearInterval(time);
        }

    }, 2000);
}


document.getElementById("Start").addEventListener("click", () => {
    let array = RandomArray();
    AddElements(array);
    let res = Selection_sort(array);
    Timer(res);
})
