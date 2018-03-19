$(document).ready(function() {
var imageLoader = document.getElementById('filePhoto');
    imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();


   
        $("#btnSubmit").click(function(){
         
            
        var image=document.getElementById('myImage');
        image.crossOrigin = 'anonymous';
        GetBinary(image, "#550000");
    
        })
    
    reader.onload = function (event) {
        $('#uploader img').attr('src',event.target.result);
        
    }

    reader.readAsDataURL(e.target.files[0]);
 

}

var dropbox;
dropbox = document.getElementById("uploader");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  //you can check e's properties
  //console.log(e);
  var dt = e.dataTransfer;
  var files = dt.files;
  
  //this code line fires your 'handleImage' function (imageLoader change event)
  imageLoader.files = files;
}
});
 function GetBinary(imgElement,tintColor) {

    var canvas = document.getElementById("myCanvas");
    canvas.width = imgElement.offsetWidth;
    canvas.height = imgElement.offsetHeight;
    var ctx = canvas.getContext("2d");

    ctx.translate(0.5, 0.5);
    
    ctx.drawImage(imgElement,0,0);

    var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
   
    var r,g,b;
    var pixels = imgPixels.data;

    var w = canvas.width;
    var h = canvas.height;
    var arr = [[],[]];
    var centerx = canvas.width / 2;
    var centery = canvas.height / 2;
    var l = w * h;
    ctx.moveTo(0,0)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < l; i++) {
        // get color of pixel
        var r =  imgPixels.data[i*4]; // Red
        var g =  imgPixels.data[i*4+1]; // Green
        var b =  imgPixels.data[i*4+2]; // Blue
        var a =  imgPixels.data[i*4+3]; // Alpha
        var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);

         let y = parseInt(i / w, 10);
        let x = i - y * w;
// arr[x]=arr[x]||[]
// arr[x][y]=avg;
        if(x%3==0&&y%4==0)
        Draw(x,y,avg,ctx)
    }
//   console.log(arr)
//     for(let x=0;x<arr.length;x+3){
//     for(let y=0;y<arr[0].length;y+4){
//     //  ctx.strokeStyle='rgb('+ arr[x][y]+','+ arr[x][y]+','+ arr[x][y]+')'
//     // 

    
//     Draw(x,y,arr[x][y],ctx)
    
   
//   }
//     }


// var a=b=1
//     ctx.moveTo(centerx, centery);
//     // ctx.beginPath();
//     for (i = 0; i < l*w; i++) {
//         angle = 0.1 * i;
//         x = centerx + (a + b * angle) * Math.cos(angle);
//         y = centery + (a + b * angle) * Math.sin(angle);
//         x= Math.round(x);
//         y=Math.round(y);
//         // console.log(arr[x][y])
//         try{
//       Draw(x,y,arr[x][y],ctx);
//         }
//         catch(e)
//         {
//             Draw(x,y,arr[x][y],ctx);

//             console.log(y)
//             console.log(y)

//         }
//         // ctx.lineTo(x, y);
//     }
//     // ctx.strokeStyle = "#000";
//     // ctx.stroke();



function Draw(x,y,a,ctx)
{
    

    ctx.beginPath();
    // ctx.moveTo(x,y)

    

    // ctx.lineTo(x+5,y+5);
    
    // var d= Math.random()*10;
    var t=((a/255)*10);

    var arc_s=.5*Math.PI;
    var arc_end = .75*Math.PI;
    var circle_start= 0;
    var circle_end= 2*Math.PI;


   var start =circle_start;
    var end =circle_end;
if(a/255<.5)
  
{ctx.strokeStyle='black'
ctx.lineWidth= .5;

ctx.arc(x+Math.random()*10,y+Math.random()*10,5+Math.random()*10, start,end);
}
    else{
    // ctx.strokeStyle='black';
    // ctx.lineWidth= 1;
    // ctx.arc(x,y,10,arc_s,arc_end);

   
    }
    // ctx.lineTo(x+10,y+10);
     ctx.stroke();
    }
				

}    




// function Draw(x,y,a,ctx)
// {
    

//     ctx.beginPath();
//     // ctx.moveTo(x,y)

    

//     // ctx.lineTo(x+5,y+5);
    
//     // var d= Math.random()*10;
//     var t=((a/255)*10);

// if(a/255<.5)
  
// {ctx.strokeStyle='black';
// ctx.lineWidth= .5;
// x=x+50;
// y=y+50;
// ctx.arc(x+Math.random()*10,y+Math.random()*10,10,.5*Math.PI,.75*Math.PI);
// }
//     else{
//     // ctx.strokeStyle='white';
//     // ctx.lineWidth= 10-t;
//     // ctx.arc(x,y,2,0,2*Math.PI);

   
//     }
//     // ctx.lineTo(x+10,y+10);
//      ctx.stroke();
//     }
				

// }    


