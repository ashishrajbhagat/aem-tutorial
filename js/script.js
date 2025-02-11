function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

const menuItems = [
    { href: "index.html", text: "Introduction to AEM" },
    { href: "apache-felix.html", text: "Apache Felix" },
    { href: "apache-jackrabbit.html", text: "Apache Jackrabbit" },
    { href: "apache-sling.html", text: "Apache Sling" },
    { href: "setting-up-aem.html", text: "Setting Up AEM" },
    { href: "project-creation-and-deployment.html", text: "Project Creation & Deployment" },
    { href: "replication.html", text: "Replication" },
    { href: "sites-pages.html", text: "Sites & Pages" },
    { href: "templates.html", text: "Templates" },
    { href: "components.html", text: "Components" },
    { href: "sightly.html", text: "Sightly" },
    { href: "models.html", text: "Models" },
    { href: "clientlibs.html", text: "Clientlibs" },
    { href: "jcr-and-sling-api.html", text: "JCR and Sling API" },
    { href: "servlets.html", text: "Servlets" },
    { href: "services.html", text: "Services" },
    { href: "r6-annotation.html", text: "R6 Annotation" },
    { href: "event-handling.html", text: "Event Handling" },
    { href: "scheduler-and-jobs.html", text: "Scheduler and Jobs" },
    { href: "workflow.html", text: "Workflow" },
    { href: "queries.html", text: "Queries" },
    { href: "experience-fragment.html", text: "Experience Fragment" },
    { href: "content-fragment.html", text: "Content Fragment" },
    { href: "runmodes.html", text: "Runmodes" }
];

const navList = document.getElementById('navList');

const currentUrl = window.location.pathname;

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.className = 'nav-link';
    a.textContent = item.text;

    if (currentUrl.includes(item.href)) {
        a.classList.add('active');
    }

    li.appendChild(a);
    navList.appendChild(li);
});
