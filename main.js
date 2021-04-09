canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x = 10;
car2_y = 100;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    car1_imgTag = new Image(); //defining a variable with a new image car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable car1_imgTag.src = car1_image; // load image car2_imgTag = new Image(); //defining a variable with a new image car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable car2_imgTag.src = car2_image; // load image }
    function uploadBackground() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }

    function uploadcar1() {
        ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    }

    function uploadcar2() {
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
    }
}