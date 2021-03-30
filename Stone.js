class Stone{
	constructor(x,y,width,height)
	{
		var options = {
			'restitution' : 0.8,
			'friction' : 9,
			'density' : 12
		}
		this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			stroke("black");
			fill("brown");
			rectMode(CENTER);
			rect(0,0,this.width,this.height);
			pop()
	}

}