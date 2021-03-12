class Means_of_transport {
    constructor(Number_of_wheels ,Engine_capacity , Color ){

        this.number_of_wheels = Number_of_wheels;
        this.engine_capacity = Engine_capacity;
        this.color = Color;
    }

    print_function(){
        return `It has ${this.number_of_wheels} wheels, the engine volume number is ${this.engine_capacity}. And the color of the means of transport is ${this.color}`
    }

    static The_biggest_Number_of_engine_capacity(cars){
            const sortedCars = cars.sort((car1, car2) => {

                return car1.engineCC - car2.engineCC;
            });
            return sortedCars[sortedCars.length - 1];
    

}

};


class Private_car extends Means_of_transport{
    constructor(Name_of_the_Private_car,Number_of_wheels ,Engine_capacity , Color){
        super(Number_of_wheels ,Engine_capacity , Color)
        this.name_of_the_Private_car = Name_of_the_Private_car;

    }

    print_function_child1(){
        return `The name of the means of transport is ${this.name_of_the_Private_car} ,${super.print_function()} `;
    }

    get caps_lock1(){
    return this.caps_lock_function1()
  
    }
      
    caps_lock_function1(){
        return this.name_of_the_Private_car.toUpperCase();
    }

};

class Bus extends Means_of_transport{
    constructor(Name_of_the_bus ,Number_of_wheels ,Engine_capacity , Color){
        super(Number_of_wheels ,Engine_capacity , Color)
        this.name_of_the_bus = Name_of_the_bus;
    }

    print_function_child2(){
        return `The name of the means of transport is ${this.name_of_the_bus} ,${super.print_function()} `;
    }

    get caps_lock2(){
        return this.caps_lock_function2()
  
    }
      
    caps_lock_function2(){
        return this.name_of_the_bus.toUpperCase();
    }

};


class Truck extends Means_of_transport{
    constructor(Name_of_the_truck ,Number_of_wheels ,Engine_capacity , Color){
        super(Number_of_wheels ,Engine_capacity , Color)
        this.name_of_the_truck = Name_of_the_truck;
    }

    print_function_child3(){
        return `The name of the means of transport is ${this.name_of_the_truck} ,${super.print_function()} `;
    }

    get caps_lock3(){
        return this.caps_lock_function3()
  
    }
      
    caps_lock_function3(){
        return this.name_of_the_truck.toUpperCase();
     }
};

const PRIVATE_CAR = new Private_car("Private_car" , 4, 1200, "white");
const BUS = new Bus("bus" , 4, 1400, "black");
const TRUCK = new Truck("truck" , 8, 1600, "red");

let container_of = document.getElementById("container");

container_of.innerHTML += `<p>${PRIVATE_CAR.print_function_child1()}</p>`;
container_of.innerHTML += `<p>${BUS.print_function_child2()}</p>`;
container_of.innerHTML += `<p>${TRUCK.print_function_child3()}</p>`;

container_of.innerHTML += `<p> Here one can see the change in writing of means of transportation to capital letters ${PRIVATE_CAR.caps_lock1} ,${BUS.caps_lock2} and ${TRUCK.caps_lock3}</p>`;
container_of.innerHTML += `<p> Means of transportation with the largest engine is ${Private_car.The_biggest_Number_of_engine_capacity([PRIVATE_CAR , BUS , TRUCK])}</p>`;

console.log(Means_of_transport.The_biggest_Number_of_engine_capacity([PRIVATE_CAR,BUS,TRUCK])); 



const button = document.getElementById('button');
const select = document.getElementById('selectID');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

button.addEventListener(`click`, critNewObjFormUser)

function critNewObjFormUser() {

switch(select.value){

    case "Private_car":
       const ObjFormUser1 = new Private_car(select.value,input1.value,input2.value,input3.value);
        console.log(ObjFormUser1);
        table22.innerHTML +=`    
            <tr class="tr">
            <td>
            ${ObjFormUser1.name_of_the_Private_car}
            </td>
            <td>
            ${ObjFormUser1.number_of_wheels}
            </td>
            <td>
            ${ObjFormUser1.engine_capacity}
            </td>
            <td>
            ${ObjFormUser1.color}
            </td>
            </tr>`
        break;    

    case "bus":
        const ObjFormUser2 = new Bus(select.value,input1.value,input2.value,input3.value);
        console.log(ObjFormUser2);
                table22.innerHTML +=`    
            <tr class="tr">
            <td>
            ${ObjFormUser2.name_of_the_bus}
            </td>
            <td>
            ${ObjFormUser2.number_of_wheels}
            </td>
            <td>
            ${ObjFormUser2.engine_capacity}
            </td>
            <td>
            ${ObjFormUser2.color}
            </td>
            </tr>`
        break;
        
    case "truck":
        const ObjFormUser3 = new Truck(select.value,input1.value,input2.value,input3.value);
        console.log(ObjFormUser3);
                 table22.innerHTML +=`    
            <tr class="tr">
            <td>
            ${ObjFormUser3.name_of_the_truck}
            </td>
            <td>
            ${ObjFormUser3.number_of_wheels}
            </td>
            <td>
            ${ObjFormUser3.engine_capacity}
            </td>
            <td>
            ${ObjFormUser3.Color}
            </td>
            </tr>`
        break;   
    default: 

}
};



