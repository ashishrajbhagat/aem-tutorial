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
document.getElementById("sidebarSearch").addEventListener("input", function() {
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
                href: "fundamentals/introduction.html",
                text: "Introduction to AEM"
            },
            {
                href: "fundamentals/setting-up-aem.html",
                text: "Setting Up AEM"
            },
            {
                href: "fundamentals/aem-developer-tools.html",
                text: "AEM Developer Tools"
            },
            {
                href: "fundamentals/project-creation-and-deployment.html",
                text: "Project Creation & Deployment"
            },
            {
                href: "fundamentals/apache-felix.html",
                text: "Apache Felix"
            },
            {
                href: "fundamentals/apache-jackrabbit.html",
                text: "Apache Jackrabbit"
            },
            {
                href: "fundamentals/apache-sling.html",
                text: "Apache Sling"
            },
            {
                href: "fundamentals/runmodes.html",
                text: "Runmodes"
            },
            {
                href: "fundamentals/osgi-configuration.html",
                text: "OSGi Configuration"
            }
        ]
    },
    {
        title: "Authoring & Page-Level Concepts",
        items: [{
                href: "authoring/sites-pages.html",
                text: "Sites and Pages"
            },
            {
                href: "authoring/page-editing-and-tools.html",
                text: "Page Editing and Tools"
            },
            {
                href: "authoring/page-management.html",
                text: "Page Management"
            },
            {
                href: "authoring/templates.html",
                text: "Templates"
            },
            {
                href: "authoring/components.html",
                text: "Components"
            },
            {
                href: "authoring/sightly.html",
                text: "Sightly (HTL)"
            },
            {
                href: "authoring/clientlibs.html",
                text: "Clientlibs"
            },
            {
                href: "authoring/internationalization.html",
                text: "Internationalization (i18n)"
            },
            {
                href: "authoring/tagging-metadata.html",
                text: "Tagging and Metadata Management"
            },
            {
                href: "authoring/personalization-and-targeting.html",
                text: "Personalization and Targeting"
            }
        ]
    },
    {
        title: "Backend Development",
        items: [{
                href: "backend/models.html",
                text: "Sling Models"
            },
            {
                href: "backend/servlets.html",
                text: "Servlets"
            },
            {
                href: "backend/services.html",
                text: "Services"
            },
            {
                href: "backend/r6-annotation.html",
                text: "R6 Annotations"
            },
            {
                href: "backend/jcr-and-sling-api.html",
                text: "JCR and Sling API"
            },
            {
                href: "backend/scheduler-and-jobs.html",
                text: "Scheduler and Jobs"
            },
            {
                href: "backend/queries.html",
                text: "Queries"
            },
            {
                href: "backend/rest-api.html",
                text: "REST API Development"
            },
            {
                href: "backend/third-party-integration.html",
                text: "Third-Party Service Integration"
            },
            {
                href: "backend/aem-testing.html",
                text: "AEM Testing Frameworks"
            }
        ]
    },
    {
        title: "Workflow & Event Handling",
        items: [{
                href: "workflow/workflow.html",
                text: "Workflow"
            },
            {
                href: "workflow/event-handling.html",
                text: "Event Handling"
            }
        ]
    },
    {
        title: "Content Reuse & Headless",
        items: [{
                href: "headless/experience-fragment.html",
                text: "Experience Fragment"
            },
            {
                href: "headless/content-fragment.html",
                text: "Content Fragment"
            },
            {
                href: "headless/multi-site-manager.html",
                text: "headless/Multisite Manager (MSM)"
            },
            {
                href: "headless/aem-headless.html",
                text: "AEM as Headless CMS"
            }
        ]
    },
    {
        title: "Tools & Extensions",
        items: [{
                href: "tools/acs-commons.html",
                text: "ACS Commons"
            },
            {
                href: "tools/dynamic-media.html",
                text: "Dynamic Media"
            },
            {
                href: "tools/digital-asset-management.html",
                text: "Digital Asset Management"
            },
            {
                href: "tools/sling-pipes.html",
                text: "Sling Pipes"
            },
            {
                href: "tools/groovy-console.html",
                text: "Groovy Console"
            },
            {
                href: "tools/debugging-troubleshooting.html",
                text: "Debugging & Troubleshooting"
            },
            {
                href: "tools/console-customization.html",
                text: "Console & UI Customization"
            },
            {
                href: "tools/aem-forms.html",
                text: "AEM Forms"
            },
            {
                href: "tools/aem-commerce.html",
                text: "AEM Commerce Integration"
            }
        ]
    },
    {
        title: "Infrastructure & Optimization",
        items: [{
                href: "infrastructure/dispatcher.html",
                text: "Dispatcher"
            },
            {
                href: "infrastructure/caching.html",
                text: "Caching"
            },
            {
                href: "infrastructure/replication.html",
                text: "Replication"
            },
            {
                href: "infrastructure/maintenance-and-cleanup.html",
                text: "Maintenance and Housekeeping"
            },
            {
                href: "infrastructure/content-migration.html",
                text: "Content Migration Best Practices"
            },
            {
                href: "infrastructure/seo-and-search-optimization.html",
                text: "SEO & Search Optimization"
            },
            {
                href: "infrastructure/persistence-setup.html",
                text: "Persistence Setup"
            },
            {
                href: "infrastructure/build-deployment.html",
                text: "Build & Deployment"
            }
        ]
    },
    {
        title: "Security & Administration",
        items: [{
                href: "security/authentication-and-user-management.html",
                text: "Authentication and User Management"
            },
            {
                href: "security/ssl-secure-login.html",
                text: "SSL Secure Login"
            }
        ]
    },
    {
        title: "Monitoring & Insights",
        items: [{
            href: "monitoring/analytics-in-aem.html",
            text: "Content Insights and Analytics"
        }]
    },
    {
        title: "AEM as a Cloud Service",
        items: [{
            href: "cloud/cloud-manager.html",
            text: "Cloud Manager in AEMaaCS"
        }]
    },
    {
        title: "Interview Questions",
        items: [{
                href: "interview/aem-interview.html",
                text: "AEM Interview (Basic → Advanced)"
            },
            {
                href: "interview/aem-scenarios.html",
                text: "AEM Scenarios & Gotchas"
            },
            {
                href: "interview/java-for-aem.html",
                text: "Core Java for AEM Developers"
            },
            {
                href: "interview/frontend-interview.html",
                text: "JavaScript / React / Angular"
            }
        ]
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
        a.href = "../" + item.href;
        a.className = "nav-link";
        a.textContent = item.text;

        if (currentUrl.endsWith(item.href)) {
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
    const fullPath = window.location.pathname;
    const pathSegments = fullPath.split("/").filter(Boolean);
    const currentPage = pathSegments.slice(-2).join("/");

    const flatMenuItems = sections.flatMap(section => section.items);
    const currentIndex = flatMenuItems.findIndex(item => item.href === currentPage);
    if (currentIndex === -1) return;

    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'simple-pagination';

    if (currentIndex > 0) {
        const prev = document.createElement('a');
        prev.href = "../" + flatMenuItems[currentIndex - 1].href;
        prev.className = 'prev-link';
        prev.innerHTML = `← Previous: ${flatMenuItems[currentIndex - 1].text}`;
        paginationContainer.appendChild(prev);
    }

    if (currentIndex < flatMenuItems.length - 1) {
        const next = document.createElement('a');
        next.href = "../" + flatMenuItems[currentIndex + 1].href;
        next.className = 'next-link';
        next.innerHTML = `Next: ${flatMenuItems[currentIndex + 1].text} →`;
        paginationContainer.appendChild(next);
    }

    const content = document.getElementById("content");
    if (content && paginationContainer.children.length > 0) {
        content.appendChild(paginationContainer);
    }
});
