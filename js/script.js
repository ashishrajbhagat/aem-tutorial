// Toggle sidebar for mobile view
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    if (sidebar && content) {
        sidebar.classList.toggle("active");
        content.classList.toggle("hide");
    }
}

// 🔍 Filter sidebar items on search input
document.getElementById("sidebarSearch").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const allLinks = document.querySelectorAll("#sidebar-nav .nav-link");

    allLinks.forEach(link => {
        const itemText = link.textContent.toLowerCase();
        const listItem = link.closest("li");
        listItem.style.display = itemText.includes(filter) ? "block" : "none";
    });

    // Hide section if all its items are hidden
    document.querySelectorAll(".nav-section").forEach(section => {
        const visibleLinks = section.querySelectorAll("li:not([style*='display: none'])");
        section.style.display = visibleLinks.length > 0 ? "block" : "none";
    });

    // Auto-expand matching sections
    document.querySelectorAll(".nav-list").forEach(list => {
        const visible = Array.from(list.children).some(li => li.style.display !== "none");
        list.classList.toggle("open", visible);
    });
});

// Navigation items for sidebar
const nav = document.getElementById("sidebar-nav");
const currentUrl = window.location.pathname;
const currentPage = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

const sections = [{
        title: "AEM Fundamentals",
        items: [{
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
                href: "aem-developer-tools.html",
                text: "AEM Developer Tools"
            },
            {
                href: "project-creation-and-deployment.html",
                text: "Project Creation & Deployment"
            },
            {
                href: "runmodes.html",
                text: "Runmodes"
            },
            {
                href: "osgi-configuration.html",
                text: "OSGi Configuration"
            }
        ]
    },
    {
        title: "Authoring & Page-Level Concepts",
        items: [{
                href: "sites-pages.html",
                text: "Sites and Pages"
            },
            {
                href: "page-editing-and-tools.html",
                text: "Page Editing and Tools"
            },
            {
                href: "page-management.html",
                text: "Page Management"
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
                text: "Sightly (HTL)"
            },
            {
                href: "clientlibs.html",
                text: "Clientlibs"
            },
            {
                href: "internationalization.html",
                text: "Internationalization (i18n)"
            },
            {
                href: "tagging-metadata.html",
                text: "Tagging and Metadata Management"
            },
            {
                href: "personalization-and-targeting.html",
                text: "Personalization and Targeting"
            }
        ]
    },
    {
        title: "Backend Development",
        items: [{
                href: "models.html",
                text: "Sling Models"
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
                text: "R6 Annotations"
            },
            {
                href: "scheduler-and-jobs.html",
                text: "Scheduler and Jobs"
            },
            {
                href: "queries.html",
                text: "Queries"
            },
            {
                href: "jcr-and-sling-api.html",
                text: "JCR and Sling API"
            },
            { 
                href: "rest-api.html",
                text: "REST API Development"
            },
            {
                href: "third-party-integration.html",
                text: "Third-Party Service Integration"
            },
            {
                href: "aem-testing.html",
                text: "AEM Testing Frameworks"
            }
        ]
    },
    {
        title: "Workflow & Event Handling",
        items: [{
                href: "workflow.html",
                text: "Workflow"
            },
            {
                href: "event-handling.html",
                text: "Event Handling"
            }
        ]
    },
    {
        title: "Content Reuse & Headless",
        items: [{
                href: "experience-fragment.html",
                text: "Experience Fragment"
            },
            {
                href: "content-fragment.html",
                text: "Content Fragment"
            },
            {
                href: "multi-site-manager.html",
                text: "Multisite Manager (MSM)"
            },
            {
                href: "aem-headless.html",
                text: "AEM as Headless CMS"
            }
        ]
    },
    {
        title: "Infrastructure & Optimization",
        items: [{
                href: "dispatcher.html",
                text: "Dispatcher"
            },
            {
                href: "caching.html",
                text: "Caching"
            },
            {
                href: "replication.html",
                text: "Replication"
            },
            {
                href: "maintenance-and-cleanup.html",
                text: "Maintenance and Housekeeping"
            },
            {
                href: "content-migration.html",
                text: "Content Migration Best Practices"
            }
        ]
    },
    {
        title: "Security & Administration",
        items: [{
                href: "authentication-and-user-management.html",
                text: "Authentication and User Management"
            },
            {
                href: "ssl-secure-login.html",
                text: "SSL Secure Login"
            }
        ]
    },
    {
        title: "Tools & Extensions",
        items: [{
                href: "acs-commons.html",
                text: "ACS Commons"
            },
            {
                href: "dynamic-media.html",
                text: "Dynamic Media"
            },
            {
                href: "sling-pipes.html",
                text: "Sling Pipes"
            },
            {
                href: "groovy-console.html",
                text: "Groovy Console"
            },
            {
                href: "debugging-troubleshooting.html",
                text: "Debugging & Troubleshooting"
            },
            {
                href: "aem-forms.html",
                text: "AEM Forms"
            }
        ]
    },
    {
        title: "Monitoring & Insights",
        items: [{
            href: "analytics-in-aem.html",
            text: "Content Insights and Analytics"
        }]
    },
    {
        title: "AEM as a Cloud Service",
        items: [{
            href: "cloud-manager.html",
            text: "Cloud Manager in AEMaaCS"
        }]
    }
];


// Render sidebar with collapsible sections
sections.forEach((section, index) => {
    const container = document.createElement("div");
    container.className = "nav-section";

    const header = document.createElement("div");
    header.className = "sidebar-section-title";
    header.textContent = section.title;

    const list = document.createElement("ul");
    list.className = "nav-list";

    let containsActive = false;

    section.items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.href;
        a.className = "nav-link";
        a.textContent = item.text;

        if (currentPage === item.href) {
            a.classList.add("active");
            containsActive = true;
        }

        li.appendChild(a);
        list.appendChild(li);
    });

    // Expand active section
    if (containsActive) {
        list.classList.add("open");
    }

    // Toggle section on click
    header.addEventListener("click", () => {
        document.querySelectorAll(".nav-list").forEach(ul => ul.classList.remove("open"));
        list.classList.add("open");
    });

    container.appendChild(header);
    container.appendChild(list);
    nav.appendChild(container);
});

// Add pagination
document.addEventListener("DOMContentLoaded", () => {
    const flatMenuItems = sections.flatMap(section => section.items);
    const currentIndex = flatMenuItems.findIndex(item => item.href === currentPage);
    if (currentIndex === -1) return;

    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'simple-pagination';

    if (currentIndex > 0) {
        const prev = document.createElement('a');
        prev.href = flatMenuItems[currentIndex - 1].href;
        prev.className = 'prev-link';
        prev.innerHTML = `← Previous: ${flatMenuItems[currentIndex - 1].text}`;
        paginationContainer.appendChild(prev);
    }

    if (currentIndex < flatMenuItems.length - 1) {
        const next = document.createElement('a');
        next.href = flatMenuItems[currentIndex + 1].href;
        next.className = 'next-link';
        next.innerHTML = `Next: ${flatMenuItems[currentIndex + 1].text} →`;
        paginationContainer.appendChild(next);
    }

    const content = document.getElementById("content");
    if (content && paginationContainer.children.length > 0) {
        content.appendChild(paginationContainer);
    }
});
