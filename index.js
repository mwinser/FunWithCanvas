
const canvas = document.querySelector("#draw");
    const ctx = canvas.getContext('2d');

    canvas.width= window.innerWidth*.8;
    canvas.height= window.innerHeight*.8;
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 20;
    //ctx.globalCompositeOperation = 'multiply';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let direction = true;

    function draw(e) {
        if(!isDrawing) return;
        ctx.beginPath();
        //start from
        ctx.moveTo(lastX,lastY);
        //go to
        ctx.lineTo(e.offsetX, e.offsetY);
        //actually make the line
        ctx.stroke();
        //reset lastX and last Y
        [lastX, lastY] = [e.offsetX, e.offsetY];

        

    }
    canvas.addEventListener('mousedown', (e)=> {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });


    canvas.addEventListener('mousemove',draw)
    canvas.addEventListener('mouseup', ()=> isDrawing = false);
    canvas.addEventListener('mouseout', ()=> isDrawing = false);

const sizePicker = document.getElementById("size")
sizePicker.addEventListener("input", sizeChange);
function sizeChange(e){
    ctx.lineWidth = e.target.value
}

const colorPicker = document.getElementById("color")
colorPicker.addEventListener("change", colorChange);
function colorChange(e){
    ctx.strokeStyle = e.target.value
}



const clearButton = document.getElementsByClassName("clear")[0]

function clearCanvas (){
    ctx.clearRect(0,0,canvas.width, canvas.height)
}

clearButton.addEventListener('click', clearCanvas)