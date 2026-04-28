async function loadProjects() {
  try {
    const res = await fetch("data/projects.json");
    const projects = await res.json();

    const container = document.getElementById("projects");

    projects.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${p.title}</h3>`;
      container.appendChild(div);
    });

  } catch (e) {
    document.getElementById("projects").innerHTML =
      "<p style='color:red'>Error loading projects</p>";
    console.error(e);
  }
}

loadProjects();
