window.addEventListener('load', function(){
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d");
    canvas.width = this.window.innerWidth-20;
    canvas.height = this.window.innerHeight-20;
    const catImg = new Image();
    catImg.src = "/content/IMG_5283.gif";

    canvas.addEventListener('mousemove', e => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let x = e.clientX - canvas.offsetLeft;
        let y = e.clientY - canvas.offsetTop;

        ctx.drawImage(catImg, x + 4, y + 4, 50, 50);
    });

    canvas.addEventListener('mouseleave', e => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
});

