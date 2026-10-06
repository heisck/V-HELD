Next.js without index.html
* TypeScript
* Tailwind CSS where useful
* GSAP
* ScrollTrigger
* Lenis
* Three.js
* React Three Fiber where appropriate
* Drei where appropriate
* Framer Motion where appropriate
* Lottie where appropriate
* modern component libraries where they genuinely improve quality
* WebGL
* Web Workers where useful
* WASM where genuinely justified

SAAS (Production)
* cloudinary cloud storage
* sentry error monitoring
* turso db (libSQL)
* upstash redis (rate limiting, caching, session store)

Development Infrastructure (Local Container Equivalents)
* Podman container services:
  - Local database (Turso / sqld libSQL server, bound to 127.0.0.1)
  - Local Redis (Redis/KeyDB server, bound to 127.0.0.1)
  - Local object storage / mock media server (bound to 127.0.0.1)
* Secured development configuration: All dev container ports strictly bind to localhost (127.0.0.1) and all external services fall back to local dev mocks behind the development config environment flag (`NODE_ENV === 'development'`).

Do NOT blindly install libraries.

Every dependency must have a reason.

Use existing high-quality component libraries instead of reinventing common UI primitives when appropriate.
