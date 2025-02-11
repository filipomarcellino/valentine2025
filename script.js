// 1) ARRAY OF REASONS (customize as needed)
const reasons = [
  {
    number: 10,
    text: "You want to hang out with my friends",
    media: "pictures/IMG_3140.webp",
    mediaType: "image"
  },
  {
    number: 9,
    text: "You are willing to grow spiritually with me",
    media: "pictures/IMG_4597.webp",
    mediaType: "image"
  },
  {
    number: 8,
    text: "You are very goofy sometimes; you can make me laugh very hard.",
    media: "pictures/IMG_4701.webp",
    mediaType: "image"
  },
  {
    number: 7,
    text: "You cook food that make us melt! Like literally",
    media: "pictures/IMG_6460.MP4",
    mediaType: "video"
  },
  {
    number: 6,
    text: "You make a regular conservatory visit become very fun",
    media: "pictures/IMG_4790.webp",
    mediaType: "image"
  },
  {
    number: 5,
    text: "You throw snowball at me and make me cold :(",
    media: "pictures/IMG_9117.webp",
    mediaType: "image"
  },
  {
    number: 4,
    text: "your puffy cheeks",
    media: "pictures/lp_image_2.webp",
    mediaType: "image"
  },
  {
    number: 3,
    text: "You make me ROAR!",
    media: "pictures/lp_image.webp",
    mediaType: "image"
  },
  {
    number: 2,
    text: "You are breathtakingly gorgeous",
    media: "pictures/lp_image_3.webp",
    mediaType: "image"
  },
    {
    number: 1,
    text: "You make life worth living. Every moment we share together becomes twice as lovely when spent with you. <3",
    media: "pictures/IMG_4621.MP4",
    mediaType: "video"
  },
];

  
  // 2) GET REFERENCES TO DOM ELEMENTS
  const countdownSection = document.getElementById("countdown-section");
  const countdownNumber = document.getElementById("countdown-number");
  const reasonImage = document.getElementById("reason-image");
  const reasonText = document.getElementById("reason-text");
  const title = document.getElementById("title");
  
  // 3) TRACK CURRENT REASON INDEX
  let currentIndex = 0;
  
  // 4) SHOW REASON FUNCTION
  function showReason(index) {
    // If we've gone past the last reason, show final message
    if (index >= reasons.length) {
      displayFinalMessage();
      return;
    }
  
    // Destructure the reason object
    const { number, text, media, mediaType } = reasons[index];
  
    // Populate the text elements
    countdownNumber.textContent = number;
    reasonText.textContent = text;
  
    // Get the media container and clear any previous content
    const reasonMedia = document.getElementById("reason-media");
    reasonMedia.innerHTML = "";
  
    // Check the media type and create the corresponding element
    if (mediaType === "video") {
      const videoElement = document.createElement("video");
      videoElement.src = media;
      videoElement.controls = true;
      videoElement.autoplay = true;
      videoElement.loop = true;
      // Optionally, add styling classes or inline styles
      videoElement.style.width = "100%";
      videoElement.style.maxWidth = "300px";
      reasonMedia.appendChild(videoElement);
    } else {
      const imgElement = document.createElement("img");
      imgElement.src = media;
      imgElement.alt = "Memory Photo";
      // Optionally, add styling classes or inline styles
      imgElement.style.width = "100%";
      imgElement.style.maxWidth = "300px";
      reasonMedia.appendChild(imgElement);
    }
  }
  
  // 5) DISPLAY FINAL MESSAGE
  function displayFinalMessage() {
    // Clear the container content and apply swirlOut
    countdownSection.classList.remove("hidden");
    countdownSection.innerHTML = `
      <h2 class="final-message">The biggest reason...</h2>
      <p class="final-message">
        You make every single day feel special!<br/>
        Will you be my Valentine?
      </p>
      <img 
        id="final-image"
        src="pictures/IMG_5707.JPG" 
        alt="Final Valentine"
      />
      <button class="valentine-btn" onclick="window.alert('YAY!')">
        Yes?
      </button>
    `;
  }
  
  // 6) CLICK EVENT ON THE CONTAINER (NEXT REASON)
  countdownSection.addEventListener("click", () => {
    // 6a) Add swirlOut animation
    countdownSection.classList.add("hidden");
  
    // 6b) After animation ends, show next reason & swirlIn
    setTimeout(() => {
      currentIndex++;
      showReason(currentIndex);
      // Remove the swirlOut class to reset for next time
      countdownSection.classList.remove("hidden");
    }, 600); // matches swirlOut duration
  });
  
  // 7) INITIAL LOAD
  showReason(currentIndex);

  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
  
    // Check if autoplay is blocked
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay is blocked, show a play button
        const playButton = document.createElement("button");
        playButton.textContent = "Play Music";
        playButton.classList.add("music-btn");
        
        // Append to the page
        document.body.appendChild(playButton);
        
        // Play music when user clicks
        playButton.addEventListener("click", () => {
          audio.play();
          playButton.remove(); // Remove button after playing
        });
      });
    }
  });
  