class Pillar {
    constructor(x, y, width, height) {
      var options = {
          isstatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("red");
      rect(pos.y, pos.x, this.width, this.height);
      
    }
  };
  