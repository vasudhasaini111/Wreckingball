class Rope {
  constructor(body1, pointB) {
    var options = {
      bodyA: body1,
      pointB: pointB,
      stiffness: 1.2,
      length: 400,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke("gray");
      strokeWeight(5);
      line(pointA.x, pointA.y,pointB.x, pointB.y);
      pop();
    }
  }
}
