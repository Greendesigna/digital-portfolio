export const projects = [
  {
    title: 'Design systems & token systems',
    eyebrow: 'Systems design · Enterprise',
    description:
      'From reusable component foundations to an enterprise design system spanning Figma, Storybook and front-end implementation.',
    image: 'design-systems.jpg',
    imageAlt: 'A detailed design system component and token overview',
    tags: ['Design systems', 'Design tokens', 'Storybook', 'Figma libraries'],
    impact:
      'Contributed to a token architecture refactor that reduced overall token volume by 15.6%, reduced component-token volume by 24.6%, and achieved 100% semantic token routing.',
    links: [
      {
        label: 'Read Design Systems Case Study',
        href: 'https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=61-3&viewport=-2964%2C-457%2C0.32&t=mVVLanUBnIPhM9fv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=61%3A3&page-id=0%3A1',
      },
      {
        label: 'View Token Systems Case Study',
        href: 'https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=75-5&viewport=-2964%2C-457%2C0.32&t=mVVLanUBnIPhM9fv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=75%3A5&page-id=0%3A1',
      },
      {
        label: 'View Design System (Storybook)',
        href: 'https://greendesigna.github.io/example-design-system/storybook/?path=/docs/introduction--docs',
      },
    ],
  },
  {
    title: 'Rebuilding social care platforms',
    eyebrow: 'Service design · Information architecture',
    description:
      'A multi-platform transformation programme that made it easier for people to find support across a complex network of charities and services.',
    image: 'information-architecture.jpg',
    imageAlt: 'Information architecture diagrams and structured page layouts',
    tags: ['Service design', 'Information architecture', 'UX research', 'Accessibility'],
    impact:
      'Delivered a 500% increase in average monthly member sign-ups while simplifying navigation across the ecosystem.',
    links: [
      {
        label: 'Read Information Architecture Case Study',
        href: 'https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=9-3&viewport=-306%2C511%2C0.11&t=K4Z51guWVWhIUD65-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A3&show-proto-sidebar=1&page-id=0%3A1',
      },
      {
        label: 'Read Website Redesign Case Study',
        href: 'https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=9-335&viewport=-611%2C538%2C0.15&t=grbu5YBlrb3tnI7i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A335&show-proto-sidebar=1&page-id=0%3A1',
      },
      {
        label: 'Read Usability Audit Case Study',
        href: 'https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=9-664&viewport=-611%2C538%2C0.15&t=grbu5YBlrb3tnI7i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A664&page-id=0%3A1',
      },
    ],
  },
  {
    title: 'Design sprints & product discovery',
    eyebrow: 'Facilitation · Rapid validation',
    description:
      'A structured sprint approach that helped teams move from assumptions to validated decisions in days rather than months.',
    image: 'design-sprints.jpg',
    imageAlt: 'A collaborative design sprint workshop in progress',
    tags: ['Design sprints', 'Facilitation', 'Product discovery', 'Rapid validation'],
    impact:
      'Turned lengthy discovery discussions into actionable outcomes through a repeatable, evidence-driven process.',
    links: [
      {
        label: 'Read Design Sprint Case Study',
        href: 'https://www.figma.com/proto/cA90LYTQEuYXLQsi3LIOjy/Portfolio-pages?node-id=38-3636&viewport=-379%2C202%2C0.1&t=rXA5ODvQpDSqtBFt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=38%3A3636&page-id=0%3A1',
      },
    ],
  },
  {
    title: 'Interaction design & prototyping',
    eyebrow: 'Mobile UX · Product concepts',
    description:
      'Two mobile concepts exploring how interaction design, scalable systems and prototyping create intuitive end-to-end journeys.',
    image: 'nft-app.jpg',
    imageAlt: 'Mobile application screens showing a comparison experience',
    tags: ['Mobile UX', 'Interaction design', 'Prototyping', 'User flows'],
    impact:
      'Applied a shared design-system approach across multiple products while delivering fully interactive prototype experiences.',
    links: [
      {
        label: 'View Live Demo for NFT Comparison App',
        href: 'https://www.figma.com/proto/b8iYxtzDjfokTxXx5lzAqA/GDA.-Project---NFT-Comparison-Application?node-id=7615-995&viewport=355%2C132%2C0.1&t=JirRkAJLpy48soUx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7615%3A995&show-proto-sidebar=1&page-id=1%3A166',
      },
      {
        label: 'View Prototype for Healthcare Delivery App',
        href: 'https://www.figma.com/proto/zmSQ4QbVcGEKR7I6U3MW2o/GDA---Health-Care-Delivery-Application?node-id=4410-3&t=dEF2i4H9OtiS1Uzr-1',
      },
    ],
  },
] as const

export const capabilities = [
  {
    number: '01',
    title: 'Product discovery & strategy',
    description:
      'Journey mapping, information architecture and product strategy that align organisational goals with user needs.',
  },
  {
    number: '02',
    title: 'User research & testing',
    description:
      'Research, workshops, stakeholder interviews and usability testing translated into clear product decisions.',
  },
  {
    number: '03',
    title: 'Design systems & tokens',
    description:
      'Scalable token-based systems and component libraries across Figma, Storybook and front-end implementation.',
  },
  {
    number: '04',
    title: 'UX/UI & interaction design',
    description:
      'End-to-end interface design with a strong focus on accessibility, WCAG compliance and inclusive experiences.',
  },
  {
    number: '05',
    title: 'Prototyping & validation',
    description:
      'Low and high-fidelity prototypes that make ideas tangible and testable early in the product lifecycle.',
  },
  {
    number: '06',
    title: 'Agile delivery & collaboration',
    description:
      'Hands-on partnership with product, engineering and research teams through complete delivery cycles.',
  },
] as const

export const tools = [
  'Figma',
  'Storybook',
  'Token Studio',
  'VS Code',
  'Azure DevOps',
  'GitHub',
  'Claude',
  'Adobe Creative Cloud',
] as const
