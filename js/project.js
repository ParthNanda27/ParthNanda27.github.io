async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const res = await fetch("data/projects.json");
  const projects = await res.json();

  const project = projects.find(p => p.id === id);

  const container = document.getElementById("project-detail");

  if (!project) {
    container.innerHTML = "<p>Project not found</p>";
    return;
  }

  container.innerHTML = `
    <h2>${project.title}</h2>
    <p class="project-org">${project.org}</p>

    <img src="${project.image}" class="project-image"/>

    <p>${project.details}</p>

    <h3>Tech Stack</h3>
    <p>${project.tech}</p>
  `;
}

loadProject();
