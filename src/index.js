function pageLoad(){
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/9f/ae/8a/9fae8a4cf71c7a28ac06da36c804d5c5.jpg")';
    // document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "cover";
}

function focusContent(){
    document.getElementById("content").style.transition = "all 2s";
}

function increaseTemp(){
    document.getElementById("tempBox").innerHTML++;
    let x = document.getElementById('tempBox');
    if(x.innerHTML >= 80){
       x.style.color='green';
  }else if(x.innerHTML >= 70){
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/89/e8/cd/89e8cd71ed37d63a5563bb5f65a42c06.gif")';
    x.style.color = 'red';
  }else if(x.innerHTML >= 60){
    document.body.style.backgroundImage ='url("https://i.pinimg.com/originals/5e/e2/d5/5ee2d5e24434a942a9fb53efe998b523.gif")';
    x.style.color='purple';
  }else if(x.innerHTML >= 50){
    document.body.style.backgroundImage ='url("https://c.tenor.com/9qPAxbUSQSQAAAAd/toph-avatar.gif")';
    x.style.color = 'black';
  }else if(x.innerHTML >= 40){
    document.body.style.backgroundImage='url("https://64.media.tumblr.com/571f470d30bf9ac502b69dcf648354b4/tumblr_pkkrohzPxL1vz54q7o4_540.gifv")';
    x.style.color = 'blue';
  }else{
    x.style.color='green';
  }document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundSize = "cover";
}
  
function decreaseTemp(){
    document.getElementById("tempBox").innerHTML--;
    let x = document.getElementById('tempBox');
    if(x.innerHTML >= 80){
       x.style.color='green';
  }else if(x.innerHTML >= 70){
    document.body.style.backgroundImage = 'url("https://i.pinimg.com/originals/89/e8/cd/89e8cd71ed37d63a5563bb5f65a42c06.gif")';
    x.style.color = 'red';
  }else if(x.innerHTML >= 60){
    document.body.style.backgroundImage ='url("https://i.pinimg.com/originals/5e/e2/d5/5ee2d5e24434a942a9fb53efe998b523.gif")';
    x.style.color='purple';
  }else if(x.innerHTML >= 50){
    document.body.style.backgroundImage ='url("https://c.tenor.com/9qPAxbUSQSQAAAAd/toph-avatar.gif")';
    x.style.color = 'black';
  }else if(x.innerHTML >= 40){
    document.body.style.backgroundImage='url("https://64.media.tumblr.com/571f470d30bf9ac502b69dcf648354b4/tumblr_pkkrohzPxL1vz54q7o4_540.gifv")';
    x.style.color = 'blue';
  }else{
    x.style.color='green';
  // }else if(x.innerHTML >= 60){
  //   document.body.style.backgroundImage ='url("https://i.imgur.com/GH1qRFW.gif")'
  //   x.style.color='green';
  //   // document.body.style.backgroundImage = 'url("https://c.tenor.com/9qPAxbUSQSQAAAAd/toph-avatar.gif")';
  // }else{
  //   document.body.style.backgroundImage = 'url("https://c.tenor.com/9qPAxbUSQSQAAAAd/toph-avatar.gif")';
  //   x.style.color='black';
  }
}
  
function checkCityName(){
    let val = document.getElementById("cityName").value;
    let matches = val.match(/\d+/g);
  if (matches != null){
      alert("City name must be alphabetical.");
  }else{
    document.getElementById("cityBox").value= document.getElementById("cityName").value;
   }
}
  
function resetName(){
    document.getElementById("cityBox").value = "Republic City";
    document.getElementById("cityName").value="";
}
  
function skyScapeGoat(){
    document.getElementById("skyScape").value = document.getElementById("headers").value;
}
  
function landScapeGoat(){
    document.getElementById("landScape").value = document.getElementById("footers").value;
}