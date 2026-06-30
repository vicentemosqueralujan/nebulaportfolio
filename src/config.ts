// ─── Types ─────────────────────────────────────────────────────────────────────

export type Project = {
  name: string;
  description: string;
  link?: string;
  pageSlug?: string;
  skills?: string[];
};

export type Experience = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  dateRange: string;
  achievements?: string[];
};

export type EngineeringPage = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  markdownContent: string;
};

// ─── Identity & Branding ───────────────────────────────────────────────────────
// Controls: name and professional title rendered in Hero, Nav, Footer.

export const siteConfig = {
  name: "Jon Smith",
  title: "Senior Full-Stack Developer | Distributed Systems & Enterprise Architecture",

  // ─── Theme ─────────────────────────────────────────────────────────────────
  // accentColorLight → --accent-color in light mode
  // accentColorDark  → --accent-color in dark mode
  // Change these two values to retheme the entire site.

  accentColorLight: "#6366f1",
  accentColorDark: "#a855f7",

  // ─── SEO ───────────────────────────────────────────────────────────────────

  seo: {
    description:
      "Senior Full-Stack Developer with 10+ years building distributed systems, enterprise APIs, and cloud-native infrastructure at scale.",
  },

  // ─── Navigation ────────────────────────────────────────────────────────────
  // Controls: nav link labels in Nav and Footer (desktop + mobile).

  navigation: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    pages: "Pages",
    contact: "Contact",
    aria: {
      toggleTheme: "Toggle theme",
      toggleMenu: "Toggle navigation menu",
    },
  },

  // ─── Social ────────────────────────────────────────────────────────────────

  social: {
    email: "jon.smith@example.com",
    github: "https://github.com/jonsmith",
    linkedin: "https://linkedin.com/in/jonsmith",
    aria: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  // ─── Hero ──────────────────────────────────────────────────────────────────
  // buttons.primary scrolls to Projects.
  // buttons.secondary links to /pages.

  hero: {
    greeting: "Hello! 👋",
    namePrefix: "I'm",
    buttons: {
      primary: "View Projects",
      secondary: "Explore Pages",
      resume: "Download Resume",
      resumeLoading: "Generating…",
    },
    resumeUrl: "/resume.pdf",
  },

  // ─── About ─────────────────────────────────────────────────────────────────

  about: {
    sectionTitle: "About Me",
    skillsLabel: "Skills",
    body: "Senior Full-Stack Developer with 10+ years architecting and delivering distributed systems, enterprise-grade APIs, and cloud-native infrastructure. Deep expertise spanning TypeScript, Go, Python, React, Kubernetes, and multi-cloud deployments on AWS and GCP. Proven track record leading cross-functional engineering teams, driving large-scale platform migrations, and optimizing high-throughput services serving tens of millions of requests per day.",
    skills: [
      "TypeScript", "Go", "Python", "Rust",
      "React", "Next.js", "Node.js",
      "PostgreSQL", "Redis", "Kafka",
      "Kubernetes", "Docker", "Terraform",
      "AWS", "GCP", "gRPC", "GraphQL",
      "System Design", "Distributed Systems", "CI/CD",
    ],
  },

  // ─── Projects ──────────────────────────────────────────────────────────────
  // Removing all items from items[] hides the Projects section.

  projects: {
    sectionTitle: "Projects",
    deepDiveLabel: "Read page",
    sourceCodeLabel: "Source Code",
    items: [
      {
        name: "OpenMetrics Dashboard",
        description:
          "Enterprise observability platform ingesting 2B+ Prometheus data points daily across 40+ microservices. Multi-tenant query isolation, sub-second anomaly detection via rolling Z-score, and intelligent alert routing to Slack and PagerDuty with full idempotency guarantees.",
        link: "https://github.com/jonsmith/openmetrics-dashboard",
        pageSlug: "openmetrics-dashboard",
        skills: ["React", "TypeScript", "Prometheus", "Node.js", "PostgreSQL", "Docker", "Redis"],
      },
      {
        name: "AutoDeploy CLI",
        description:
          "Production-grade Kubernetes deployment orchestrator standardizing rollout strategies across 20+ microservices. Dry-run manifest validation, configurable readiness-gated rolling updates, and automatic rollback on error-rate or P99 latency regression.",
        link: "https://github.com/jonsmith/autodeploy-cli",
        pageSlug: "autodeploy-cli",
        skills: ["Go", "Kubernetes", "Docker", "Terraform", "Shell"],
      },
      {
        name: "API Gateway Proxy",
        description:
          "High-performance reverse proxy handling 50k+ req/s at sub-3ms p99 overhead on a 4-core instance. Zero-allocation hot path in Go, token-bucket rate limiting via shared Redis state, atomic JWKS key rotation, and declarative YAML config with inotify hot-reload.",
        pageSlug: "api-gateway-proxy",
        skills: ["Go", "Redis", "Docker", "JWT", "gRPC"],
      },
      {
        name: "SecureVault",
        description:
          "Enterprise secrets management platform with AES-256-GCM envelope encryption, AWS KMS key wrapping, namespace-scoped RBAC, two-phase atomic rotation, and an append-only PostgreSQL audit trail with cryptographic state hashing.",
        link: "https://github.com/jonsmith/securevault",
        pageSlug: "securevault",
        skills: ["Python", "FastAPI", "AWS KMS", "PostgreSQL", "Terraform"],
      },
    ] satisfies Project[],
  },

  // ─── Engineering Pages Index ────────────────────────────────────────────────
  // Controls: overhead label, title, description shown on /pages.

  engineeringPages: {
    overheadLabel: "Engineering Documentation",
    title: "Pages",
    description:
      "Deep technical write-ups covering architecture decisions, engineering challenges, and lessons learned from each project.",
  },

  // ─── Engineering Pages ─────────────────────────────────────────────────────
  // Each item maps to a route at /pages/[slug].

  pages: [
    {
      id: "openmetrics-dashboard",
      title: "OpenMetrics Dashboard",
      subtitle:
        "Real-time metrics visualization platform aggregating Prometheus telemetry with anomaly detection and multi-tenant alert routing.",
      slug: "openmetrics-dashboard",
      markdownContent: `## Overview

This project started as an internal tool to replace a fragile collection of Grafana dashboards that had grown too complex to maintain. The core requirement was a single platform where multiple teams could define their own metric views without stepping on each other's data.

## Multi-Tenant Architecture

Each tenant is isolated at the query layer. Prometheus federation is used to pull metrics from per-team namespaces into a central aggregator. The dashboard backend validates every incoming query against a tenant allowlist before forwarding to Prometheus — cross-tenant data leakage is impossible at the API level.

## Anomaly Detection

The anomaly engine runs a rolling Z-score computation over each metric's 7-day history. A configurable sensitivity threshold (default: 3σ) determines when a point is flagged. False-positive suppression uses a minimum duration gate: an anomaly is only surfaced if the Z-score exceeds threshold for at least 3 consecutive scrape intervals.

## Alert Routing

Alerts are routed via a simple plugin interface. The Slack plugin posts a formatted card to a configured channel. The PagerDuty plugin creates an incident via the Events API v2. Both plugins are stateless and idempotent — re-delivering the same alert twice has no side effect.

## Challenges

The hardest problem was rendering high-cardinality time series efficiently. The initial React approach re-rendered the entire chart on every data point update. Switching to a virtualized canvas renderer (via uPlot) reduced render time from ~200ms to ~8ms for a 10,000-point series.`,
    },
    {
      id: "autodeploy-cli",
      title: "AutoDeploy CLI",
      subtitle:
        "Developer CLI for Kubernetes deployments with pre-deploy health checks, rolling updates, and structured log streaming to observability backends.",
      slug: "autodeploy-cli",
      markdownContent: `## Overview

AutoDeploy was built to standardize the deployment process across 12 microservices managed by three different teams. Before it existed, each service had a custom Makefile target with slightly different behavior.

## Manifest Validation

Before any cluster interaction, the CLI validates all Kubernetes manifests against the cluster's API server in dry-run mode. This catches misconfigured resource requests, missing ConfigMap references, and invalid image tags before any rollout begins.

## Rolling Update Strategy

The CLI controls the rollout cadence directly via the Kubernetes rollout API. The default strategy is max-surge=1, max-unavailable=0. After each pod replacement, the CLI polls the readiness probe endpoint and waits for a configurable stabilization window before proceeding to the next pod.

## Rollback Triggers

Three conditions trigger an automatic rollback: readiness probe failure after the stabilization window, HTTP error rate exceeding a configurable threshold (default: 5%), and P99 latency spiking more than 2x the pre-deploy baseline.

## Structured Logging

All deployment events are emitted as structured JSON to stdout. Each event carries a correlation ID, service name, environment, and operator identity — enabling a complete audit trail per deployment.`,
    },
    {
      id: "api-gateway-proxy",
      title: "API Gateway Proxy",
      subtitle:
        "Lightweight reverse proxy with rate limiting, JWT authentication, and declarative YAML configuration with hot-reload support.",
      slug: "api-gateway-proxy",
      markdownContent: `## Overview

This proxy was built to solve a specific problem: we had 6 internal services that all needed the same authentication and rate limiting logic, and each had implemented it independently.

## Configuration Schema

The entire proxy behavior is defined in a YAML file. Each route entry specifies the upstream URL, the authentication policy (JWT, API key, or none), rate limiting parameters, and any request/response transformations. The hot-reload mechanism uses inotify to detect config file changes and applies them atomically without dropping in-flight connections.

## JWT Validation

JWTs are validated against a configurable JWKS endpoint. The proxy fetches the public key set on startup and caches it with a configurable TTL. Key rotation is handled transparently: if a token's \`kid\` claim is not found in the cache, the proxy re-fetches the JWKS before rejecting the token.

## Rate Limiting

Rate limits are enforced using a token bucket algorithm backed by Redis. The bucket key is composed of the route identifier and the client's IP or JWT subject claim. Redis is the single source of truth — multiple proxy instances share the same rate limit state.

## Performance

The proxy is written in Go with zero heap allocations in the hot path. Benchmarks show consistent sub-5ms overhead at 10k requests per second on a 2-core instance.`,
    },
    {
      id: "securevault",
      title: "SecureVault",
      subtitle:
        "Self-hosted secrets management service with envelope encryption, AWS KMS integration, RBAC, and an immutable audit trail.",
      slug: "securevault",
      markdownContent: `## Overview

SecureVault was built after a credential rotation incident where a hardcoded secret in a config file propagated to 4 different environments before being discovered.

## Envelope Encryption

Secrets are encrypted using envelope encryption. A unique data encryption key (DEK) is generated per secret using AES-256-GCM. The DEK is then wrapped using AWS KMS. At rest, the vault stores only the ciphertext and the KMS-wrapped DEK — the plaintext DEK never touches disk.

## RBAC Model

Access is controlled at the namespace level. Each namespace has an attached policy document listing allowed principals and permitted operations (read, write, rotate, delete). Principals are identified by service account tokens issued by the vault itself.

## Audit Trail

Every operation is appended to an immutable audit log backed by a PostgreSQL table with a trigger that prevents updates and deletes. The audit record includes the principal identity, the operation, the secret namespace and name (not the value), and a cryptographic hash of the resulting vault state.

## Rotation

Rotation is a two-phase operation. Phase 1 generates a new version of the secret and marks it as pending. Phase 2 promotes the pending version to active and marks the previous version as deprecated. Both phases are atomic at the database level.`,
    },
  ] as EngineeringPage[],

  // ─── Experience ────────────────────────────────────────────────────────────
  // Removing all items from items[] hides the Experience section.

  experience: {
    sectionTitle: "Experience",
    items: [
      {
        company: "Nexus Systems",
        title: "Staff Engineer — Platform",
        dateRange: "Mar 2022 — Present",
        bullets: [
          "Architected a cloud-native event-streaming platform on Kubernetes processing 200M+ events/day with 99.99% SLA, reducing infrastructure cost by 40% over the prior vendor solution.",
          "Led a 14-engineer team migrating a 7-year-old monolith to a domain-driven microservices topology, completing on schedule with zero customer-facing downtime.",
          "Designed a unified internal developer platform (IDP) integrating CI/CD, secrets management, and environment provisioning, cutting new-service onboarding from 3 days to 2 hours.",
          "Drove a database schema re-architecture across 5 PostgreSQL clusters, eliminating N+1 patterns and reducing p99 query latency from 420ms to 38ms under peak load.",
          "Established org-wide engineering standards for API design, observability instrumentation, and incident response runbooks adopted across 4 product teams.",
        ],
      },
      {
        company: "Stratum Cloud",
        title: "Senior Full-Stack Engineer",
        dateRange: "Aug 2019 — Feb 2022",
        bullets: [
          "Built and scaled a multi-tenant SaaS analytics platform from 0 to 500k monthly active users, owning the full stack from React UI to Go microservices to Terraform-managed AWS infrastructure.",
          "Re-engineered the data ingestion pipeline using Kafka and Flink, increasing throughput 8x and enabling real-time customer-facing dashboards with sub-second refresh.",
          "Implemented OAuth 2.0 / OIDC federation with enterprise IdPs (Okta, Azure AD), unblocking 30 enterprise customer deals gated on SSO compliance.",
          "Reduced cloud spend by $220k/year through right-sizing, reserved instance planning, and eliminating redundant cross-AZ data transfer.",
        ],
      },
      {
        company: "Meridian Digital",
        title: "Full-Stack Engineer",
        dateRange: "Jun 2016 — Jul 2019",
        bullets: [
          "Delivered production full-stack systems for 12 client engagements across fintech, healthcare, and enterprise SaaS, consistently on time and within scope.",
          "Architected a HIPAA-compliant patient data exchange API consumed by 3 healthcare providers, implementing field-level encryption and comprehensive audit logging.",
          "Built a white-label e-commerce engine with Stripe and PayPal integrations, dynamic pricing rules, and an inventory sync service used by 6 retail clients.",
        ],
      },
    ] satisfies Experience[],
  },

  // ─── Education ─────────────────────────────────────────────────────────────
  // Removing all items from items[] hides the Education section.

  education: {
    sectionTitle: "Education",
    items: [
      {
        school: "University of Waterloo",
        degree: "B.S. in Computer Science — Distributed Systems Specialization",
        dateRange: "Sep 2012 — Jun 2016",
        achievements: [
          "Graduated with Distinction — GPA 3.9 / 4.0",
          "Capstone: fault-tolerant distributed key-value store implementing Raft consensus in Go",
          "Teaching assistant for Advanced Algorithms and Operating Systems",
          "ACM ICPC Regional Finalist (2014, 2015)",
        ],
      },
      {
        school: "AWS",
        degree: "AWS Certified Solutions Architect — Professional",
        dateRange: "Nov 2021",
        achievements: ["Passed on first attempt with score 892/1000"],
      },
      {
        school: "CNCF",
        degree: "Certified Kubernetes Administrator (CKA)",
        dateRange: "Apr 2020",
        achievements: ["Passed on first attempt"],
      },
    ] satisfies Education[],
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  // toEmail is used for the mailto href in the form submission.

  contact: {
    sectionTitle: "Contact",
    toEmail: "jon.smith@example.com",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Project Details",
      messagePlaceholder: "Describe your project or inquiry...",
      submitButton: "Send Message",
      sentConfirmation: "Sent ✓",
      emailSubjectTemplate: "Project Inquiry from {name}",
      emailBodyTemplate: "Name: {name}\nEmail: {email}\n\nProject Details:\n{message}",
    },
    labels: {
      availability: "Availability",
      responseTime: "Response Time",
      timezone: "Timezone",
      domains: "Domains",
      channels: "Channels",
    },
    availability: {
      status: "Open to opportunities",
      workMode: "Remote / Hybrid",
    },
    responseTime: "Usually within 24–48 hours",
    timezone: "EST UTC-5",
    domains: ["Distributed Systems", "Enterprise Architecture", "Cloud-Native Infrastructure", "Full-Stack Development"],
    channels: {
      linkedin: { label: "LinkedIn", handle: "jonsmith" },
      github: { label: "GitHub", handle: "jonsmith" },
    },
  },

  // ─── Footer ────────────────────────────────────────────────────────────────

  footer: {
    copyright: "All rights reserved.",
    builtWithLabel: "Built with",
    builtWithName: "NebulaPortfolio",
    builtWithUrl: "https://github.com/vicentemosqueralujan/nebulaportfolio",
  },
};
