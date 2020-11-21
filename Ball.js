class Ball
{
    constructor(x,y,r)
    {

        var ball_options ={
            restitution: 0.6
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.ball = Bodies.circle(x,y,r, ball_options);
        World.add(world,this.ball);
    }

    display()
    {

        ellipseMode(RADIUS);
        ellipse(this.ball.position.x, this.ball.position.y, this.radius, this.radius);  


    }





}