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
  <h2 class="fade-up">${project.title}</h2>
  <p class="project-org fade-up" style="animation-delay: 0.1s">${project.org}</p>

  <img src="${project.image}" class="project-image fade-up" style="animation-delay: 0.2s"/>

  <div class="project-section fade-up" style="animation-delay: 0.3s">
    ${project.content}
  </div>

  <a href="research.html" class="back-link fade-up" style="animation-delay: 0.5s">
    ← Back to Research
  </a>
`;
}

loadProject();
