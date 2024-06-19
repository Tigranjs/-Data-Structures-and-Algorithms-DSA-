
class Stack{
    #array = []

    Push(){
        if(this.#array.length !== 6){
            let random = Math.round(Math.random()*999);
            document.querySelector(".stack").innerHTML += `<div>${random}</div>`;
            this.#array.push(random);
            document.querySelector(".info").innerHTML = `<h2>Add element ${random}</h2>`
            return;
        }
        document.querySelector(".info").innerHTML = `<h2>Element is full ${this.#array.length}/6</h2>`
    }

    Pop(){
        if(document.querySelector(".stack").childNodes.length){
            document.querySelector(".stack").lastChild.remove();
            document.querySelector(".info").innerHTML = `<h2>Remove element ${this.#array[this.#array.length - 1]}</h2>`
            this.#array.pop();
            return;
        }
        document.querySelector(".info").innerHTML = `<h2>Not is Element ${this.#array.length}/6</h2>`


    }
    Peek(){
        if(this.#array.length){
            document.querySelector(".info").innerHTML = `<h2>value: ${this.#array[this.#array.length - 1]}</h2>`;
            return;
        }
        document.querySelector(".info").innerHTML = `<h2>Not is Element ${this.#array.length}/6</h2>`

    }

    IsEmpty(){
        document.querySelector(".info").innerHTML = `<h2>length: ${this.#array.length}</h2>`
    }

    IsFull(){
        document.querySelector(".info").innerHTML = `<h2>${this.#array.length === 6 ? `Yes ${this.#array.length}/6` : `No ${this.#array.length}/6`}</h2>`
    }
}

const stack = new Stack();

document.querySelectorAll(".menu > button").forEach((item)=>{
    item.addEventListener("click",()=>{
        stack[`${item.lastElementChild.innerHTML}`]();
    })
})
