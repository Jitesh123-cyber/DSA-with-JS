class queue {
  #item = [];

  enqueue(item){
    this.#item.push(item);

  }

}

export default queue; //first file to export the class
..............................................................................................................................................
import queue from "./queue.js";

const queueInstance = new queue();
    queueInstance.enqueue(3);
   const item =  queueInstance.dequeue();
   console.log(`the dequeued item is ${item}`);
..............................................................................................................................................


class wagonR {                                                        // class should have the three things 
                                                                            //. constructor  //.properties //.function
    constructor(){
        console.log("constructor called");
        this.model = "sports car0056";
        this.year = 2026;
    }

    printModelandYear(){
        console.log("the model of the car is",this.model, "in the year", this.year); 
    }
}

const car = new wagonR();
car.printModelandYear() // class of js 
