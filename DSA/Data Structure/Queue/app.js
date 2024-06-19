

function Render(title,value){
    document.querySelector(".info").innerHTML = `<h2>${title} ${value}</h2>`
}
        
class Queue{
    #array = [];
    
    Enqueue(){
        let random = Math.round(Math.random()*999);
        if(this.#array.length != 8){
            this.#array.push(random)
            Render("Add element",random)
            document.querySelector(".queue").innerHTML += `<div>${random}</div>`;
            return;
        }
        Render("Element is full",`${this.#array.length}/8`);
    }

    Dequeue(){
        if(this.#array.length){
            Render("Remove element",this.#array[0]);
            this.#array.shift();
            document.querySelector(".queue").firstChild.remove();
        }
        Render("Not is Element",`${this.#array.length}/8`)
    }

    Peek(){
        if(this.#array.length){
            Render("value:",this.#array[0])
            return;
        }
        Render("Not is Element",`${this.#array.length}/8`)
    }

    IsEmpty(){
        Render("length:", this.#array.length)
    }

    IsFull(){
        document.querySelector(".info").innerHTML = `<h2>${this.#array.length === 6 ? `Yes ${this.#array.length}/8` : `No ${this.#array.length}/8`}</h2>`
    }

}

let queue = new Queue();


document.querySelectorAll(".menu > button").forEach((item)=>{
    item.addEventListener("click",()=>{
        queue[`${item.lastElementChild.innerHTML}`]();
    })
})