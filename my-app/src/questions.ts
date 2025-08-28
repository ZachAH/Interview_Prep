// questions.ts
export type InterviewItem = {
  question: string;
  answer: string;
  section: string;
}

export const interviewData: InterviewItem[] = [
  // Section 1: JavaScript Fundamentals (20 Questions)
  {
    section: 'JavaScript Fundamentals',
    question: 'Difference between var, let, and const.',
    answer: 'var: function-scoped, hoisted, can re-declare. let: block-scoped, mutable. const: block-scoped, immutable binding.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Explain closures.',
    answer: 'Inner function remembering variables from outer function scope even after outer returns.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Difference between == and ===.',
    answer: '== allows type coercion. === is strict equality (type + value).'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'What is hoisting?',
    answer: 'Variable and function declarations are moved to top of scope during compilation.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'What is event bubbling?',
    answer: 'Events propagate from child → parent elements. Use stopPropagation() to stop.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'What are Promises?',
    answer: 'Represent future value: pending → resolved/rejected. Used for async operations.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Async/Await vs Promises.',
    answer: 'Async/await: syntactic sugar for promises, more readable.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Difference between null and undefined.',
    answer: 'null: intentionally empty. undefined: variable declared but not assigned.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Difference between for…in and for…of.',
    answer: 'for…in: iterates keys. for…of: iterates values.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'What is this in JS?',
    answer: 'Refers to the context of execution (global, object, class, function).'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Call, apply, bind.',
    answer: 'call(): invoke with args. apply(): invoke with args array. bind(): returns new function with bound this.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Debounce vs Throttle.',
    answer: 'Debounce: wait for inactivity. Throttle: limit execution rate.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Event delegation.',
    answer: 'Attach a single listener to parent; use event.target to handle children events.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Currying.',
    answer: 'Transforming a function with multiple arguments into a chain of functions each with one argument.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Memoization in JS.',
    answer: 'Caching results of expensive function calls to improve performance.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Deep vs Shallow Copy.',
    answer: 'Shallow: copies only first-level properties. Deep: copies nested objects/arrays fully.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Difference between synchronous and asynchronous code.',
    answer: 'Sync: blocks execution. Async: doesn’t block (e.g., fetch, setTimeout, promises).'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Microtasks vs Macrotasks.',
    answer: 'Microtasks: run immediately after current task (Promise.then). Macrotasks: run in the event loop queue (e.g., setTimeout).'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'What is the call stack?',
    answer: 'LIFO structure tracking function calls.'
  },
  {
    section: 'JavaScript Fundamentals',
    question: 'Functional programming concepts in JS.',
    answer: 'Pure functions, immutability, higher-order functions, map/reduce/filter.'
  },

  // Section 2: React Basics (20 Questions)
  {
    section: 'React Basics',
    question: 'What is React?',
    answer: 'JS library for building UI with reusable components.'
  },
  {
    section: 'React Basics',
    question: 'What are components?',
    answer: 'Reusable building blocks (functional or class-based).'
  },
  {
    section: 'React Basics',
    question: 'Props vs State.',
    answer: 'Props: read-only inputs. State: internal, mutable data.'
  },
  {
    section: 'React Basics',
    question: 'What are hooks?',
    answer: 'Functions (useState, useEffect, useContext) to manage state and lifecycle in functional components.'
  },
  {
    section: 'React Basics',
    question: 'Explain useState.',
    answer: 'Hook to manage state in functional components.'
  },
  {
    section: 'React Basics',
    question: 'Explain useEffect.',
    answer: 'Hook to perform side effects after render. Accepts dependency array.'
  },
  {
    section: 'React Basics',
    question: 'Controlled vs Uncontrolled components.',
    answer: 'Controlled: state managed by React. Uncontrolled: state managed by DOM.'
  },
  {
    section: 'React Basics',
    question: 'What is JSX?',
    answer: 'HTML-like syntax compiling to React elements.'
  },
  {
    section: 'React Basics',
    question: 'Keys in React lists.',
    answer: 'Unique identifiers to help React optimize re-renders.'
  },
  {
    section: 'React Basics',
    question: 'Virtual DOM.',
    answer: 'Lightweight copy of DOM, used to diff changes and update efficiently.'
  },
  {
    section: 'React Basics',
    question: 'Lifecycle methods (class components).',
    answer: 'componentDidMount, componentDidUpdate, componentWillUnmount.'
  },
  {
    section: 'React Basics',
    question: 'Functional component lifecycle equivalents.',
    answer: 'useEffect can simulate mount/update/unmount.'
  },
  {
    section: 'React Basics',
    question: 'What is Context API?',
    answer: 'Provides global state without prop drilling.'
  },
  {
    section: 'React Basics',
    question: 'React Router basics.',
    answer: 'BrowserRouter, Routes, Route, Link.'
  },
  {
    section: 'React Basics',
    question: 'Difference between server-side rendering and client-side rendering.',
    answer: 'SSR: rendered on server → HTML sent. CSR: rendered in browser via JS.'
  },
  {
    section: 'React Basics',
    question: 'Hydration in React.',
    answer: 'Attaching event listeners to server-rendered HTML.'
  },
  {
    section: 'React Basics',
    question: 'React portals.',
    answer: 'Render a component outside parent DOM hierarchy.'
  },
  {
    section: 'React Basics',
    question: 'Error boundaries.',
    answer: 'Components catching JS errors in child components to prevent crash.'
  },
  {
    section: 'React Basics',
    question: 'Lazy loading components.',
    answer: 'Using React.lazy and Suspense to defer rendering until needed.'
  },
  {
    section: 'React Basics',
    question: 'What is reconciliation in React?',
    answer: 'React compares old and new virtual DOM and updates only changed parts.'
  },

  // Section 3: Advanced React & State Management (20 Questions)
  {
    section: 'Advanced React & State Management',
    question: 'What is Redux?',
    answer: 'State management library with a single store and predictable actions/reducers.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'When to use Context API vs Redux?',
    answer: 'Context: small/global state. Redux: complex apps, multiple reducers, async flows.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Explain useReducer hook.',
    answer: 'Alternative to useState for complex state logic.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'What is middleware in Redux?',
    answer: 'Functions intercepting actions before reducers (e.g., redux-thunk).'
  },
  {
    section: 'Advanced React & State Management',
    question: 'What is useCallback vs useMemo?',
    answer: 'useCallback: memoizes function references. useMemo: memoizes computed values.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'React.memo.',
    answer: 'Higher-order component to prevent unnecessary re-renders.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Concurrent mode in React.',
    answer: 'Experimental feature enabling interruptible rendering for smoother UI.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Suspense & data fetching.',
    answer: 'Handles loading states for components using lazy loading or data fetching libraries.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Optimizing React app performance.',
    answer: 'Memoization, code-splitting, lazy loading, avoiding unnecessary state updates.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'What is prop drilling and how to avoid it?',
    answer: 'Passing props through multiple layers. Use Context API or Redux to avoid.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Error boundaries vs try/catch in React.',
    answer: 'Error boundaries catch render errors. try/catch handles synchronous code logic.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'State lifting in React.',
    answer: 'Moving state up to common ancestor for shared state.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Derived state anti-pattern.',
    answer: 'Avoid storing state derived from props; compute on render instead.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Forwarding refs.',
    answer: 'Passing refs through components using React.forwardRef.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Portals vs Modals.',
    answer: 'Portals render outside parent hierarchy; modals often use portals for overlay.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'useLayoutEffect vs useEffect.',
    answer: 'useLayoutEffect fires before paint; useEffect after paint.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'When would you choose a class component today?',
    answer: 'Rare; mostly legacy code. Hooks cover almost all use cases.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'Why is state immutable?',
    answer: 'Enables predictable re-renders and easier debugging.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'What is render props?',
    answer: 'Passing a function as a prop to determine what to render.'
  },
  {
    section: 'Advanced React & State Management',
    question: 'What are Higher Order Components (HOC)?',
    answer: 'Functions returning enhanced components.'
  },

  // Section 4: CSS & Styling (10 Questions)
  {
    section: 'CSS & Styling',
    question: 'Flexbox vs Grid.',
    answer: 'Flexbox: 1D layouts. Grid: 2D layouts.'
  },
  {
    section: 'CSS & Styling',
    question: 'Relative vs absolute units (px, em, rem, %).',
    answer: 'Relative: scales with context. Absolute: fixed.'
  },
  {
    section: 'CSS & Styling',
    question: 'CSS pseudo-classes vs pseudo-elements.',
    answer: 'Pseudo-class: states (:hover). Pseudo-element: extra elements (::before).'
  },
  {
    section: 'CSS & Styling',
    question: 'Responsive design techniques.',
    answer: 'Media queries, fluid grids, flexible images, mobile-first.'
  },
  {
    section: 'CSS & Styling',
    question: 'z-index stacking context.',
    answer: 'Determines which element appears on top; only works for positioned elements.'
  },
  {
    section: 'CSS & Styling',
    question: 'CSS variables.',
    answer: '--var syntax for reusable custom properties.'
  },
  {
    section: 'CSS & Styling',
    question: 'CSS specificity and inheritance.',
    answer: 'Specificity: which rule wins. Inheritance: child element inherits some parent styles.'
  },
  {
    section: 'CSS & Styling',
    question: 'Critical CSS.',
    answer: 'Inline styles for above-the-fold content to speed up first render.'
  },
  {
    section: 'CSS & Styling',
    question: 'Difference between inline, block, inline-block elements.',
    answer: 'Inline: no line break. Block: full-width. Inline-block: inline but respects width/height.'
  },
  {
    section: 'CSS & Styling',
    question: 'Sticky vs fixed positioning.',
    answer: 'Sticky: relative until scroll threshold, then fixed. Fixed: always relative to viewport.'
  },

  // Section 5: Performance & Optimization (10 Questions)
  {
    section: 'Performance & Optimization',
    question: 'Tree shaking.',
    answer: 'Remove unused code from bundles during build.'
  },
  {
    section: 'Performance & Optimization',
    question: 'Lazy loading components/images.',
    answer: 'Defer loading until needed.'
  },
  {
    section: 'Performance & Optimization',
    question: 'Code splitting.',
    answer: 'Break bundles into smaller pieces, load on demand.'
  },
  {
    section: 'Performance & Optimization',
    question: 'Web vitals: LCP, FID, CLS.',
    answer: 'Largest Contentful Paint, First Input Delay, Cumulative Layout Shift.'
  },
  {
    section: 'Performance & Optimization',
    question: 'Debouncing vs throttling in event handling.',
    answer: 'Debounce waits for inactivity before executing. Throttle limits the execution rate over time.'
  },
  {
    section: 'Performance & Optimization',
    question: 'CDN usage for performance.',
    answer: 'Distributes static assets to servers closer to users.'
  },
  {
    section: 'Performance & Optimization',
    question: 'Memoization in React.',
    answer: 'Avoid re-rendering expensive components.'
  },
  {
    section: 'Performance & Optimization',
    question: 'Optimizing images for web.',
    answer: 'Compression, WebP/AVIF, responsive images (srcset).'
  },
  {
    section: 'Performance & Optimization',
    question: 'Avoiding unnecessary re-renders.',
    answer: 'Use memoization, key props, split components, avoid inline functions in JSX.'
  },
  {
    section: 'Performance & Optimization',
    question: 'Service workers & PWA caching.',
    answer: 'Enable offline support, caching static assets, background sync.'
  },

  // Section 6: Testing, Security & Scenario Questions (10 Questions)
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Unit vs integration vs e2e tests.',
    answer: 'Unit: isolated functions/components. Integration: multiple components/modules. E2E: full user flows.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Jest vs React Testing Library.',
    answer: 'Jest: test runner. RTL: test component behavior from user perspective.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Snapshot testing.',
    answer: 'Capture component render output for comparison in future tests.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Mocks and stubs in testing.',
    answer: 'Fake functions/data to isolate tested code.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Prevent XSS attacks in React.',
    answer: 'Avoid dangerouslySetInnerHTML, sanitize user input.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'CORS vs CSRF.',
    answer: 'CORS: cross-origin access policy. CSRF: attacker tricks user into sending requests.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'JWT vs session tokens.',
    answer: 'JWT: stateless, client stores token. Session: server tracks session state.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Scenario: prevent overselling in e-commerce app.',
    answer: 'Use database transactions or atomic updates.'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Scenario: optimizing React list with 1000+ items.',
    answer: 'Virtualization (react-window or react-virtualized).'
  },
  {
    section: 'Testing, Security & Scenario Questions',
    question: 'Scenario: making React form accessible.',
    answer: 'Use labels, ARIA attributes, proper keyboard navigation.'
  },

  // Section 7: Advanced/Scenario Questions (10 Questions)
  {
    section: 'Advanced/Scenario Questions',
    question: 'Explain lifting state up in a real app scenario.',
    answer: 'When multiple child components need to share the same state, move the state to their closest common ancestor.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'Difference between Suspense for lazy loading and Suspense for data fetching.',
    answer: 'Lazy loading: defers loading code chunks. Data fetching: handles loading states for asynchronous data fetching.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'Explain concurrent rendering and why it matters.',
    answer: 'Concurrent rendering allows React to interrupt and resume rendering work. It improves user experience by keeping the UI responsive during heavy computation.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'How to handle optimistic UI updates?',
    answer: 'Update the UI immediately after a user action, then send the request to the server. If the server response fails, roll back the UI change.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'Explain the trade-offs of Redux vs Context API in large apps.',
    answer: 'Context is simpler but can lead to performance issues with frequent updates. Redux is more complex but provides predictable state management and powerful debugging tools, making it better for large-scale, complex state.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'How would you measure performance bottlenecks in a React app?',
    answer: 'Using React DevTools Profiler, browser developer tools (Lighthouse, Performance tab), and a network tab to analyze network requests.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'How would you implement infinite scrolling efficiently?',
    answer: 'Fetch data in chunks, using a scroll event listener and a flag to prevent multiple fetches. Use a library like react-infinite-scroll-component or virtualization for performance.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'Scenario: multiple users updating same data simultaneously.',
    answer: 'Use backend locking, versioning, or optimistic concurrency control to prevent data conflicts.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'How would you implement a dark/light theme toggle in React?',
    answer: 'Use Context API to manage the theme state, CSS variables for styling, and localStorage to persist the user’s preference.'
  },
  {
    section: 'Advanced/Scenario Questions',
    question: 'Scenario: large image gallery in React with responsive layout.',
    answer: 'Use lazy loading for images, srcset for responsive images, CSS Grid or Flexbox for the layout, and virtualization if the list is very large.'
  },

  // Section: Claw and Decay Technical/Design Questions (15 Q&A)
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why did you choose React for your website?',
    answer: 'React’s component-based architecture allows me to reuse UI elements like product cards and modals. It also has a rich ecosystem (TailwindCSS, React Router, hooks) and Virtual DOM for efficient re-rendering, which keeps the site performant.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why did you use TailwindCSS instead of plain CSS or CSS-in-JS?',
    answer: 'Tailwind is utility-first, so I can style components quickly and consistently. It reduces custom CSS and, with purging unused classes, keeps the bundle small for faster load times.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why did you choose Context API over Redux?',
    answer: 'My global state needs were simple—theme toggle, cart items, and product filters—so Context API is lightweight and avoids Redux boilerplate. Redux would be overkill for this project.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why use React Router instead of server-side routing?',
    answer: 'React Router enables client-side navigation, giving smooth SPA transitions without full-page reloads. Nested routes also made structuring product catalog pages easier.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why did you implement lazy loading for components?',
    answer: 'Lazy loading ensures that heavy components like product galleries only load when needed, improving initial load performance.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why did you memoize some components or functions?',
    answer: 'Using React.memo and useCallback prevents unnecessary re-renders of components, especially for lists or heavy calculations, improving performance.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why did you choose to use semantic HTML and ARIA attributes?',
    answer: 'Semantic HTML improves accessibility and SEO. ARIA labels ensure screen readers interpret buttons, links, and product info correctly for visually impaired users.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why store product data as JSON files in Firebase Storage instead of querying an API each click?',
    answer: 'Fetching JSON files is much faster than hitting the API repeatedly. It reduces backend load, improves page speed, and works well with caching/CDN.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'How do you keep JSON files updated if inventory changes?',
    answer: 'Files are regenerated whenever inventory updates, ensuring the frontend always fetches accurate product info.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why not use a traditional database query for every request?',
    answer: 'Querying the database on every click can be slow and doesn’t scale well under traffic spikes. Static JSON files reduce latency and improve user experience.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'How do you handle large datasets in JSON?',
    answer: 'Split JSON by category or page, lazy-load data when needed, and leverage client-side caching.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why choose Firebase Storage over something like S3 or a database?',
    answer: 'Firebase Storage integrates easily with my frontend, provides fast global delivery with CDN, and has straightforward authentication rules for secure file access.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why optimize images in WebP/AVIF format?',
    answer: 'These formats are smaller than JPEG/PNG, reducing load time while maintaining quality, which improves page speed and user experience.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'Why implement caching for JSON or product data?',
    answer: 'Caching reduces repeated fetches, decreases server load, and provides faster responses for repeated user visits.'
  },
  {
    section: 'Claw and Decay Technical/Design Questions',
    question: 'How do you balance performance vs real-time accuracy in your design?',
    answer: 'I prioritize fast UI response by serving cached JSON, but regenerate files on inventory changes so data is still accurate. This is a trade-off between instant load and real-time updates.'
  },
  // CRUD (Create, Read, Update, Delete)
  {
    section: 'CRUD (Create, Read, Update, Delete)',
    question: 'Can you explain what CRUD operations are and why they’re important?',
    answer: 'CRUD stands for Create, Read, Update, and Delete — the four basic operations for persistent data storage. They provide a standard way to interact with databases or APIs. For example, in a web app, creating a new user, fetching user details, updating profile information, or deleting an account all map to CRUD operations. They’re important because almost every application involves structured data manipulation.'
  },
  {
    section: 'CRUD (Create, Read, Update, Delete)',
    question: 'How would you implement CRUD in a REST API?',
    answer: 'Typically, REST maps CRUD operations to HTTP methods: Create → POST, Read → GET, Update → PUT or PATCH, Delete → DELETE. In practice, I’d use Express.js or another backend framework to define routes that connect to a database. Each route would handle validation, execute a database query (e.g., MongoDB or SQL), and return an appropriate response.'
  },
  {
    section: 'CRUD (Create, Read, Update, Delete)',
    question: 'How would you optimize a “Read” operation for performance?',
    answer: 'Use indexing in the database. Limit fields returned with projections (e.g., SELECT name, email instead of SELECT *). Add pagination with limit and offset for large datasets. Cache frequently accessed queries (Redis, in-memory cache).'
  },
  {
    section: 'CRUD (Create, Read, Update, Delete)',
    question: 'What’s the difference between PUT and PATCH in CRUD?',
    answer: 'PUT replaces the entire resource with a new one, while PATCH updates only specific fields. For example, updating a user’s email: PUT requires sending all user fields, not just email; PATCH only sends the changed email field.'
  },
  // RPC (Remote Procedure Call)
  {
    section: 'RPC (Remote Procedure Call)',
    question: 'Can you explain what RPC is and how it differs from REST?',
    answer: 'RPC is a communication style where a client executes functions or procedures on a remote server as if they were local. REST focuses on resources (nouns), while RPC focuses on actions (verbs). For example: REST: GET /users/1 → returns user data. RPC: getUser(1) → calls a remote function to return user data. RPC can be more lightweight and direct for internal tools but less standardized than REST.'
  },
  {
    section: 'RPC (Remote Procedure Call)',
    question: 'Have you worked with RPC frameworks before?',
    answer: 'Yes, I’ve worked with gRPC and JSON-RPC. For example, gRPC allows strongly typed contracts using Protocol Buffers, which improves performance and type safety. I’ve used it to implement efficient service-to-service communication where low latency was required.'
  },
  {
    section: 'RPC (Remote Procedure Call)',
    question: 'What are the pros and cons of RPC compared to REST?',
    answer: 'Pros: More efficient for internal services (less overhead). Clear action-based APIs (createUser(), deleteUser() feel intuitive). Works well with strongly typed schemas (gRPC + Protocol Buffers). Cons: Less human-readable compared to REST. Harder to test/debug without tooling. Not as widely adopted for public APIs as REST.'
  },
  {
    section: 'RPC (Remote Procedure Call)',
    question: 'How would you secure an RPC call?',
    answer: 'Use authentication tokens (JWT, OAuth). Encrypt data over the wire (TLS/HTTPS). Validate input strictly on the server side. Rate limit RPC calls to prevent abuse.'
  },
  {
    section: 'RPC (Remote Procedure Call)',
    question: 'How would you implement a simple RPC call in a web app?',
    answer: 'Example with JSON-RPC over HTTP: {"jsonrpc": "2.0", "method": "getUser", "params": { "id": 1 }, "id": 1}. The server responds: {"jsonrpc": "2.0", "result": { "id": 1, "name": "Zach" }, "id": 1}.'
  },
  // Scenarios
  {
    section: 'Scenarios',
    question: 'Scenario 1: CRUD for Game Assets',
    answer: 'I’d start with a resource-oriented design in REST: Create → POST /assets, Read → GET /assets/:id, Update → PATCH /assets/:id, Delete → DELETE /assets/:id. I’d also add pagination and filtering since the dataset could grow large. On the backend, I’d use indexing on fields like type or rarity to optimize queries. For user safety, I’d implement soft deletes (mark as inactive instead of full removal).'
  },
  {
    section: 'Scenarios',
    question: 'Scenario 2: RPC for Build/Deployment Tools',
    answer: 'RPC fits better than CRUD here because the focus is on actions, not resources. I’d expose methods like: startBuild(branchName, platform), deployBuild(buildId, environment), getBuildStatus(buildId). These RPC calls would map directly to backend scripts or CI/CD pipelines. I’d secure them with authentication and role-based permissions (only certain devs can deploy). Using RPC keeps the API action-driven, which matches the workflow better than trying to shoehorn it into REST resources.'
  },
  {
    section: 'Scenarios',
    question: 'Scenario 3: Integrating External APIs',
    answer: 'I’d wrap the external API with our own CRUD endpoints so our tool is not tightly coupled to the third-party. For example: GET /player-stats/:id → under the hood calls the external analytics API. I would cache results to reduce load and improve performance. I would also add a scheduled job (cron or queue worker) that syncs data periodically so designers can still access stats even if the external API is down. This way, the tool remains reliable and insulated from external failures.'
  },
  {
    section: 'Scenarios',
    question: 'Scenario 4: Handling Large Updates',
    answer: 'I’d avoid single huge UPDATE operations from the UI. Instead, I’d batch the updates. Expose an RPC method like bulkUpdateAssets(changeset) that applies updates in chunks. On the backend, I’d queue updates and process them asynchronously, with a progress tracker so designers see how far along it is. Add rollback support (transaction or backup) in case something breaks.'
  },
  {
    section: 'Scenarios',
    question: 'Scenario 5: CRUD + RPC Hybrid',
    answer: 'I’d use CRUD for level metadata (name, ID, difficulty, tags, versioning), and RPC for actions that don’t map neatly to resources (e.g., generatePreview(levelId), publishLevel(levelId)). So: CRUD for data, RPC for actions. This hybrid approach keeps the data model clean while still allowing for developer workflows that are action-oriented.'
  },
  // WebSockets
  {
    section: 'WebSockets',
    question: 'What problem do WebSockets solve compared to HTTP?',
    answer: 'HTTP is request-response based: the client must poll to get new data. WebSockets provide a persistent, bidirectional connection, letting server and client push data in real time — ideal for games, chats, or live dashboards.'
  },
  {
    section: 'WebSockets',
    question: 'How do WebSockets differ from SSE (Server-Sent Events)?',
    answer: 'SSE only allows the server to push data to the client (one-way). WebSockets are two-way (client ⇄ server), making them better for interactive apps like multiplayer games.'
  },
  {
    section: 'WebSockets',
    question: 'Can you describe the WebSocket handshake?',
    answer: 'A WebSocket connection starts as an HTTP request with an Upgrade: websocket header. If the server accepts, the protocol switches to WebSocket, establishing a persistent TCP connection.'
  },
  {
    section: 'WebSockets',
    question: 'What are some use cases where WebSockets are the wrong choice?',
    answer: 'If data isn’t time-sensitive (e.g., static content or rare updates). If scaling requires stateless, cacheable requests (HTTP fits better). If you only need server → client updates (SSE can be lighter).'
  },
  {
    section: 'WebSockets',
    question: 'How do you handle scaling WebSockets across multiple servers?',
    answer: 'Use a pub/sub system (e.g., Redis, Kafka) to broadcast messages across nodes, since a single server can’t hold all connections. Load balancers must support sticky sessions so a client always connects to the same server.'
  },
  // Vite
  {
    section: 'Vite',
    question: 'What makes Vite faster than Webpack or CRA?',
    answer: 'Vite uses native ES modules in the browser for dev, so there’s no bundling step. It also uses esbuild (written in Go) for lightning-fast dependency pre-bundling. This makes cold starts and hot module replacement (HMR) much faster than Webpack.'
  },
  {
    section: 'Vite',
    question: 'How does Vite handle production builds?',
    answer: 'In production, Vite switches to Rollup for bundling. Rollup creates highly optimized builds with tree-shaking and code-splitting.'
  },
  {
    section: 'Vite',
    question: 'What is Hot Module Replacement (HMR) in Vite?',
    answer: 'HMR lets Vite replace changed modules in the browser without a full reload. This makes dev feedback almost instant, improving productivity.'
  },
  {
    section: 'Vite',
    question: 'How would you configure Vite to support React, TypeScript, or Tailwind?',
    answer: 'Install the relevant plugins, e.g.: @vitejs/plugin-react for React. TypeScript works out of the box. Add tailwindcss + postcss config for Tailwind. Configuration is minimal compared to Webpack.'
  },
  {
    section: 'Vite',
    question: 'Why might a team choose Vite over Next.js?',
    answer: 'Vite is lighter and faster for SPAs or internal tools. Next.js is better if you need SSR, API routes, or full-stack features. If Escape Velocity builds internal dashboards or tooling, Vite is a perfect fit.'
  },
  // More WebSocket Questions
  {
    section: 'WebSocket Questions',
    question: 'What is the difference between WebSockets and HTTP?',
    answer: 'HTTP is request/response — the client asks, the server responds, and then the connection closes. WebSockets create a persistent, full-duplex connection where client and server can send data anytime without re-establishing a connection. This makes them ideal for real-time apps like multiplayer games, chat, or live dashboards.'
  },
  {
    section: 'WebSocket Questions',
    question: 'When would you use WebSockets instead of REST APIs?',
    answer: 'Use WebSockets when you need low latency, real-time communication — e.g., multiplayer game states, live notifications, collaborative editing tools. Use REST when you only need occasional data fetches or structured CRUD operations.'
  },
  {
    section: 'WebSocket Questions',
    question: 'How do you handle reconnection with WebSockets?',
    answer: 'Detect onclose or onerror events. Try reconnecting with an exponential backoff (e.g., wait 1s, 2s, 4s before retrying). Optionally, use a library like Socket.IO that handles reconnections automatically.'
  },
  {
    section: 'WebSocket Questions',
    question: 'What are some limitations or challenges with WebSockets?',
    answer: 'Harder to scale horizontally (sticky sessions or pub/sub needed). Not cacheable like HTTP. Firewalls/proxies may block connections. More complex error handling and authentication.'
  },
  {
    section: 'WebSocket Questions',
    question: 'How would you authenticate a WebSocket connection?',
    answer: 'Usually by: Sending a JWT token in the connection request (e.g., query param or header during handshake). Server validates before accepting the connection. Optionally refresh/re-authorize tokens for long-lived sessions.'
  },
  // More Vite Questions
  {
    section: 'Vite Questions',
    question: 'What is Vite and why is it faster than Webpack?',
    answer: 'Vite is a next-gen frontend build tool. It uses native ES modules in the browser for dev, so it doesn’t need to bundle everything upfront. Instead, it only compiles what’s actually imported. For production, it uses Rollup to bundle efficiently. This results in instant server startup and fast HMR compared to Webpack.'
  },
  {
    section: 'Vite Questions',
    question: 'What are some advantages of Vite in development?',
    answer: 'Lightning-fast startup (no giant initial bundle). HMR (Hot Module Replacement) is nearly instant. Out-of-the-box TypeScript, JSX, CSS, and Vue/React support. Simple config compared to Webpack.'
  },
  {
    section: 'Vite Questions',
    question: 'How would you configure environment variables in Vite?',
    answer: 'Create .env files (like .env.local, .env.production). Prefix variables with VITE_ (e.g., VITE_API_URL=https://api.example.com). Access them in code via import.meta.env.VITE_API_URL.'
  },
  {
    section: 'Vite Questions',
    question: 'How does Vite handle production builds differently than development?',
    answer: 'In dev, Vite serves ES modules directly for speed. In production, it bundles using Rollup, optimizing for smaller, faster assets — minification, code splitting, tree shaking, etc.'
  },
  {
    section: 'Vite Questions',
    question: 'Can Vite be used with frameworks other than React/Vue?',
    answer: 'Yes. Vite supports multiple ecosystems: React, Vue, Svelte, Preact, Solid, Lit. Can also be used with Vanilla JS or even libraries like Astro. Official and community plugins expand its support.'
  },
  // Core Technical Skills (.NET, Angular, React)
  {
    section: 'Core Technical Skills',
    question: 'Can you explain the difference between an Abstract Class and an Interface in C#? When would you use one over the other?',
    answer: 'An abstract class is a class that cannot be instantiated on its own and can contain both abstract (without implementation) and concrete (with implementation) methods. It\'s used for defining a common base for a group of related classes that share a similar state or behavior. An interface, on the other hand, is a contract that only defines method signatures and properties without any implementation. A class can implement multiple interfaces, but can only inherit from one abstract class. I\'d use an abstract class when I need to provide a common, shared implementation for a family of classes, or when I want to enforce a standard structure for my code while also offering some default functionality. For example, a Vehicle abstract class could have a concrete StartEngine() method but an abstract Drive() method. I\'d use an interface when I want to define a contract for a service or a set of capabilities that multiple, unrelated classes can implement. For instance, an IFileLogger interface could be implemented by a SqlFileLogger and a TextFileLogger to ensure they both have a Log() method, even though their underlying implementations are completely different.'
  },
  {
    section: 'Core Technical Skills',
    question: 'What are some of the key differences between Angular and React from a developer\'s perspective?',
    answer: 'The main difference is their approach. React is a JavaScript library for building UI components, while Angular is a comprehensive, opinionated framework. React gives you more flexibility to choose your own libraries for routing, state management, etc., while Angular provides all of these out-of-the-box. I\'ve found Angular\'s component-based structure, strong typing with TypeScript, and opinionated nature to be great for large, long-term enterprise applications where consistency is key. React, with its more flexible and light-weight approach, is excellent for building fast, single-page applications or UI components that can be dropped into existing applications. The choice between them often depends on the project\'s scale and the team\'s preference for either a more structured framework or a more flexible library.'
  },
  // DevOps & Cloud
  {
    section: 'DevOps & Cloud',
    question: 'Tell me about your experience with CI/CD pipelines. How have you used Azure DevOps to automate the build and deployment process?',
    answer: 'In my last role, I was responsible for a key part of our CI/CD pipeline in Azure DevOps. My team\'s process started with a Git pull request. Once a PR was approved and merged into the main branch, it would automatically trigger an Azure Pipeline. This pipeline had several stages: Build: It would compile the .NET application, run all unit tests, and create the build artifacts. Test: It would deploy the application to a staging environment and run automated integration and end-to-end tests. Deploy: Once the tests passed, the pipeline would automatically deploy the application to the production environment using a release pipeline. This process significantly reduced our time to market and allowed us to deploy new features multiple times a day with confidence. We also used App Insights for logging and monitoring our applications once they were deployed.'
  },
  {
    section: 'DevOps & Cloud',
    question: 'Have you worked with Azure cloud services? Can you describe a service you\'ve used and how it helped a project?',
    answer: 'Yes, I have experience with a range of Azure services. A key one I\'ve worked with is Azure App Service. In a recent project, we needed a scalable and reliable platform to host our web API. We chose App Service because it allowed us to deploy our .NET API with minimal configuration and effort. We were able to easily set up continuous deployment directly from our Azure DevOps pipeline. It also provided built-in features like auto-scaling, which automatically adjusted the number of instances based on traffic, and custom domain mapping, which was crucial for a production application. We used it to host our API and found it to be a very efficient and cost-effective solution.'
  },
  // Databases
  {
    section: 'Databases',
    question: 'Explain the difference between an INNER JOIN and a LEFT OUTER JOIN in SQL.',
    answer: 'An INNER JOIN returns only the rows that have a matching value in both tables. A LEFT OUTER JOIN, on the other hand, returns all the records from the "left" table and only the matching records from the "right" table. If there\'s no match, the columns from the right table will have NULL values. For example, if I\'m joining a Customers table with an Orders table, an INNER JOIN would only show customers who have placed an order. A LEFT OUTER JOIN would show all customers, including those who have not placed an order, with NULL values for the order details.'
  },
  // Agile & Collaboration
  {
    section: 'Agile & Collaboration',
    question: 'Tell me about your experience working in an Agile/Scrum team. What role did you play, and what do you find most valuable about the methodology?',
    answer: 'I\'ve worked in Agile/Scrum teams for over five years, primarily in the role of a developer. We held daily stand-ups, participated in sprint planning, and conducted sprint reviews and retrospectives. What I find most valuable about Scrum is the focus on iterative development and continuous improvement. The daily stand-ups ensured we were all aligned and aware of any blockers, and the retrospectives gave us a dedicated time to reflect on our processes and make adjustments. It fosters a very collaborative and transparent environment, which I believe is essential for delivering high-quality software.'
  },
  // Problem-Solving & Behavioral
  {
    section: 'Problem-Solving & Behavioral',
    question: 'Describe a challenging technical problem you\'ve faced and how you solved it.',
    answer: 'SITUATION: In my last role, our API\'s performance was degrading significantly under high load, causing timeouts and errors for our users. We had an upcoming marketing campaign that was expected to double our traffic, and the current performance was unacceptable. TASK: My task was to identify the root cause of the performance issue and implement a solution before the campaign launch. ACTION: I started by using logging tools like App Insights to analyze the request telemetry. I quickly noticed that a specific SQL query was taking an unusually long time to execute, sometimes over a minute. I took that query, used the SQL Server Management Studio\'s query analyzer, and found that it was performing a full table scan on a very large table. The table was missing a crucial index on the column used in the WHERE clause. I collaborated with the team to propose and create the new non-clustered index on that column. RESULT: After the new index was deployed to our staging environment, the query execution time dropped from over a minute to less than 100 milliseconds. We deployed the fix to production, and our application\'s performance returned to normal. We successfully handled the increased traffic during the campaign without any performance degradation.'
  },
  {
    section: 'Problem-Solving & Behavioral',
    question: 'How do you handle a situation where a team member\'s code is causing a bug, and you need to communicate this to them?',
    answer: 'My first step is always to verify the issue on my end, so I can provide concrete evidence. Once I\'ve confirmed the bug, my approach is to not make it personal. I\'ll typically reach out to the developer and say something like, \'Hey, I was working on [X feature] and it looks like it\'s encountering an issue when it gets to [Y part of the code]. I think the problem might be here, and I\'m happy to pair with you on it.\''
  }
];