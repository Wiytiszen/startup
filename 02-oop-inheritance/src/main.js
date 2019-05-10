import Movie from "./movieClass.js"
import Logger from "./loggerClass.js"
import Actor from "./actorClass.js"

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