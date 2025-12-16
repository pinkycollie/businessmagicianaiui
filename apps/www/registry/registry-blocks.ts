import { type Registry } from "shadcn/registry"

export const blocks: Registry["items"] = [
  {
    name: "sidebar-01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-01/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-01/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-02",
    description: "A sidebar with collapsible sections.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-02/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-02/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-02/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-02/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-03",
    description: "A sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "blocks/sidebar-03/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-03/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-04",
    description: "A floating sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator"],
    files: [
      {
        path: "blocks/sidebar-04/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-04/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-05",
    description: "A sidebar with collapsible submenus.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "collapsible",
    ],
    files: [
      {
        path: "blocks/sidebar-05/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-05/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-05/components/search-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-06",
    description: "A sidebar with submenus as dropdowns.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "card",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-06/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-06/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-06/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-06/components/sidebar-opt-in-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-07",
    type: "registry:block",
    description: "A sidebar that collapses to icons.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-07/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-07/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-08",
    description: "An inset sidebar with secondary navigation.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-08/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-08/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-09",
    description: "Collapsible nested sidebars.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
      "switch",
    ],
    files: [
      {
        path: "blocks/sidebar-09/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-09/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-09/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-10",
    description: "A sidebar in a popover.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "popover",
      "collapsible",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-10/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-10/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-actions.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-favorites.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-workspaces.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-11",
    description: "A sidebar with a collapsible file tree.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "collapsible"],
    files: [
      {
        path: "blocks/sidebar-11/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-11/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-12",
    description: "A sidebar with a calendar.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "calendar",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-12/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-12/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-12/components/calendars.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-12/components/date-picker.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-12/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-13",
    description: "A sidebar in a dialog.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "button", "dialog"],
    files: [
      {
        path: "blocks/sidebar-13/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-13/components/settings-dialog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-14",
    description: "A sidebar on the right.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "blocks/sidebar-14/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-14/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-15",
    description: "A left and right sidebar.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "popover",
      "collapsible",
      "dropdown-menu",
      "calendar",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-15/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-15/components/calendars.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/date-picker.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-favorites.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-workspaces.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/sidebar-left.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/sidebar-right.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-16",
    description: "A sidebar with a sticky site header.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
      "button",
    ],
    files: [
      {
        path: "blocks/sidebar-16/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-16/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/site-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-02",
    description: "A two column login page with a cover image.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-02/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-02/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-03",
    description: "A login page with a muted background color.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-03/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-03/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-04",
    description: "A login page with form and image.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-04/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-04/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-05",
    description: "A simple email-only login page.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-05/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-05/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "startup-dashboard-01",
    description: "A startup dashboard with metrics and growth tracking.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "card"],
    files: [
      {
        path: "blocks/startup-dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/startup-dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/startup-dashboard-01/components/metrics-cards.tsx",
        type: "registry:component",
      },
    ],
    categories: ["startup", "dashboard"],
  },
  {
    name: "small-business-01",
    description: "A small business management dashboard with inventory tracking.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "table", "badge"],
    files: [
      {
        path: "blocks/small-business-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/small-business-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/small-business-01/components/inventory-table.tsx",
        type: "registry:component",
      },
    ],
    categories: ["small-business", "dashboard"],
  },
  {
    name: "corporate-dashboard-01",
    description: "A corporate dashboard with team analytics and department management.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "card", "progress"],
    files: [
      {
        path: "blocks/corporate-dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/corporate-dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/corporate-dashboard-01/components/team-analytics.tsx",
        type: "registry:component",
      },
    ],
    categories: ["corporation", "dashboard"],
  },
  {
    name: "nonprofit-dashboard-01",
    description: "A non-profit dashboard with campaign and donation tracking.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "card", "progress", "badge"],
    files: [
      {
        path: "blocks/nonprofit-dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/nonprofit-dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/nonprofit-dashboard-01/components/campaign-cards.tsx",
        type: "registry:component",
      },
    ],
    categories: ["non-profit", "dashboard"],
  },
  {
    name: "freelancer-dashboard-01",
    description: "A freelancer dashboard with project and time tracking.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "card", "progress", "badge"],
    files: [
      {
        path: "blocks/freelancer-dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/freelancer-dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/freelancer-dashboard-01/components/projects-list.tsx",
        type: "registry:component",
      },
    ],
    categories: ["self-employment", "dashboard"],
  },
]
