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

 <div class="project-image-wrapper fade-up" style="animation-delay: 0.2s">
  <img src="${project.image}" class="project-image"/>
</div>
  <div class="project-section fade-up" style="animation-delay: 0.3s">
    ${project.content || `
      <h3>Overview</h3>
      <p>${project.details || "No details available."}</p>

      <h3>Results</h3>
      <p>${project.results || "No results available."}</p>

      <h3>Tech Stack</h3>
      <p>${project.tech || "No tech stack specified."}</p>
    `}
  </div>

  <a href="research.html" class="back-link fade-up" style="animation-delay: 0.5s">
    ← Back to Research
  </a>
`;
}

loadProject();
