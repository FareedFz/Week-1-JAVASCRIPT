class Car{
      constructor(name,year){
          this.name=name;
          this.year=year;
      }speed(kmph){
          console.log(this.name+" speed is:"+kmph+'Kmph');
      }
    }
      obj=new Car("Audi",2014);
      console.log(obj.name+" "+obj.year);
      obj.speed(140);
    

