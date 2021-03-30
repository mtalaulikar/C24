class Rubber{
	constructor(x,y,r)
	{
		var options = {
			'restitution' : 0.4,
			'friction' : 5,
			'density' : 1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			pop()
	}

}