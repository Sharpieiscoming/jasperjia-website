# V1.0 implementation scope

Preserve the existing homepage visual language and orbital hero. Add a shared bilingual shell with six real navigation destinations, keeping language in context and persisting preference only after initialization. Implement About, Projects, Writing, AI Lab, and Contact as separate App Router pages. Generate detail templates from bilingual content records; reject unknown slugs with notFound. Keep article topics as unpublished drafts, projects as concepts, missing biography and email explicitly pending. Do not add APIs, paid services, hosting configuration, or DNS changes.

Validation: production build, direct-route and invalid-slug HTTP checks, language and category-filter browser checks. Publish source changes to the existing GitHub main branch only after validation.

Results: production build and TypeScript passed. All 12 content routes returned HTTP 200; invalid project and article slugs returned 404. Browser checks passed for category filtering (3 topics to 1), Chinese/English switching, article-detail navigation with English retained, and a 390px mobile menu navigation to Contact with automatic menu closure. Desktop and mobile detail-page layouts were visually inspected.
