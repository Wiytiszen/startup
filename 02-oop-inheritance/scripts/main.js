class Actor{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

class EventEmitter{

  constructor(){
    this.listeners = {}; //guardar los eventos en Arrays, con sus respectivos Callbacks
  }

  on(eventName,callBacks){ // cargo los eventos nuevos o los callbacks
    if(!this.listeners[eventName]){// si el evento existe en "events"... 
      this.listeners[eventName]=[];// cargo en el evento existente una funcion
    }
    this.listeners[eventName].push(callBacks);
  }
  emit(eventName){ // Avisa que sucede un evento
    if (this.events[eventName]){
      this.events[eventName].forEach( fn => {
         fn.apply(); 
        }
      );
    }
  }
  off(eventName,callBacks){
    let lis = this.events[eventName];
    if (!lis){ return this; }
    for(let i = lis.length; i > 0; i--) {
      if (lis[i] === callBacks) {
        lis.splice(i,1);
        break;
      }
    }
  }
}

class Movie extends EventEmitter{
  constructor(name,year,duration){
    super();
    this.title = name;
    this.year = year;
    this.duration =duration;
  }
  play(){super.emit("playing")}
  pause(){super.emit("stopped")}
  resume(){super.emit("resumed")}
}

// instances of Movie Class
const movie1 = new Movie("Scent of a woman",1992,156);
const movie2 = new Movie("Titanic",1997,195);
const movie3 = new Movie("Die unendliche Geschichte",1984,102);
const movie4 = new Movie("King's Lion",1994,47);
const movie5 = new Movie("Gladiator",1992,155);
