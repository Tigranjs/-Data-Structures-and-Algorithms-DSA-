

function AddElement(obj, objLength) {

    document.querySelector(".linkedList").innerHTML = "";
    if (objLength) {
        for (let i = 0; i < objLength; i++) {
            document.querySelector(".linkedList").innerHTML += `<div> <p>value: ${obj["value"]}</p><p>next: ${obj["next"] && "{}"}</p> </div>`;
            obj = obj.next;
        }
    }

}

class Linked_List {

    #LinkedList = {}
    #LinkedListCount = 0

    add(nextValue) {
        this.#LinkedListCount++;
        console.log(nextValue);
        while (true) {
            if (this.#LinkedList.next === undefined) {
                this.#LinkedList = nextValue;
                break;
            } else if (this.#LinkedList.next === null) {
                this.#LinkedList.next = Object.assign(nextValue, { up: this.#LinkedList });
                break;
            } else {
                this.#LinkedList = this.#LinkedList.next
            }
        }


        while (true) {
            if (this.#LinkedList.up === undefined) {
                break;
            } else {
                this.#LinkedList = this.#LinkedList.up
            }
        }

        AddElement(this.#LinkedList, this.#LinkedListCount);

    }
    remove() {
        if (!this.#LinkedListCount) {
            return;
        }
        this.#LinkedListCount--;
        while (true) {
            if (this.#LinkedList.next === null) {
                if (this.#LinkedList.up !== undefined) {
                    this.#LinkedList.up
                    this.#LinkedList.up.next = null;
                } else {
                    this.#LinkedList = {}
                }

                break
            } else {
                this.#LinkedList = this.#LinkedList.next
            }
        }

        while (true) {
            if (this.#LinkedList.up === undefined) {
                break;
            } else {
                this.#LinkedList = this.#LinkedList.up
            }
        }

        AddElement(this.#LinkedList, this.#LinkedListCount);

    }
    size() {
        return this.#LinkedListCount
    }

}

const Linkedlist = new Linked_List();

function AddOneObject() {
    let obj = { value: Math.round(Math.random() * 999), next: null };
    if (Linkedlist.size() < 15) {
        Linkedlist.add(obj);
        document.querySelector(".info").innerHTML = `Add element`;
        return;
    }
    document.querySelector(".info").innerHTML = "Full size";
}

function RemoveOneObject() {
    if(Linkedlist.size() <= 0){
        document.querySelector(".info").innerHTML = "Not Element";
        return;
    }
    document.querySelector(".info").innerHTML = "Remove Element";
    Linkedlist.remove();
}
