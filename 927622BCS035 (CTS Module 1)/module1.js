console.log("Welcome to the Community Portal");
window.onload = () => {
  alert("Page fully loaded");
};

const eventName = "Music Fest";
const eventDate = "2025-06-01";
let seats = 50;
let eventInfo = `Event: ${eventName}, Date: ${eventDate}, Seats Available: ${seats}`;
console.log(eventInfo);

const events = [
  { name: "Music Fest", date: "2025-06-01", category: "Music", seats: 50 },
  { name: "Tech Talk", date: "2024-05-01", category: "Education", seats: 0 },
  { name: "Food Fair", date: "2025-08-10", category: "Food", seats: 20 }
];

function showEvents() {
  const now = new Date();
  const container = document.getElementById("eventList");
  if (!container) return;

  container.innerHTML = "";

  events.forEach((event, index) => {
    const eventDate = new Date(event.date);
    if (eventDate > now && event.seats > 0) {
      const card = document.createElement("div");
      card.className = "eventCard";
      card.innerHTML = `
        <h4>${event.name}</h4>
        <p>${event.date} - ${event.category}</p>
        <p>Seats left: ${event.seats}</p>
        <button onclick="register(${index})">Register</button>
      `;
      container.appendChild(card);
    }
  });
}

let totalMusicRegs = (() => {
  let count = 0;
  return () => ++count;
})();

function register(index) {
  try {
    if (events[index].seats > 0) {
      events[index].seats--;
      if (events[index].category === "Music") totalMusicRegs();
      alert("You are registered!");
    } else {
      alert("Event full!");
    }
    showEvents();
  } catch (e) {
    console.error("Registration error:", e);
  }
}


function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};


const eventTitles = events.map(e => `Upcoming: ${e.name}`);
console.log(eventTitles);
const musicEvents = events.filter(e => e.category === "Music");
console.log("Music Events:", musicEvents);

document.addEventListener("DOMContentLoaded", () => {
  showEvents();
});

document.getElementById("eventType").addEventListener("change", e => {
  const selected = e.target.value;
  const filtered = events.filter(ev => ev.category === selected);
  console.log("Filtered Events:", filtered);
});
document.getElementById("searchBox").addEventListener("keydown", e => {
  console.log("Searching for:", e.key);
});


function fetchEvents() {
  console.log("Fetching events...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 1000);
  });
}

async function loadEventsAsync() {
  const data = await fetchEvents();
  console.log("Loaded events:", data);
}
loadEventsAsync();

const { name, date } = events[0]; // destructuring
const clonedEvents = [...events]; // spread operator

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  const name = form.elements[0].value;
  const email = form.elements[1].value;

  if (!name || !email.includes("@")) {
    alert("Invalid name or email");
    return;
  }

  alert(`Registered as ${name}`);
});

function postRegistration(data) {
  console.log("Sending to server:", data);
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 1500);
  });
}

function debugRegistration() {
  const fakeData = { name: "Test", email: "test@example.com" };
  postRegistration(fakeData)
    .then(response => console.log("Response:", response))
    .catch(error => console.error("Error:", error));
}
debugRegistration();

if (typeof $ !== "undefined") {
  $('#registerBtn').click(() => alert("jQuery Clicked!"));
}
