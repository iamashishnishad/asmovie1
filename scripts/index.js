function gotoSlideshow(){

    window.location.href = 'slidshow.html';


}


function storeImages(){


    let image_url = document.getElementById('url').value;


    let images=JSON.parse(localStorage.getItem('images')) || [];

    images.push(image_url);

    localStorage.setItem('images', JSON.stringify(images));

    document.getElementById('url').value= null;

}



let i = 0;

let id;

function start() {

let images=JSON.parse(localStorage.getItem('images'));


let container= document.getElementById('container');

///3 seconds 


// var arr=['1.png','2.png','3.png']



//ar[0];
//arr[1];
//arr[2];

i = i + 1;

id= setInterval(function() {

if(i === images.length){

  i=0;

}

//asscessin g the i,ahes 

container.innerHTML = null;
let image = images[i]; ///images[2]

console.log('i:', i);

//append the images

let img = document.createElement('img');

img.src =image;

container.append(img);

i++;

}, 3000);

}

function pause(){


  clearInterval(id);
}
