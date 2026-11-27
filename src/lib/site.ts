export const links = {
  github: 'https://github.com/deepak786',
  linkedin: 'https://www.linkedin.com/in/deepakdroid/',
  medium: 'https://medium.com/@deepakdroid',
  stackoverflow: 'https://stackoverflow.com/users/3452078/deepak-goyal',
  youtube: 'https://www.youtube.com/@deepakdroid',
  playground: 'https://play.deepakdroid.xyz',
  sponsors: 'https://github.com/sponsors/deepak786',
  buyMeACoffee: 'https://buymeacoffee.com/deepakdroid',
  paypal: 'https://paypal.me/deepakdroid',
  agendaBoa: 'https://www.agendaboa.com',
  intercomPub: 'https://pub.dev/packages/intercom_flutter',
  intercomGithub: 'https://github.com/deepak786/intercom_flutter',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Playground', href: '#playground' },
  { label: 'Services', href: '#services' },
  { label: 'Writing', href: '#writing' },
  { label: 'Support', href: '#support' },
];

export const skills = [
  {
    group: 'Mobile',
    items: ['Flutter', 'Dart', 'Android', 'Kotlin', 'Java', 'iOS', 'Swift'],
  },
  {
    group: 'Backend & Cloud',
    items: ['Firebase', 'Cloud Firestore', 'Cloud Functions', 'FCM', 'Python REST APIs'],
  },
  {
    group: 'Engineering',
    items: ['System design', 'Software architecture', 'CI/CD', 'Technical leadership', 'AI-assisted development'],
  },
];

export const playgroundDemos = [
  {
    id: 'rag-fundamentals',
    title: 'RAG Fundamentals',
    description: 'How ChatGPT answers questions about your PDF, from chunking to the final answer.',
    tag: 'Series',
    concepts: ['RAG', 'Chunking', 'Retrieval'],
  },
  {
    id: 'api-rate-limiter',
    title: 'How APIs Prevent Abuse',
    description: 'Rate limiting in action: how an API decides which requests to serve and which to reject.',
    tag: 'Demo',
    concepts: ['Rate limiting', 'Token bucket'],
  },
  {
    id: 'spatial-indexing-playground',
    title: 'Spatial Indexing Playground',
    description: 'Find nearby places without searching the whole city: grids, quadtrees and hexagons.',
    tag: 'Interactive exhibit',
    concepts: ['Grid', 'Quadtree', 'H3'],
  },
  {
    id: 'whatsapp-delivery',
    title: 'How WhatsApp Delivers Messages',
    description: 'Offline message queues and delivery ticks, one message at a time.',
    tag: 'Demo',
    concepts: ['Queue', 'FIFO'],
  },
  {
    id: 'linkedin-connections',
    title: 'How LinkedIn Finds Your Connection Level',
    description: 'Breadth-first search ripples out through your network level by level.',
    tag: 'Demo',
    concepts: ['Graph', 'BFS'],
  },
  {
    id: 'lru-cache',
    title: 'Why Apps Load Faster: The LRU Cache',
    description: 'Cache hits, misses and evicting the least recently used item.',
    tag: 'Demo',
    concepts: ['Cache', 'LRU'],
  },
];

export const services = [
  {
    title: 'Software consulting',
    description:
      'Turn an idea or a stuck project into a clear plan: tech stack choices, system design, and a roadmap your team can follow.',
  },
  {
    title: 'Architecture & code review',
    description:
      'A senior second opinion on your codebase: architecture, performance, security basics and maintainability, with practical fixes.',
  },
  {
    title: 'App development',
    description:
      'Production-ready apps for Android, iOS and the web, built with Flutter and a clean architecture that is easy to grow.',
  },
  {
    title: 'Firebase & backend',
    description:
      'Firestore data models, Cloud Functions, authentication, push notifications and REST APIs that keep your product fast and reliable.',
  },
  {
    title: 'Technical leadership',
    description:
      'Part-time tech lead support: setting up processes, CI/CD and code standards, and mentoring developers as your team grows.',
  },
  {
    title: 'Intercom integration',
    description:
      'Messenger, help center, push notifications and user identity set up end to end, by the maintainer of intercom_flutter.',
  },
];
