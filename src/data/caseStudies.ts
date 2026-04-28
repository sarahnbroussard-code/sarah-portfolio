export type CaseStudySection = {
  title: string
  body: string
  label?: string
  image?: string
  stats?: { value: string; label: string }[]
  embedUrl?: string
  features?: { title: string; body?: string }[]
  steps?: { title: string; body: string; image?: string }[]
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  tags: string[]
  year: string
  role: string
  heroImage?: string
  sections: CaseStudySection[]
}

export const caseStudies: CaseStudy[] = [
  // ─── Sweatpals ───────────────────────────────────────────────────────────────
  {
    slug: 'sweatpals',
    title: 'Sweatpals',
    subtitle: 'Community dashboard · Design challenge · 2026',
    tags: ['Consumer', 'SaaS', 'Dashboard'],
    year: '2026',
    role: 'Product Designer',
    sections: [],
  },

  // ─── Atlassian Jira Align ────────────────────────────────────────────────────
  {
    slug: 'atlassian-jira-align',
    title: 'Atlassian Jira Align',
    subtitle: 'Enterprise · SaaS · Strategy',
    tags: ['Enterprise', 'SaaS', 'Strategy'],
    year: '2021 – Present',
    role: 'Senior Product Designer',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/acfcd7e1-6b9c-40ae-874d-6fc5e19cf1cb/Jiral+Align_hero.png',
    sections: [
      {
        title: 'What is Jira Align?',
        body: 'Jira Align is a cloud-based enterprise agile planning platform developed by Atlassian. It sits above Jira Software and other team-level tools, helping executives, portfolio managers, product leaders, and delivery teams align work, track strategy, OKRs, epics, and user stories, and provides real-time visibility into progress, dependencies, risks, and resources. It supports organizations using SAFe, LeSS, and similar scaled agile methodologies.',
      },
      {
        label: 'Impact',
        title: 'What impact was achieved?',
        body: 'Two connected workstreams delivered one shared goal: make Enterprise Insights easy to access, and make its value undeniable.',
        stats: [
          { value: '75%', label: 'reduction in Enterprise Insights support tickets' },
          { value: '20% YoY', label: 'churn reduction — from 31% down to 17%' },
          { value: '30%', label: 'faster time-to-value for new customers' },
          { value: '12%', label: 'lower churn rate for EI-enabled customers' },
        ],
      },
      {
        title: 'Project Overview',
        body: 'We integrated Enterprise Insights with Atlassian Analytics to replace a fragmented, support-heavy reporting experience with a more scalable self-service model. The initiative focused on improving onboarding and making Jira Align data easier to access, combine, and act on within Atlassian\'s native analytics ecosystem.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/411b6d9a-1b9c-4d77-9eea-20c504612381/Overview+-+168.png',
      },
      {
        label: 'Problem',
        title: 'The Problem',
        body: 'Enterprise Insights was difficult to provision, costly to use, and too dependent on manual support and third-party tools. As adoption was expected to grow, the experience needed to shift from high-touch setup to a more scalable, self-serve path to insights.',
      },
      {
        label: 'Goal',
        title: 'What is the GOAL',
        body: "Jira Align's FY25 product strategy is to mitigate churn. The Jira Align reporting feature was not meeting the needs of our customers. It takes too much time for customers to begin using Enterprise Insights (EI). Knowing EI is a powerful retention driver, we need to do two things to increase adoption:\n\n**Increase adoption:** the number of active customers who have EI (EI users had ~12% lower churn).\n\n**Reduce Support Load:** Help customers onboard and use EI successfully.\n\n**Deliver on Atlassian's vision** of unified analytics across its product suite.",
      },
      {
        label: 'Opportunities',
        title: 'Areas of Opportunity',
        body: '**DIFFICULT TO SHOW ROI**\n\nWith a confusing information architecture and missing features, users had a hard time talking about the value of Jira Align unless they worked with an account or support person.\n\n**CONFUSING INFORMATION ARCHITECTURE**\n\nAfter years of additive work to the product to meet the growing needs of users, it struggled to keep up and became a fragmented experience from Atlassian integrations. This meant that users struggled to connect to their work, and third-party data sources. Users leaned heavily on our internal support teams.\n\n**REQUIRES HUMAN INTERVENTION**\n\nThe current experience was missing a focus on self service. So much of the experience required reaching out to support to connect, and view their own data.\n\n**OUTDATED TECH**\n\nBuilt on an outdated tech stack, any work done to the Jira Align reporting experience was time intensive, and struggled to be performant.\n\n**INTEGRATE WITH EI + ATLASSIAN ANALYTICS**\n\nWe identified an opportunity to replace a manual, siloed reporting process with live, connected dashboards—giving stakeholders self-serve access to real-time visibility across execution, outcomes, and the behavioral signals needed to make smarter product decisions.\n\n**REDUCE CUSTOMER CHURN**\n\nOpportunity to use Atlassian Analytics in order to bridge the reporting gap for Jira Align cloud customers.',
      },
      {
        label: 'Research',
        title: 'Support ticket volume',
        body: 'We reviewed Enterprise Insights support tickets and identified that 47% were related to setting up user access to Enterprise Insights. The average support team spent upwards of 168 hours per month setting up user access to Enterprise Insights.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1d28b891-cce8-46c3-8b8e-d7b064c92a8a/Screenshot+2025-11-18+at+2.38.42%E2%80%AFPM.png',
        stats: [
          { value: '47%', label: 'of support tickets related to EI access setup' },
          { value: '168 hrs', label: 'avg. monthly hours spent on user access setup' },
        ],
      },
      {
        label: 'Research',
        title: 'Value Proposition Canvas',
        body: "The Value Proposition Canvas (VPC) is a strategic tool designed to help businesses clearly understand their customers' needs and systematically align their services to meet those needs.\n\nThis allowed us to improve our understanding of our customers' needs (jobs + pains + gains) and to identify how our services help them complete their jobs. We can track this journey (customer feedback + testing various metrics) and make adjustments based on insights gained. I led several sessions with customers to identify their jobs to be done, pains, and gains.\n\nVPC is most valuable when:\n\n• The problem is unclear or messy 👉 forces clarity\n• Stakeholders are misaligned 👉 creates a shared definition of success between teams\n• You're prioritizing what to build 👉 creates priority and stronger product decisions\n• You're designing complex systems 👉 whole systems visibility and defensible design POV",
        embedUrl: 'https://app.mural.co/t/personal20020/m/personal20020/1747073337200/b51453c0c3010c277a4d4eb00e612d56ce83c6e5',
      },
      {
        label: 'Strategy',
        title: 'Strategy & Focus',
        body: 'Three strategic areas guided every design decision across this initiative.',
        features: [
          {
            title: 'Reduce onboarding friction',
            body: 'Simplify the path into Enterprise Insights by removing manual setup steps and making access easier to understand and initiate.',
          },
          {
            title: 'Increase self-service insight creation',
            body: 'Enable customers to create and customize dashboards within Atlassian Analytics without relying on external BI tools or specialist support.',
          },
          {
            title: 'Create a more scalable reporting model',
            body: 'Shift from a high-touch, support-dependent experience to a more repeatable, in-product workflow that could support growth.',
          },
        ],
      },
      {
        label: 'Research',
        title: 'Learnings from users',
        body: 'I led discovery sessions with customers and internal stakeholders to align on the broader problem and uncover where the existing experience met expectations versus where it created friction. These conversations gave us direct visibility into day-to-day user behavior, helping us ground product decisions in real-world workflows rather than assumptions.\n\n**User types interviewed:** Jira Align Administrator · Jira Align Support Engineer · Reporting Analyst\n\n**Customer companies:** Expedia · GM · Ford · ASML',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/85c9e92a-76ae-41c5-8906-bb84a503d12d/Personas-+slide.jpg',
      },
      {
        label: 'Solution',
        title: 'Key Features of the Enterprise Insights Administration',
        body: '🔑 Key features of the Enterprise Insights administration',
        features: [
          {
            title: 'Guided Setup Wizard',
            body: 'The configuration of Enterprise Insights requires a technical understanding of IP addresses, allowlisting, and Microsoft Entra authentication. We built a setup wizard that guides the Jira Align administrator through their first time setting up firewall rules and adding new user accounts — with detailed instructions at every step.',
          },
          {
            title: 'Managing Firewall Rules',
            body: "Within the Enterprise Insights administration, Jira Align administrators can add and delete firewall rules. The Firewall rules page includes search and sorting functionality to find existing rules quickly.",
          },
          {
            title: 'Managing Microsoft Entra User Accounts',
            body: 'The administration also has a view that enables adding and deleting of user accounts that can access Enterprise Insights using Microsoft Entra authentication. Jira Align administrators can search and sort the user list to find specific users.',
          },
          {
            title: 'Audit Log to View Changes',
            body: 'Built-in audit logging gives customers the ability to see changes made through the Enterprise Insights administration for compliance purposes — with date, timestamps, the name and email of who made the change, and a description of the change.',
          },
          {
            title: "What's Next?",
            body: "This initial launch is the first phase for the Enterprise Insights administration and is a significant improvement from the existing manual process. We plan to expand functionality in FY25 H2 by building out the ability for customers to self-enable the integration of Atlassian Analytics and Enterprise Insights — replacing another manual support process and helping us scale.",
          },
        ],
      },
      {
        label: 'Design & Solution',
        title: 'Designing the self-service EI administration experience',
        body: 'Three design phases that moved from concept to a fully shipped admin flow — each one eliminating a specific layer of support dependency.',
        steps: [
          {
            title: 'The Solution Concept',
            body: 'We designed a self-service EI onboarding experience that eliminated the need for Atlassian support engineers from the setup path entirely.',
          },
          {
            title: 'The Self-Service Admin Flow',
            body: 'The key screens of the EI Administration integration within Jira Align. Walk through the connection flow: discover → configure → connect → validate.',
          },
          {
            title: 'Dashboard Templates',
            body: 'Five starter dashboard templates (Epic Status, Value Stream Flow Metrics, Portfolio Flow Metrics, OKR Health, Process Step Cycle Time) for immediate value on day one.',
          },
        ],
      },
      {
        label: 'User Journey',
        title: 'User Journey',
        body: 'Mapped the end-to-end admin and end-user journey to identify every point where manual intervention could be eliminated.',
        steps: [
          {
            title: 'Admin journey — provisioning',
            body: 'The administrator flow from first login through firewall setup, user provisioning, and connection validation.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/4f8b4139-b3e5-4dbf-835e-d7f6d9319a7c/Screenshot+2023-05-02+at+12.06+3.png',
          },
          {
            title: 'User journey — onboarding to insights',
            body: 'The end-user path from receiving access through navigating dashboards and creating their first custom view.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/7bf3b0ad-e8ee-417e-a14e-d04acae8ded5/Screenshot+2023-05-02+at+12.06+1.png',
          },
          {
            title: 'Onboarding & self-service map',
            body: 'Combined view of both journeys showing the handoff points and where self-service eliminates the previous support dependency.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1cc77b38-3813-49b3-a0ee-80e800812268/Publish_Journey+map.png',
          },
        ],
      },
      {
        label: 'Impact & Outcomes',
        title: 'Two workstreams, one shared goal',
        body: 'Designed for two connected workstreams with the same shared goal.',
        features: [
          {
            title: 'Workstream 1 — Self-Service Onboarding Wizard',
            body: 'Replaced an 11-step manual support runbook with an in-product onboarding wizard. Admins can now configure firewall rules, provision users, and connect to Atlassian Analytics — with zero support intervention.',
          },
          {
            title: 'Workstream 2 — Enterprise Insights + Atlassian Analytics',
            body: 'Designed a native AA dashboard template using EI as a data source. Replaced third-party BI tools (Tableau, Power BI) with an in-product, self-service analytics experience.',
          },
        ],
      },
      {
        label: 'Strategic Fit',
        title: "How does this fit into Atlassian's strategy?",
        body: "Jira Align fits into the Atlassian product suite by providing enterprise-level, strategic oversight that sits on top of Jira Software, connecting day-to-day team execution with business strategy. It acts as a bridge between the team and enterprise levels — providing a single source of truth for program and portfolio management, offering visibility across the entire value stream. While teams use Jira for agile execution, Jira Align aggregates that data to give leadership a high-level view of progress, strategy, and bottlenecks.\n\n**Discovery ➡️ Design ➡️ User Research ➡️ Improvements ➡️ Development**",
      },
    ],
  },

  // ─── Navigation ─────────────────────────────────────────────────────────────
  {
    slug: 'jira-align-1',
    title: 'Navigation',
    subtitle: 'Information architecture + enterprise navigation',
    tags: ['IA', 'Navigation', 'Enterprise'],
    year: '2024',
    role: 'Lead Product Designer',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/2e9372b9-393a-49ae-9058-c51f5d91876f/navigation+hero.png',
    sections: [
      {
        title: 'Enterprise Agility at Scale',
        body: 'I led the product design team for Jira Align, Atlassian\'s enterprise agility platform. Our mission: simplify a complex product, strengthen cross-functional alignment, and scale design to support rapid cloud growth. The impact? Increased user satisfaction, stronger product-market fit, and accelerated enterprise adoption.',
      },
      {
        label: 'Research & Insights',
        title: 'Research & Insights',
        body: 'Through user telemetry, in-app feedback, and eye-tracking studies, we identified key friction points and mental patterns that shaped the redesign.',
        steps: [
          {
            title: 'Nested Navigation',
            body: "Users consistently struggled to locate pages, with navigation described as 'deep' and 'confusing.' Eye-tracking showed users spending excessive time scanning the left nav before finding their destination.",
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/32ec87ae-281d-4064-ac39-f747fc95e5a2/oldprogram+room.png',
          },
          {
            title: 'Bloated Product',
            body: 'Too many unused features cluttered the interface and overwhelmed users. Feature discovery research showed that over 60% of nav items were rarely or never used by the majority of customers.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/de22f92c-97f1-45b7-8fa0-6fbcf923fe2c/OldHomepage.png',
          },
          {
            title: 'Homepage Friction',
            body: "Valuable homepage real estate was being wasted by tutorials that weren't widely used. As software that tracks goals and work, users wanted a dashboard to clearly get a high-level view of their programs and status.",
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/62e44e8a-02a0-4fe3-a647-bd1461cb37b2/Old_ObjectivesTreeHomepage.png',
          },
          {
            title: 'Objectives Tree Confusion',
            body: 'Users needed clearer visual hierarchy and status indicators across strategic goals. The existing tree structure lacked the visual language to communicate progress and dependencies at a glance.',
          },
        ],
      },
      {
        label: 'Design System',
        title: 'Adopting Atlassian\'s navigation pattern',
        body: '"Adopting navigation, a core piece of the Atlassian experience allows us to take advantage of previous work and give us a good base to start from for future projects."\n\nSwitching to Atlassian\'s horizontal navigation system immediately reduced cognitive load by aligning Jira Align with the broader ecosystem users already knew.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/83069413-05cd-41a5-8705-4eabadb62df9/Screenshot+2025-12-04+at+1.19.19%E2%80%AFPM.png',
      },
      {
        label: 'Why It Mattered',
        title: 'Why it mattered',
        body: 'Jira Align was originally designed for highly experienced, long-term users who already understood the system. Over time, that created complexity, fragmentation, and inconsistent patterns that made it hard for new or occasional users to understand where to start or how to navigate the product with confidence.\n\nOur work focused on simplifying the experience — improving clarity from first impressions through day-to-day use. The goal was to make the product easier for everyone, regardless of experience level, and reduce the cognitive load that had built up across the interface.\n\n✅ Improved navigation and information clarity made key features easier to find and understand.\n✅ Unified, intuitive workflows brought Jira Align closer to the rest of the Atlassian ecosystem.\n✅ Enhanced accessibility and readability reduced support needs and supported compliance.',
      },
      {
        label: 'Product Improvements',
        title: 'Product Improvements',
        body: 'Three major improvements shipped as part of this initiative, each directly addressing a research finding.',
        steps: [
          {
            title: 'Consistent Navigation',
            body: 'Implemented Atlassian\'s horizontal IA, bringing familiar patterns and reducing cognitive load across the entire product.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/ac88b3ed-6a4a-4399-9acd-07747d641972/Screenshot+2025-12-10+at+2.44.36%E2%80%AFPM.png',
          },
          {
            title: 'Objectives Tree Redesign',
            body: 'Redesigned the Objectives Tree with clearer visual hierarchy, status indicators, and dependency visualization — making strategic goals immediately legible.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/39014d75-d5af-497d-8b2a-972007bd1e83/New+objectives+tree.png',
          },
          {
            title: 'Support Through Change',
            body: 'Refreshed the Help homepage and added context-aware guidance to ease transitions for both new and experienced users navigating the redesigned product.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/c217fe7f-5f9d-4148-b460-551291480b69/Screenshot+2025-12-10+at+2.42.24%E2%80%AFPM.png',
          },
        ],
      },
      {
        label: 'Before & After',
        title: 'Before & After',
        body: 'The homepage transformation — from a tutorial-heavy landing page to a dashboard that gives users immediate visibility into their programs and status.',
        steps: [
          {
            title: 'Before',
            body: 'Homepage dominated by tutorials and onboarding content. Key program data buried. Users required to navigate multiple levels to understand portfolio status.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/a7aa16ed-b7cb-4f4f-88cc-5f8e1b264170/%5BOLD%5D+Home+%2B+starred.png',
          },
          {
            title: 'After',
            body: 'Homepage redesigned as a true dashboard — starred programs, status at a glance, and a clear hierarchy that surfaces the right information to the right user immediately.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/63e7d868-7ead-48cb-b0b1-3af3a251b585/%5BNEW%5D+Home+%2B+starred.png',
          },
        ],
      },
      {
        label: 'Closing',
        title: '"Great design isn\'t just about pixels."',
        body: 'This work reminded me: great design isn\'t just about pixels. It\'s about alignment — between people, systems, and strategy.',
      },
    ],
  },

  // ─── Virtual Try-On ──────────────────────────────────────────────────────────
  {
    slug: 'virtual-tryon',
    title: 'Virtual Try-On',
    subtitle: 'Beauty tech + experience design',
    tags: ['Consumer', 'UX', 'Beauty', 'Design Sprint'],
    year: '2020',
    role: 'Lead UX Designer',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1590091436008-VX7VM6DIMG3DAOJK7JZ6/cover.png',
    sections: [
      {
        title: 'Can we replace the need to try on products physically?',
        body: 'Virtual try-on technology promises to bridge the gap between digital and physical beauty retail. This project explored whether VTO could genuinely compete with in-store experiences — and what that product vision would look like.',
      },
      {
        label: 'North Star Design Sprint',
        title: 'North Star Design Sprint',
        body: 'A North Star helps teams to clearly define goals, validate assumptions, and decide on a product roadmap before starting development or committing to a set of features. It seeks to address strategic issues using interdisciplinary, rapid prototyping, and user testing.\n\nI facilitated a remote design sprint because — COVID. It was great. I would say even more efficient than many design sprints I\'ve been a part of.\n\n**Process:** Created Miro Board guide · Independent work areas for participants · 2-day storyboards · 2 days documentation · Presented to NARS internal branding team.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1590093547011-B4HM47EEU5YDSOK9K8P2/Screen+Shot+2020-05-21+at+3.38.05+PM.png',
      },
      {
        label: 'The Question & Goal',
        title: 'Key questions & goals',
        body: '**THE QUESTION:**\nCan we really replace the need to try on products physically before buying and compete with larger box stores?\n\n**THE GOAL:**\nIn two years\' time we will have brought new users to the world of beauty using VTO as a tool for personalization, social connection, interaction, and education.',
      },
      {
        label: 'Process',
        title: 'How Might We\'s, Storyboards & The Sprint',
        body: 'The sprint process moved through rapid ideation, storyboarding, and prototype development — converging on a vision for VTO as a personalization, social, and education platform rather than a simple product-selection tool.\n\nRead the full NARS Northstar story →',
        features: [
          {
            title: 'How Might We\'s',
            body: 'Generated opportunity statements across personalization, education, social connection, and in-store parity — framing the design space before any solutions were considered.',
          },
          {
            title: 'Storyboards',
            body: 'Two days of independent storyboarding produced multiple competing visions for the VTO experience, each grounded in a distinct user motivation.',
          },
          {
            title: 'The Sprint',
            body: 'Converged on the strongest concepts through dot voting and structured critique. Output: a testable prototype and a north star product vision presented to the NARS internal branding team.',
          },
          {
            title: 'Prototype of Northstar',
            body: 'Interactive prototype built to test the north star concept with real users — validating whether VTO could deliver the personalization and social experience the brand wanted.',
          },
        ],
      },
    ],
  },

  // ─── Ingest ──────────────────────────────────────────────────────────────────
  {
    slug: 'ingest',
    title: 'Ingest',
    subtitle: 'Getting data into the product',
    tags: ['SaaS', 'Enterprise', 'Workflows', 'Legal Tech'],
    year: '2018 – 2020',
    role: 'Senior Product Designer',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1567646340649-RORBBX2Y80EEKEU3K6GC/Ingest%2Bhero.jpg?format=1000w',
    sections: [
      {
        title: 'Getting data into the product',
        body: 'DISCO handles uploads and collections of databases through a mail service. A company wanting to import data into DISCO would manually send hardware through FedEx to our Data-ops team — a process that was timely, costly, and completely opaque to the customer.\n\nProviding a platform where users can upload and remediate their own data allows users to load data directly into their database without delays of sending data via hard drive or FTP.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1599769589099-319J0AITX46T6RK1OOIF/Screen%2BShot%2B2020-09-10%2Bat%2B3.25.01%2BPM.jpg',
      },
      {
        label: 'Problem',
        title: 'The Problem',
        body: 'The existing ingest process was entirely manual — hardware mailed via FedEx, a support team running a remediation runbook, and customers left completely in the dark.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1592242330945-NKTR8O4179774S2OF56Z/Screen+Shot+2020-06-15+at+11.38.05+AM.png',
        features: [
          { title: 'Getting data ingested without going through data ops (no FedEx)' },
          { title: 'No visibility into status once data was shipped' },
          { title: 'Ingest report was an Excel sheet — no in-product feedback' },
          { title: 'Inability to edit ingested documents with errors yourself' },
          { title: 'Overlay requests (replacing/updating values) required a support ticket' },
        ],
      },
      {
        label: 'Discovery',
        title: 'Discovery',
        body: 'No other e-discovery tool in the market allows clients to upload data directly into their system through a cloud-based system. We had many clients request this capability. Due to the high volume of requests, we were given the green light to create a tool called the "High Speed Uploader."\n\nAfter launching we received lots of admiration and excitement to push the technology even further. We did **discovery research** with CS DISCO Data-ops team and several internal and external customers. During **journey mapping** sessions and client outreach, participants shared their current processes — and it became clear that being able to self-remediate files on the client side was a huge priority. Support from executives was so strong that self-remediation became a must-have on the product roadmap.',
      },
      {
        label: 'Research',
        title: 'Becoming an expert on load files',
        body: 'I had many sessions reviewing and transcribing a manual process created by Data Ops. A lot of my preliminary research involved bringing to light current processes, transcribing, and creating documentation. This technical grounding was essential — it\'s impossible to design for a workflow you don\'t fully understand.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1599759803258-YKPL7SD2WUUAZ5E6AJ7M/LoadFileStructure.png',
      },
      {
        label: 'Research',
        title: 'User journeys — current vs. desired',
        body: 'Thoroughly documented current user flow vs. desired user flow to make the gap between pain and solution concrete for the team.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1592254473053-9QKY8KBV673HPZW2V3CJ/Frame+1.png',
      },
      {
        label: 'Design Process',
        title: 'Design & User Testing',
        body: 'With official backing and specific needs raised from sessions with clients and internal customers, we laid out a roadmap to tackle the basic native ingest.\n\nWe started with innumerable **white-boarding sessions and hand sketches**, uncovering technical aspects of the underlying platform that would add complexities and unexpected design constraints. I built out **user flows** to account for the intended interactions and decision points, working with our PM and engineering leads to ensure we didn\'t miss potential issues.\n\nOur early **wireframes** and concepts were frequently vetted with our engineering partners. When our UI became more fully formed, we worked with our **Design Systems** team to ensure we were using correct patterns — and the project led to the creation and codification of several new components for all product development teams.\n\nI created a prototype through InVision to run **usability tests** with our clients and client services team, returning to provide insights on potential points of confusion and complexity.',
      },
      {
        label: 'Research',
        title: 'Research goals & synthesis',
        body: 'Conducted remote and onsite user interviews and gathered valuable feedback to enhance usability. Documented findings and patterns across multiple studies, and made recommendations based on synthesis.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1599770522225-VUDY0C54ADTFKHRQGC1U/Goals.png',
      },
      {
        label: 'Results',
        title: 'Findings, fixes & results',
        body: 'Final study findings compiled, prototype updated in InVision, and design specifications delivered to engineering. The team delivered an MVP to customers a few months later.',
        steps: [
          {
            title: 'Fixes',
            body: 'Design refinements based on usability findings — addressing points of confusion surfaced during testing with clients and the client services team.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1599771045811-HFFWB7FQE1AEPTASBG2C/Fixes.png',
          },
          {
            title: 'Results',
            body: 'Shipped results — the self-service ingest experience in production. Extremely positive feedback from clients, with strong demand to push the full self-remediation version forward.',
            image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1599768167800-TK4PFND9E2LK1EO9ME89/Results-web.png',
          },
        ],
      },
      {
        label: 'Client Testimonial',
        title: '"DISCO\'s review platform is amazing."',
        body: '"DISCO\'s review platform is amazing. DISCO AI, its ECA capabilities and their high-speed uploader were crucial in reviewing the mind-blowing 14 TB of data for our client quickly and efficiently."\n\n— **Simon Meiklejohn**, Associate Director, Legal Solutions, Asia Pacific, Exigent',
      },
      {
        label: 'North Star',
        title: 'North Star Design Sprint',
        body: 'After ingest launched we kicked off a North Star design sprint to align and understand how the future of getting information in and out of DISCO might look like.\n\nNorth star design sprint for all things self-service in our application — gathering of the minds to ideate product offerings for self-service uploading, reporting, billing, and matter creation.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1592242064570-A4V1NCP7T89DHCN6VD4J/Screen+Shot+2020-06-15+at+12.26.35+PM.png',
      },
    ],
  },

  // ─── Documentation ───────────────────────────────────────────────────────────
  {
    slug: 'documentation',
    title: 'Documentation',
    subtitle: 'Specifying the ingest UX — current state to future state',
    tags: ['DevTools', 'IA', 'Documentation', 'Spec Work'],
    year: '2019',
    role: 'Senior Product Designer',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1568840205582-8NO8R1EAD9LXMFJFT3II/1.png?format=1000w',
    sections: [
      {
        label: 'Process',
        title: 'Documenting current state and future state',
        body: 'Documenting the current manual process using a system diagram. Creating an optimal proposal for the administrator and the user.\n\nThree system diagram versions were developed and reviewed with stakeholders:\n• LF current flow — documenting the as-is manual process\n• LF future flow v2 — first proposed optimized path\n• LF future flow v3 — refined final proposal after stakeholder alignment',
      },
      {
        label: 'Alignment',
        title: 'Detailed card states',
        body: 'After getting approval for the optimal user journey, I documented each card state in detail. The system diagram answered critical questions that could not be resolved through wireframes alone:\n\n• What does the admin see on the back end?\n• What does the user see and how do we communicate the remediation process of their files?',
      },
      {
        label: 'UI Experience',
        title: 'UI Experience',
        body: 'Three distinct ingest scenarios were designed and documented, each with its own edge cases and state management requirements.',
        features: [
          {
            title: 'Native Ingest with Remediation',
            body: 'The full self-service flow — upload, automatic error detection, and in-product remediation without support intervention. Three UI screens covering the upload, error, and remediation states.',
          },
          {
            title: 'Native Ingest without Remediation',
            body: 'Simplified upload path for clean data sets — streamlined to remove unnecessary remediation steps and surface success states clearly.',
          },
          {
            title: 'Load File without Remediation',
            body: 'The load file upload path for structured data — handling the specific metadata and column-mapping requirements of load file formats.',
          },
        ],
      },
    ],
  },

  // ─── Cross-Matter AI Models ──────────────────────────────────────────────────
  {
    slug: 'crossmatter-ai-models',
    title: 'Cross-Matter AI Models',
    subtitle: 'AI-assisted discovery + enterprise workflows',
    tags: ['AI', 'Enterprise', 'SaaS', 'Legal Tech'],
    year: '2019',
    role: 'Senior Product Designer',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1567646420292-PWC587Y3ZCU4CD914ENG/modelsharing_hero.png?format=1000w',
    sections: [
      {
        title: 'Cross-Matter AI Models',
        body: 'AI models leverage existing work product across DISCO\'s organization to accelerate and enrich tagging predictions. Users can find evidence faster by leveraging tagging decisions from across their organization. "Boosting" tags with appropriate cross-matter AI models enables better predictions instantly.',
      },
      {
        label: 'Context',
        title: 'What is a Tag?',
        body: 'Tagging documents allows filtering and narrowing documents for production. DISCO AI enables continuous learning on tags for faster document discovery — called "tag predictions."\n\nLike Netflix recommendations, DISCO AI identifies similar document characteristics and surfaces related documents. Tag predictions improve with each tagging decision made — which creates an enormous untapped opportunity when those predictions stay locked inside a single matter.',
      },
      {
        label: 'Problem',
        title: 'The Problem',
        body: 'DISCO tags empower search and review within single matters. During review, reviewers tag documents to aid case decisions and relevancy. However, past findings, knowledge, and discovery work cannot transfer across the organization to new or ongoing matters.\n\nThis represents a huge loss of knowledge transfer — customers cannot apply learnings from past matters to new matters, meaning the AI has to start from zero every time. Applying previous learnings would dramatically improve AI predictions and accuracy.',
      },
      {
        label: 'Opportunity',
        title: 'Identifying Opportunities',
        body: 'Currently, learnings from past matters cannot be applied to new matters. This meant:\n\n• Users could move through reviews faster with past learnings applied\n• Shared tag models could jumpstart reviews\n• Higher accuracy would be placed on classifiers, junk, and privileged documents\n• AI tag predictions improve with each decision — but all that value was being discarded at matter close',
      },
      {
        label: 'Challenge',
        title: 'The Challenge',
        body: 'When AI tags are applied in the product, the system learns from those tags. The need exists to re-use learned tags and apply them to future matters — sharing learning across multiple organizations.\n\nThe legal community expresses hesitation about metadata sharing without proper permissions. The challenge is making companies feel empowered to use this workflow-improving feature while ensuring they don\'t feel they\'re leaking private information.\n\nThe solution: expose this notion to organizational admins rather than individual users — giving control to the right person, not everyone.',
      },
      {
        label: 'Process',
        title: 'Workshop, Whiteboard & Discovery',
        body: 'Started with a workshop aligning design, development, and engineering teams. Defined users, created and prioritized user stories, and sketched initial storyboards across multiple flows.\n\nMultiple iterations revealed that "making our customer aware of what we were doing ultimately made people uncomfortable." The pivot: expose this to organizational admins rather than individual reviewers — shifting the permission model to protect privacy while enabling the capability.\n\nWorked with the AI team to communicate how organizational admins could choose which tags to make available for organization subscription. Determined that document data wouldn\'t be shared cross-matters — only predictive data would link to shared tags.',
      },
      {
        label: 'Research',
        title: 'Research & Validation',
        body: 'Collected terabytes of data for AI tags that would be wasted at the end of each matter. Interviewed customers about their needs and found strong demand for cross-matter reuse.\n\n• Customers wanted to repurpose data on other matters\n• Tested sample AI insights that actually informed new matters\n• Built an interactive prototype presented during a Product Advisory Council meeting in Chicago\n• Various users interacted with the prototype and provided feedback, which was incorporated into the design',
      },
      {
        label: 'Customer Feedback',
        title: 'Product Advisory Council',
        body: 'The PAC includes senior leadership, top engineers, DISCO legal practitioners, and clients (law firm, corporate, service provider) to ensure nothing is lost in translation.\n\nSpecifically designed for hands-on interaction with product innovation and engineering solutions. Groups of more than 60 clients and partners have gathered to collaboratively drive DISCO innovation, spending hours with the team because results yield better-fitting tools.',
      },
      {
        label: 'Delivery',
        title: 'Delivery & Impact',
        body: '"Now, legal teams can apply the power of AI fueled by millions of documents across hundreds of matters before a single document in a new case has been tagged."\n\n— **Kieth Zeollner**\n\nUpdated the final prototype in Principle and delivered design specifications to the engineering team. The team delivered to customers months later.',
        features: [
          {
            title: 'Press Release',
            body: 'DISCO Updates Analytics Suite — see the press release for the public announcement of cross-matter AI model sharing.',
          },
          {
            title: 'Next Steps',
            body: 'Watch our full story sessions — kick off North Star Design Sprint for AI analytics.',
          },
        ],
      },
    ],
  },

  // ─── Topic Clustering ────────────────────────────────────────────────────────
  {
    slug: 'topic-clustering',
    title: 'Topic Clustering',
    subtitle: 'AI-assisted visual search + pattern discovery',
    tags: ['AI', 'Enterprise', 'Discovery', 'Legal Tech'],
    year: '2019',
    role: 'Senior Product Designer',
    heroImage: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1567646464408-NF0WV1O3EEKP0IUJ3FOS/topic_clustering_hero.png?format=1000w',
    sections: [
      {
        title: 'Topic Clustering',
        body: 'Topic clustering is a powerful visual search tool that allows the user to quickly identify patterns within a data set. Rather than searching for what you know, it surfaces what you don\'t — grouping documents by conceptual similarity so reviewers can navigate by theme rather than keyword.',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1567640512325-15K2Z4Y0P7FWXSAZ5DLY/Search-Home.png',
      },
      {
        label: 'Process',
        title: 'User Journey — Part 1',
        body: 'Created stories and flows to represent different use cases, and mapped out the customer journey. The initial journey mapping covered the full spectrum of reviewer workflows — from first exposure to topic clusters through investigation and document selection.',
      },
      {
        label: 'Research',
        title: 'Research',
        body: 'Moderated interviews with 6 different law firms, with 2–4 participants per session.\n\n• Conducted user interviews across 6 firms\n• Mapped current search and review workflows\n• Identified where visual pattern discovery would create the most leverage\n• Uncovered the huge impact topic clustering would make for the product',
        image: 'https://images.squarespace-cdn.com/content/v1/5914b0b5ebbd1a1ee79dbf3e/1567639695503-DBDTXKT4DDJGX8DT8OI9/Screen+Shot+2019-09-04+at+6.27.50+PM.png',
      },
      {
        label: 'Research',
        title: 'Highlight Reel',
        body: 'Created a highlight reel to share our findings with the team — distilling hours of interview footage into the key moments that would shape the design direction. Highlight cuts were presented to stakeholders to build alignment around the opportunity.',
      },
      {
        label: 'Ideation',
        title: 'North Star Design Sprint',
        body: 'After the customer interviews we realized the huge impact topic clustering would make for our product and prioritized a North Star design sprint for this feature. We then voted on which ideas were the most amazeballs.\n\nThe sprint aligned design, product, and engineering on a shared vision — and produced the concept that would become the shipped feature.',
      },
      {
        label: 'Process',
        title: 'User Journey — Part 2',
        body: 'Revised the user journey after the design sprint reflections — incorporating what we learned about how reviewers actually want to navigate clusters, drill in, and act on patterns they discover.',
      },
      {
        label: 'Prototype',
        title: 'Prototype & Advisory Council',
        body: 'Put those ideas into motion and presented during the Product Advisory Council conference. Feedback is currently being integrated into future MVP concepts.\n\nI\'m working with the AI lab on what ad hoc, user-driven reclustering would look like — enabling reviewers to reshape the cluster map on the fly based on their evolving understanding of the case. More to come!',
      },
    ],
  },
]
