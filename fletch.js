class fletch{
  constructor(mode, schema){
    this.mode = mode || "replace"
    this.schema = schema || "fletch"
    this.status = "initalized"
  }

  // one method to get from cache
  // one method to load to cache
  fetch(...args){
    this.schema
    // get from cache
    return new Promise((res,rej)=>(res(window.localStorage.getItem(this.schema))))
  }

  update(...args){
    fetch(...args).then(function(data){
      // add data to cache
      if (this.mode == "replace"){
        window.localStorage.setItem(this.schema, data);
      } else { // append
        let old_data = window.localStorage.getItem(this.schema);
        // if it's not a list, make a list
        if !(Array.isArray(old_data)){
          if old_data{
            old_data = [old_data];
          } else {
            old_data = [];
          }
        }
        old_data.unshift(data);
      }
      // fire an event for success
      this.status = "online";
    }.bind(this)).catch((e)=>(this.status="offline"))
  }
}
