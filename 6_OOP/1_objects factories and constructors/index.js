//-------creating objects
let circleObj = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw object");
  },
};

circleObj.draw();

//-------factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw factory");
    },
  };
}

const circleFact = createCircle(1);
circleFact.draw();

//-------constructor function
function Circle(radius) {
  this.radius = radius; //creates a property called radius
  this.draw = function () {
    // creates a method called draw
    console.log("draw constructor");
  };
}

const circleCstr = new Circle(1); // the new operator returns this automatically
circleCstr.draw();

// target of this, in that case it is window
// equivalent of Circle(1) without the new keyword
// Circle.call({},1) 

// use apply for array inputs
// Circle.apply({},[1,2,3]) 

const circleExplCstr = new Function(
  'radius',
  `
this.radius = radius;
this.draw = function () {
  console.log("draw explicit contructor");
}`
);

const circleExplicitCstr = new circleExplCstr(1);
circleExplicitCstr.draw();

//-------equivalent contructors for JS native objects
let obj = {}; // let obj = new Object();
let str = ""; // let str = new String();
let bool = false; // let bool = new Boolean();
let num = 0; // let num = new Number();

//every object has a constructor property and
//it references the function that was used to create
//that object
