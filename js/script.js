// Toggle sidebar for mobile view
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    if (sidebar && content) {
        sidebar.classList.toggle("active");
        content.classList.toggle("hide");
    }
}

// Navigation items for sidebar and pagination
const menuItems = [{
        href: "index.html",
        text: "Introduction to AEM"
    },
    {
        href: "apache-felix.html",
        text: "Apache Felix"
    },
    {
        href: "apache-jackrabbit.html",
        text: "Apache Jackrabbit"
    },
    {
        href: "apache-sling.html",
        text: "Apache Sling"
    },
    {
        href: "setting-up-aem.html",
        text: "Setting Up AEM"
    },
    {
        href: "project-creation-and-deployment.html",
        text: "Project Creation & Deployment"
    },
    {
        href: "replication.html",
        text: "Replication"
    },
    {
        href: "sites-pages.html",
        text: "Sites & Pages"
    },
    {
        href: "templates.html",
        text: "Templates"
    },
    {
        href: "components.html",
        text: "Components"
    },
    {
        href: "sightly.html",
        text: "Sightly"
    },
    {
        href: "models.html",
        text: "Models"
    },
    {
        href: "clientlibs.html",
        text: "Clientlibs"
    },
    {
        href: "jcr-and-sling-api.html",
        text: "JCR and Sling API"
    },
    {
        href: "servlets.html",
        text: "Servlets"
    },
    {
        href: "services.html",
        text: "Services"
    },
    {
        href: "r6-annotation.html",
        text: "R6 Annotation"
    },
    {
        href: "event-handling.html",
        text: "Event Handling"
    },
    {
        href: "scheduler-and-jobs.html",
        text: "Scheduler and Jobs"
    },
    {
        href: "workflow.html",
        text: "Workflow"
    },
    {
        href: "queries.html",
        text: "Queries"
    },
    {
        href: "experience-fragment.html",
        text: "Experience Fragment"
    },
    {
        href: "content-fragment.html",
        text: "Content Fragment"
    },
    {
        href: "multi-site-manager.html",
        text: "Multi-Site Manager"
    },
    {
        href: "dispatcher.html",
        text: "Dispatcher"
    },
    {
        href: "runmodes.html",
        text: "Runmodes"
    },
    {
        href: "caching.html",
        text: "Caching"
    },
    {
        href: "internationalization.html",
        text: "Internationalization"
    },
    {
        href: "acs-commons.html",
        text: "ACS Commons"
    },
    {
        href: "dynamic-media.html",
        text: "Dynamic Media"
    }
];

// Populate sidebar navigation dynamically
const navList = document.getElementById('navList');
const currentUrl = window.location.pathname;

if (navList) {
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.className = 'nav-link';
        a.textContent = item.text;

        // Highlight current page link
        if (currentUrl.includes(item.href)) {
            a.classList.add('active');
        }

        li.appendChild(a);
        navList.appendChild(li);
    });
}

// Create Previous/Next tutorial navigation links
const currentPage = currentUrl.split("/").pop(); // Get current file name
const currentIndex = menuItems.findIndex(item => item.href === currentPage);

// Create pagination container
const paginationContainer = document.createElement('div');
paginationContainer.className = 'simple-pagination';

// Add "Previous" link if available
if (currentIndex > 0) {
    const prev = document.createElement('a');
    prev.href = menuItems[currentIndex - 1].href;
    prev.className = 'prev-link';
    prev.innerHTML = `← Previous: ${menuItems[currentIndex - 1].text}`;
    paginationContainer.appendChild(prev);
}

// Add "Next" link if available
if (currentIndex < menuItems.length - 1 && currentIndex !== -1) {
    const next = document.createElement('a');
    next.href = menuItems[currentIndex + 1].href;
    next.className = 'next-link';
    next.innerHTML = `Next: ${menuItems[currentIndex + 1].text} →`;
    paginationContainer.appendChild(next);
}

// Inject pagination after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    if (content && paginationContainer.children.length > 0) {
        content.appendChild(paginationContainer);
    }
});
