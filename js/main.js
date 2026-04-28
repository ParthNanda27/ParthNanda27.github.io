async function loadProjects() {
  try {
    const res = await fetch("data/projects.json");
    const projects = await res.json();

    const container = document.getElementById("projects");

    projects.forEach((p, index) => {
      const div = document.createElement("div");
      div.className = "project-card fade-up";
      div.style.animationDelay = `${index * 0.15}s`;

      div.innerHTML = `
        <h3>${p.title}</h3>
        <p class="project-org">${p.org}</p>
        <p>${p.desc}</p>
        <a href="project.html?id=${p.id}">View Details →</a>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    document.getElementById("projects").innerHTML =
      "<p style='color:red'>Error loading projects</p>";
    console.error(err);
  }
}

loadProjects();
