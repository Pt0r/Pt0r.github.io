window.addEventListener('load', function(){
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d");
    canvas.width = this.window.innerWidth-20;
    canvas.height = this.window.innerHeight-20;

    const fps = 60;
    let counter = 0;

    const catImg1 = new Image();
    const catImg2 = new Image();
    const catImg3 = new Image();
    const catImg4 = new Image();
    catImg1.src = "/content/cat_frame1.png";
    catImg2.src = "/content/cat_frame2.png";
    catImg3.src = "/content/cat_frame3.png";
    catImg4.src = "/content/cat_frame4.png";

    const frames = [
        catImg1,
        catImg2,
        catImg3,
        catImg4
    ]

    let currentFrame = 0;
 
    let mouseX = 0;
    let mouseY = 0;
    let mouseInside = false;

    onmousemove = function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function draw() {
        setTimeout(() => {
            if(counter == 60) {
                counter = 0;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
    
            let x = mouseX - canvas.offsetLeft;
            let y = mouseY - canvas.offsetTop;
    
            ctx.drawImage(frames[currentFrame], x - 20, y - 15);
            if(mouseInside) {
                counter++;
                if(counter % 10 == 0){
                    currentFrame = (currentFrame + 1) % frames.length;
                }
                window.requestAnimationFrame(draw);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
          }, 1000 / fps);
    }

    canvas.addEventListener('mouseleave', e => {
        mouseInside = false;
    });

    canvas.addEventListener('mouseenter', e => {
        mouseInside = true;
        window.requestAnimationFrame(draw);
    });
});

