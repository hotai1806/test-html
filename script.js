// Constants
const CORRECT_PASSWORD = "almondplusgame";
const ADMIN_PASSWORD = "admin123";
const IS_DAY_SPECIAL = true; // Set to true for birthday, false for normal day

// DOM Elements
const loadingScreen = document.getElementById("loadingScreen");
const mainContent = document.getElementById("mainContent");
const dayCounter = document.getElementById("dayCounter");
const birthdayTitle = document.getElementById("birthdayTitle");
const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const adminPasswordInput = document.getElementById("adminPasswordInput");
const adminPasswordButton = document.getElementById("adminPasswordButton");
const adminControls = document.getElementById("adminControls");
const currentDayCount = document.getElementById("currentDayCount");
const decreaseDay = document.getElementById("decreaseDay");
const increaseDay = document.getElementById("increaseDay");
const updateDay = document.getElementById("updateDay");
const birthdayEnvelope = document.getElementById("birthdayEnvelope");
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

// Functions
function hideLoadingScreen() {
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";

      if (!IS_DAY_SPECIAL) {
        birthdayTitle.style.display = "none";
      }
    }, 500);
  }, 1500);
}

function unlockContent() {
  if (passwordInput.value === CORRECT_PASSWORD) {
    navItems.forEach((item) => {
      item.classList.remove("disabled");
      item.classList.remove("active");
    });

    document
      .querySelector('[data-section="agreement"]')
      .classList.add("active");

    sections.forEach((section) => {
      section.classList.add("hidden");
    });

    document.getElementById("agreement").classList.remove("hidden");
    createConfetti();

    passwordButton.style.backgroundColor = "#4CAF50";
    passwordButton.textContent = "Unlocked!";
    setTimeout(() => {
      passwordButton.style.backgroundColor = "";
      passwordButton.textContent = "Unlock";
    }, 2000);
  } else {
    passwordInput.style.borderColor = "#FF6B6B";
    passwordButton.style.backgroundColor = "#FF6B6B";
    setTimeout(() => {
      passwordInput.style.borderColor = "";
      passwordButton.style.backgroundColor = "";
    }, 1000);
  }
}

function unlockAdmin() {
  if (adminPasswordInput.value === ADMIN_PASSWORD) {
    adminControls.classList.remove("hidden");
    adminPasswordButton.style.backgroundColor = "#4CAF50";
    adminPasswordButton.textContent = "Access Granted";
    setTimeout(() => {
      adminPasswordButton.style.backgroundColor = "";
      adminPasswordButton.textContent = "Access Admin";
    }, 2000);
  } else {
    adminPasswordInput.style.borderColor = "#FF6B6B";
    adminPasswordButton.style.backgroundColor = "#FF6B6B";
    setTimeout(() => {
      adminPasswordInput.style.borderColor = "";
      adminPasswordButton.style.backgroundColor = "";
    }, 1000);
  }
}

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = [
      "#FF6B6B",
      "#4ECDC4",
      "#FFD166",
      "#F7F9F9",
    ][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

function applyTypewriterEffect() {
  const typewriterElements = document.querySelectorAll(".typewriter-text");
  typewriterElements.forEach((element) => {
    element.style.animation = "none";
    void element.offsetWidth;
    element.style.animation =
      "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite";
  });
}

// Event Listeners
window.addEventListener("load", hideLoadingScreen);

passwordButton.addEventListener("click", unlockContent);
passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    unlockContent();
  }
});

adminPasswordButton.addEventListener("click", unlockAdmin);
adminPasswordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    unlockAdmin();
  }
});

decreaseDay.addEventListener("click", () => {
  let count = parseInt(currentDayCount.textContent);
  count--;
  currentDayCount.textContent = count;
});

increaseDay.addEventListener("click", () => {
  let count = parseInt(currentDayCount.textContent);
  count++;
  currentDayCount.textContent = count;
});

updateDay.addEventListener("click", () => {
  dayCounter.textContent = currentDayCount.textContent + " Days Together";
});

birthdayEnvelope.addEventListener("click", createConfetti);

// Navigation
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.classList.contains("disabled")) return;

    navItems.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

    const sectionId = this.getAttribute("data-section");
    sections.forEach((section) => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");

    applyTypewriterEffect();
  });
});

// Mock API Functions
function scrawlGoogleDrive() {
  console.log(
    "This function will scrawl Google Drive for photos in the future"
  );
  return [
    {
      date: "20250201_FirstDate_Our first coffee together",
      url: "/path/to/image1.jpg",
    },
    {
      date: "20250315_MovieNight_Watching our favorite film",
      url: "/path/to/image2.jpg",
    },
  ];
}

function scrawlGoogleSheet() {
  console.log(
    "This function will scrawl Google Sheet for trip data in the future"
  );
  return [
    {
      date: "May 15-20, 2025",
      destination: "Bali, Indonesia",
      duration: "6 days",
      activities: "Beach, Hiking, Temple Tours",
    },
    {
      date: "July 3-5, 2025",
      destination: "Mountain Cabin",
      duration: "3 days",
      activities: "Stargazing, Hiking, Board Games",
    },
    {
      date: "September 10-18, 2025",
      destination: "Paris, France",
      duration: "9 days",
      activities: "Museums, Food Tour, Shopping",
    },
  ];
}

function scrawlGoogleCalendar() {
  console.log(
    "This function will scrawl Google Calendar for special days in the future"
  );
  return [
    {
      date: "May 16, 2025",
      title: "Our Anniversary",
      description: "1062 days together",
    },
    {
      date: "July 4, 2025",
      title: "Independence Day Holiday",
      description: "Planning a BBQ",
    },
    {
      date: "October 31, 2025",
      title: "Halloween Costume Party",
      description: "",
    },
    {
      date: "December 25, 2025",
      title: "Christmas",
      description: "Planning to visit your parents",
    },
  ];
}
