class fletch{
  constructor(schema){
    this.schema = schema || "fletch"
    this.status = "initalized"
  }

  // one method to get from cache
  // one method to load to cache
  fetch(...args){
    this.schema
    // get from cache
    // maybe launch something to update from cache
    // return promise
  }

  update(...args){
    fetch(...args).then(function(data){
      // add data to cache
      this.schema
      // fire an event for success
      this.status = "online";
    }).catch((e)=>(this.status="offline"))
  }
}
