class Movie{
  constructor(name,year,duration){
    this.title = name;
    this.year = year;
    this.duration =duration;
  }
  play(){
    console.log(`Playing ${this.title}`);
  }
  pause(){console.log("Paused")}
  resume(){console.log("Keep playing")}
}

const movie1 = new Movie("Scent of a woman",1992,156);
const movie2 = new Movie("Titanic",1997,195);
const movie3 = new Movie("Die unendliche Geschichte",1984,102);
const movie4 = new Movie("King's Lion",1994,47);
const movie5 = new Movie("Gladiator",1992,155);