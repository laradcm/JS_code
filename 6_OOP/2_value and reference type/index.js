
//primitive are independent of each other
//copied by value
let x = 10;
let y = x;

x = 20;

//reference values when assigned they point to the same object
//copied by reference
let a = { value : 10};
let b = a;
a.value = 20;


// obj is modified by obj in the function, because ref is passed
let obj = {value:10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);


//creating and manipulating properties on the fly
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw constructor");
    };
}

// adding properties dynamically  
const circle= new Circle(10); 
circle.location = { x: 1 };
circle['location-height'] = { y: 1 };

delete circle.location;//deleting properties dynamically


for (let key in circle){ //gets keys, able to manipulate which keys to get
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);//gets keys
console.log(keys);

if ('radius' in circle)//in operator checks for property/method of an object
console.log('circle has radius');
