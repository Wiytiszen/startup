/********** EventEmitter ****/
export default class EventEmitter{

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