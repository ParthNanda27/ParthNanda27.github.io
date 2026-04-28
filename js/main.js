async function loadProjects() {
  const res = await fetch("data/projects.json");
  const projects = await res.json();

  const container = document.getElementById("projects");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project-card";

    div.innerHTML = `
      <h3>${p.title}</h3>
      <p><strong>${p.org}</strong></p>
      <p>${p.desc}</p>
    `;

    container.appendChild(div);
  });
}

if (document.getElementById("projects")) {
  loadProjects();
}
