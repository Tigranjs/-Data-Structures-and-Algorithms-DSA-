
let texts = [];
let elements = []

function Bubble_sort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                texts.push(`Swap ${arr[j]} and ${arr[j + 1]}`)

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                elements.push(
                    { lastIndex: j, lastValue: arr[j], nextIndex: (j + 1), nextValue: temp }
                )
            }
        }
    }
    return arr;
}

function Timer() {
    let count = 0;
    let time = setInterval(() => {
        if (count < texts.length) {
            Views(texts[count]);
            console.log(true);
            let { lastIndex, lastValue, nextIndex, nextValue } = elements[count];
            Change_Element(lastIndex, lastValue, nextIndex, nextValue);
            count++;
        } else {
            clearInterval(time);
        }

    }, 2000);
}

function ItmesAnime(lastIndex, nextIndex) {
    document.querySelectorAll(".list-items > div")[lastIndex].classList.add("active")
    document.querySelectorAll(".list-items > div")[nextIndex].classList.add("active")
    setTimeout(() => {
        document.querySelectorAll(".list-items > div")[lastIndex].classList.remove("active")
        document.querySelectorAll(".list-items > div")[nextIndex].classList.remove("active")
    },1500);
}

function CreateArray() {
    let arr = [];
    let randomNumber = Math.round(Math.random() * 20) + 10;

    for (let i = 0; i < randomNumber; i++) {
        arr.push(Math.round(Math.random() * 999));
    }
    return arr
}

function AddElements(arr) {
    document.querySelector(".list-items").innerHTML = "";
    arr.forEach((item) => document.querySelector(".list-items").innerHTML += `<div>${item}</div>`);
}

function Change_Element(lastIndex, lastValue, nextIndex, nextValue) {
    ItmesAnime(lastIndex,nextIndex);
    setTimeout(()=>{
        document.querySelectorAll(".list-items > div")[lastIndex].innerHTML = lastValue;
        document.querySelectorAll(".list-items > div")[nextIndex].innerHTML = nextValue;
    },800)
    
}

function Views(text) {
    document.querySelector(".screen > h2 > span").innerHTML = `${text}`
}

document
    .querySelector("#Start")
    .addEventListener("click", () => {
        let array = CreateArray();
        AddElements(array);
        Views("Start");
        Bubble_sort(array);
        Timer()
    });
