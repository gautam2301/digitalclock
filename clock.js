// const clock = document.getElementById("clock");
// const toggleBtn = document.getElementById("toggleFormat");
// const formatLabel = document.getElementById("formatLabel");

// let is24HourFormat = localStorage.getItem("is24HourFormat") === "true"; // Load preference

// // Update Clock Every Second
// function updateClock() {
//     const now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     if (!is24HourFormat) {
//         let ampm = hours >= 12 ? "PM" : "AM";
//         hours = hours % 12 || 12;
//         clock.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
//         formatLabel.innerText = "Current Format: 12-hour";
//     } else {
//         clock.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//         formatLabel.innerText = "Current Format: 24-hour";
//     }
// }

// // Toggle 12/24 Hour Format
// toggleBtn.addEventListener("click", () => {
//     is24HourFormat = !is24HourFormat;
//     localStorage.setItem("is24HourFormat", is24HourFormat);
//     toggleBtn.innerText = is24HourFormat ? "Switch to 12-hour" : "Switch to 24-hour";
//     updateClock();
// });

// // Helper Function to Add Leading Zero
// function pad(num) {
//     return num.toString().padStart(2, "0");
// }

// // Run Clock Every Second
// setInterval(updateClock, 1000);
// updateClock();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('✅ Service Worker Registered!'))
    .catch(error => console.log('❌ Service Worker Registration Failed:', error));
}



const clock = document.getElementById("clock");
let autoDarkModeEnabled = localStorage.getItem("autoDarkModeEnabled") === "true";

// let isWelcomed = false;

// function welcome() {
//   if (isWelcomed === false) {  // Corrected comparison
//     let x = new SpeechSynthesisUtterance("Welcome to ZunChrono, Time Redefined. Stay in sync, stay ahead!");
//     window.speechSynthesis.speak(x);
//     isWelcomed = true;  // Set to true after speaking
//   }
// }



// Function to update the clock with fade effect
function updateClock() {
  clock.style.opacity = "0"; // Fade out before update
  formatLabel.style.opacity = "0"; // Fade out label too
  
    setTimeout(() => { // Wait for fade out effect
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      
      
      const formattedTime = new Intl.DateTimeFormat('en-US', { 
            timeZone: selectedTimezone, 
            hour: '2-digit', minute: '2-digit', second: '2-digit', 
            hour12: !is24HourFormat 
        }).format(now);
        
        if (!is24HourFormat) {
          let ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12;
          clock.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
          formatLabel.innerText = "Current Format: 12-hour";
        } else {
          clock.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
          formatLabel.innerText = "Current Format: 24-hour";
        }
        clock.innerText = formattedTime;
        clock.style.opacity = "1"; // Fade in after update
        formatLabel.style.opacity = "1";
        
      }, 300); // 300ms delay to match fade effect
    }
    
    
    // Helper function to format numbers
    function pad(num) {
      return num.toString().padStart(2, "0");
    }
    
    // Run Clock Every Second
    setInterval(updateClock, 1000);
    updateClock();
    // welcome();

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;

  const installButton = document.createElement("button");
  installButton.innerText = "📲 Install ZunChronoAI";
  installButton.style.position = "fixed";
  installButton.style.bottom = "20px";
  installButton.style.right = "20px";
  installButton.style.padding = "10px";
  installButton.style.background = "#ffcc00";
  installButton.style.border = "none";
  installButton.style.cursor = "pointer";

  document.body.appendChild(installButton);

  installButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User installed the app");
      }
      installButton.remove();
    });
  });
});


// const clock = document.getElementById("clock");
// const toggleBtn = document.getElementById("toggleFormat");
// const formatLabel = document.getElementById("formatLabel");
// const themeToggleBtn = document.getElementById("toggleTheme");

// let is24HourFormat = localStorage.getItem("is24HourFormat") === "true";
// let isDarkMode = localStorage.getItem("isDarkMode") === "true";
// let autoDarkModeEnabled = localStorage.getItem("autoDarkModeEnabled") === "true"; // Track manual override

// // Function to check time and apply auto Dark Mode (6 PM - 6 AM)
// function checkAutoDarkMode() {
//     const hour = new Date().getHours();
//     if (!autoDarkModeEnabled) { // Only auto-switch if the user hasn’t manually toggled
//         if (hour >= 18 || hour < 6) {
//             document.body.classList.add("dark-mode");
//             isDarkMode = true;
//             themeToggleBtn.innerText = "Disable Dark Mode";
//         } else {
//             document.body.classList.remove("dark-mode");
//             isDarkMode = false;
//             themeToggleBtn.innerText = "Enable Dark Mode";
//         }
//     }
// }

// // Function to update the clock
// function updateClock() {
//     clock.style.opacity = "0"; 
//     formatLabel.style.opacity = "0";

//     setTimeout(() => {
//         const now = new Date();
//         let hours = now.getHours();
//         let minutes = now.getMinutes();
//         let seconds = now.getSeconds();

//         if (!is24HourFormat) {
//             let ampm = hours >= 12 ? "PM" : "AM";
//             hours = hours % 12 || 12;
//             clock.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
//             formatLabel.innerText = "Current Format: 12-hour";
//         } else {
//             clock.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//             formatLabel.innerText = "Current Format: 24-hour";
//         }

//         clock.style.opacity = "1"; 
//         formatLabel.style.opacity = "1";
//     }, 300);
// }

// // Toggle 12/24-hour format
// toggleBtn.addEventListener("click", () => {
//     is24HourFormat = !is24HourFormat;
//     localStorage.setItem("is24HourFormat", is24HourFormat);
//     toggleBtn.innerText = is24HourFormat ? "Switch to 12-hour" : "Switch to 24-hour";
//     updateClock();
// });

// // 🌙 Toggle Dark Mode Manually (Overrides Auto Mode)
// themeToggleBtn.addEventListener("click", () => {
//     isDarkMode = !isDarkMode; 
//     autoDarkModeEnabled = true; // User manually toggled, disable auto mode
//     localStorage.setItem("isDarkMode", isDarkMode);
//     localStorage.setItem("autoDarkModeEnabled", autoDarkModeEnabled);

//     document.body.classList.toggle("dark-mode");
//     themeToggleBtn.innerText = isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode";
// });

// // Helper function to format numbers
// function pad(num) {
//     return num.toString().padStart(2, "0");
// }

// // Run Clock Every Second
// setInterval(updateClock, 1000);
// updateClock();
// checkAutoDarkMode();

