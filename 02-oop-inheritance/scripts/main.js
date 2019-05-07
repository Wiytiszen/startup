/********** EventEmitter ****/
class EventEmitter{

  constructor(){
    this.listeners = {};
  }
  on(eventName,callBacks){
    if(!this.listeners[eventName]){ 
      this.listeners[eventName]=[];
    }
    this.listeners[eventName].push(callBacks);
  }
  emit(eventName){
      if (this.listeners[eventName]){
      this.listeners[eventName].forEach( fn => {
         fn.apply(); 
        }
      );
    }
  }
  off(eventName,callBacks){
    let lis = this.listeners[eventName];
    if (!lis){ return this; }
    for(let i = lis.length; i > 0; i--) {
      if (lis[i] === callBacks) {
        lis.splice(i,1);
        break;
      }
    }
  }
}

/********** Movie ****/

class Movie extends EventEmitter{
  constructor(name,year,duration){
    super();
    this.title = name;
    this.year = year;
    this.duration =duration;
    this.cast = [];
  }

  play(){super.emit("playing")}
  pause(){super.emit("stopped")}
  resume(){super.emit("resumed")}
  addCast(...actors){

    for (let i=0; i<actors.length; i++){
        if (actors[i].length>1){
            for(let j=0; j<actors[i].length; j++){
                this.cast.push(actors[i][j]);
            }
        }else{
            this.cast.push(actors[i]);
        }
    }
  }
}

/**********Actor ****/

class Actor{
  constructor(name, age){
      this.name = name;
      this.age = age;
  }
}

/**********Logger ****/

class Logger{

  constructor(){}

  log(info){
      console.log(`The '${info}' has been emited`);
  }
}
// instances of Movie Class
const movie1 = new Movie("Scent of a woman",1992,156);

// adding cast
const actor1 = new Actor("Al Pacino",79);
const actor2 = new Actor("Chris O'Donnell",48);
const otherActors = [
  new Actor("Gabriella Anwar",49),
  new Actor("James Rebhorn",66),
  new Actor("Philip Seymour Hoffman",47)
]
// Calling addCast
movie1.addCast(actor1,actor2,otherActors);
console.log(movie1.cast);

// Using the logger 
var logger = new Logger();

movie1.on("playing", () => logger.log("play"));

movie1.play(); 

// Mixin

const mixin = {
  share: function(name){
      console.log(`${name} share ${this.title}`);
  },
  like: function(name){
      console.log(`${name} likes ${this.title}`)
  }
}

Object.assign(movie1,mixin);

movie1.share("Martin Wiytiszen");
movie1.like("Debora Pardo"); 