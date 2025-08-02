
const roles = {
  "Mohneesh Valasa": {
    year: "2025-2027",
    role: "President",
    image: "images/people/none.jpg"
  },
  "Rohit John Bosco": {
    year: "2025-2027",
    role: "Vice President",
    image: "images/people/none.jpg"
  },
  "Rishit Varshney": {
    year: "2025-2027",
    role: "Treasurer and Web Developer",
    image: "images/people/rishit.jpeg"
  },
  "Aarush Kumar": {
    year: "2025-2027",
    role: "Treasurer",
    image: "images/people/none.jpg"
  },
  "Vinay Gullapalli": {
    year: "2025-2027",
    role: "Secretariat",
    image: "images/people/none.jpg"
  },
  "Jackson Corbett": {
    year: "2025-2027",
    role: "Communications Director",
    image: "images/people/jackson.jpg"
  },
  "Advay Agrawal": {
    year: "2025-2027",
    role: "Communications Director",
    image: "images/people/none.jpg"
  },
  
};

function renderTeam() {
  const container = document.getElementById("team-container");
  if (!container) return;

  container.innerHTML = "";

  for (const [name, info] of Object.entries(roles)) {
    const cardHTML = `
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="post-entry-1 h-100 bg-white text-center">
          <a href="#" class="d-inline-block">
            <img src="${info.image}" alt="${name}" class="img-fluid">
          </a>
          <div class="post-entry-1-contents">
            <span class="meta">${info.year}</span>
            <h2>${name}</h2>
            <p>${info.role}</p>
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', cardHTML);
  }
}

document.addEventListener("DOMContentLoaded", renderTeam);