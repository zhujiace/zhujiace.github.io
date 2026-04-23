const profileUrl = "data/profile.json";
const publicationsUrl = "data/publications.json";

const byId = (id) => document.getElementById(id);

const createLink = ({ label, url }) => {
  const link = document.createElement("a");
  link.className = "link-pill";
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
};

const renderProfile = (profile) => {
  document.title = profile.name;
  byId("profile-bio").textContent = profile.bio;

  const primaryLinks = profile.links.slice(0, 4);
  const profileLinks = byId("profile-links");
  const contactLinks = byId("contact-links");

  profileLinks.replaceChildren(...primaryLinks.map(createLink));
  contactLinks.replaceChildren(...profile.links.map(createLink));

  const facts = [
    ["Name", `${profile.name} / ${profile.chineseName}`],
    ["Role", profile.role],
    ["Affiliation", profile.affiliation],
    ["Department", profile.department],
    ["Advisor", profile.advisor],
    ["Location", profile.location]
  ];

  const factNodes = facts.flatMap(([label, value]) => {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = value;
    return [dt, dd];
  });
  byId("profile-facts").replaceChildren(...factNodes);

  const educationNodes = profile.education.map((item) => {
    const entry = document.createElement("article");
    entry.className = "timeline-item";
    entry.innerHTML = `
      <strong>${item.degree}</strong>
      <span>${item.institution}</span>
      <p>${item.school} &middot; ${item.period}</p>
    `;
    return entry;
  });
  byId("education-list").replaceChildren(...educationNodes);

  const interests = profile.researchInterests.map((interest) => {
    const item = document.createElement("li");
    item.textContent = interest;
    return item;
  });
  byId("research-interests").replaceChildren(...interests);

  const honors = profile.honors.map((honor) => {
    const entry = document.createElement("article");
    entry.className = "honor";
    entry.innerHTML = `
      <strong>${honor.title}</strong>
      <span>${honor.organization} &middot; ${honor.year}</span>
      <p>${honor.description}</p>
    `;
    return entry;
  });
  byId("honor-list").replaceChildren(...honors);
};

const authorListHtml = (authors) =>
  authors
    .map((author) => (author === "Jiace Zhu" ? `<strong>${author}</strong>` : author))
    .join(", ");

const publicationNode = (publication) => {
  const entry = document.createElement("article");
  entry.className = "publication";

  const links = publication.links
    .map(
      (link) =>
        `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
    )
    .join("");

  entry.innerHTML = `
    <div class="publication-year">${publication.year}</div>
    <div>
      <h3 class="publication-title">${publication.title}</h3>
      <p class="publication-authors">${authorListHtml(publication.authors)}</p>
      <p class="publication-meta">${publication.venue} &middot; ${publication.status}</p>
      <div class="publication-links">${links}</div>
    </div>
  `;

  return entry;
};

const renderPublications = (publications) => {
  const sorted = [...publications].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  const selected = sorted.filter((publication) => publication.selected);

  byId("selected-list").replaceChildren(...selected.map(publicationNode));
  byId("publication-list").replaceChildren(...sorted.map(publicationNode));
};

const loadSite = async () => {
  const [profileResponse, publicationsResponse] = await Promise.all([
    fetch(profileUrl),
    fetch(publicationsUrl)
  ]);

  if (!profileResponse.ok || !publicationsResponse.ok) {
    throw new Error("Unable to load site data.");
  }

  const [profile, publications] = await Promise.all([
    profileResponse.json(),
    publicationsResponse.json()
  ]);

  renderProfile(profile);
  renderPublications(publications);
  byId("year").textContent = new Date().getFullYear();
};

loadSite().catch((error) => {
  console.error(error);
  byId("profile-bio").textContent = "Profile data could not be loaded.";
});
