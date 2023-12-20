let youtubeVideoIDs = [
    "cH-dDzqsiiU",
    "Cyq-0RZNrmw",
    "WdPnGoLKZzk",
    "7ZZGLiCgBXE",
    // "cScUz023JtQ",
    "6tcG4X1B8Vw",
    "FA3L57pQ9Ks",
    "7ZQyW5eRU1Q",
    "W48uPkSzgu4"
]

function getRandomValue(arr) {
    if (!arr.length) {
      return null; // Return null for an empty array
    }
  
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: getRandomValue(youtubeVideoIDs),
    playerVars: {
      'playsinline': 1,
      'controls': 0,
      'autoplay': 0,
      'rel': 0
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
//   event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player.destroy();
    window.location.reload()
  }
}
function stopVideo() {
  player.stopVideo();
}

// function playVideo(){
//     const videoContainer = document.getElementById("video-container");
//     videoContainer.style.visibility = "visible"
//     const youtubeFrame = document.createElement('div');

//     youtubeFrame.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/cScUz023JtQ?si=oMGC8PzmzYb1MfZl&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
//     videoContainer.appendChild(youtubeFrame);
// }
const images = ["child-abuse.jpg", "child-labour.jpg", "child-marriage.jpg", "exploitation.png","gender-inequality.jpeg", "RTE.jpg", "trafic.jpg", "untouch.jpg",
              "child-abuse.jpg", "child-labour.jpg", "child-marriage.jpg", "exploitation.png","gender-inequality.jpeg", "RTE.jpg", "trafic.jpg", "untouch.jpg"]
const emojis=["😢","😢","🙂","🙂","👹","👹","😍","😍","❤️","❤️","💪","💪","🔥","🔥","🎃","🎃"];
        var shuf_emojis=images.sort(() =>(Math.random()>.5)?2:-1);
        for(var i=0;i<images.length;i++){
            let box=document.createElement('div')
            box.className='item';
            let imgTag = document.createElement('img')
            imgTag.src = shuf_emojis[i]
            imgTag.width = "80"
            console.log(imgTag)
            box.appendChild(imgTag);
            let popup=document.getElementById("popup")
              function openPopup(){
                  popup.classList.add("open-popup");
                 }
              function closepopup(){
              popup.classList.remove("open-popup");
              const videoContainer = document.getElementById("video-container");
              videoContainer.style.visibility = "visible"
              player.playVideo();
              }
                              
            box.onclick=function(){
                this.classList.add('boxOpen')
                setTimeout(function(){
                    if(document.querySelectorAll('.boxOpen').length>1){
                        if(document.querySelectorAll('.boxOpen')[0].innerHTML==document.querySelectorAll('.boxOpen')[1].innerHTML){
                            document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                            document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
                            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                            if(document.querySelectorAll('.boxMatch').length==emojis.length){
                             openPopup();
                            }
                        }
                         else{
                            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                        }

                        
                    }
                },500)
            }
            document.querySelector('.game').appendChild(box);
        }
