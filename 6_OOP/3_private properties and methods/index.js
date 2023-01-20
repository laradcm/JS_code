
function Circle(radius) {
    
    this.radius = radius; 

    let defaultLocation = {x:0, y:0};
    let computeOptimalLocation = function(factor){};

    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    Object.defineProperty(this, 'defaultLocation', {

        get: function(){

            return defaultLocation;
        },

        set: function(value){

            if(!value.x || !value.y)
                throw new Error('invalid location')//validation before setting value
            defaultLocation = value;
        }

    });

    this.draw = function () {//access variables in the parent function
        computeOptimalLocation(0.1);
        console.log("draw constructor");
      };

  }

// adding properties dynamically  
const circle = new Circle(10); 
circle.getDefaultLocation();//one way to read-only a private property
circle.defaultLocation;//read-only private property using a getter
circle.defaultLocation = 1; //setter, will throw error, input should be an object


// circle.defaultLocation = {x:3, y:2} //this way would not error and set the property
// console.log(circle.defaultLocation);


