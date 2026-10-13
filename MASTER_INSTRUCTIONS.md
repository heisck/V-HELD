# MASTER INSTRUCTIONS — V-HELD (VOLUNTEERS IN HEALTH, EDUCATION AND LEADERSHIP DEVELOPMENT)

## 1. CRITICAL DESIGN & BUILDING DIRECTIVE: ANTI-BLOAT & MANDATORY MOTION

> **NON-NEGOTIABLE CORE PRINCIPLE**:
> - **Do not dump excessive text from project briefs into repetitive text boxes**: The project brief provides words and statements to guide intent, but dumping those verbatim will make the site feel bloated with too much to read.
> - **Ban on Static "Header + Paragraph + Side Image" Formula**: A layout that is merely a big bold headline, a block of text/bullet points, and a static image on the left or right is completely wrong.
> - **Motion & Transitions Are Mandatory**: If there is no animation, no thoughtful transitions, no interactive depth, and it does not feel like it communicates through movement and feeling, **then it has failed**.
> - **Communicate Through Experience**: Every section must communicate through interactive visual storytelling, fluid transitions, tactile motion, and craft—not walls of static copy.
> - **Freedom in Design**: Do not force rigid, arbitrary design templates or hardcoded layouts. Follow the design provided by the user while maintaining high craft, fluid motion, and zero bloat.

---

## 2. GENERAL UI DON'TS & PATTERNS TO AVOID

Avoid generic AI tropes and sloppy UI patterns:
1. **Purple-to-blue AI gradients & gradient text**
2. **Emojis in headings**
3. **Glassmorphism cards & harsh colored-border cards**
4. **Three generic icon boxes in a row**
5. **Floating clutter badges / pills above headlines** (e.g. repetitive tags like `[• MEASURABLE OUTCOMES]`)
6. **Lucide decorative icon clouds everywhere**
7. **Em-dashes everywhere** (repetitive `—` crutches across titles and subtitles)
8. **Generic buzzword copy** ("synergizing innovative solutions")
9. **Grain/noise texture over gradients**
10. **Text-Only Skeleton Sections / Wall-of-Text Boxes** (Sterile header + plain text divs + static side image with no motion)
11. **Leaving media slots empty or replacing images with colored placeholder boxes** (Use real, authentic WebP media)
12. **Compositor flash during scroll** (Never animate backdrop-filter with transition-all; keep background and blur steady while scrolling)
13. **Disconnected stroke SVG dividers**
14. **Dead buttons or broken interactive controls**
15. **Overlapping elements, clipped text, or broken mobile viewport overflow**

---

## 3. MOTION, ANIMATION & INTERACTION STANDARDS

1. **Fluid 60 FPS Transitions**:
   - Keep animations hardware-accelerated using GPU transforms (`transform`, `opacity`).
   - Use smooth easing curves, micro-interactions on hover/active states, and purposeful scroll-driven reveals.
2. **Interactive Storytelling**:
   - Instead of static text, use interactive elements (e.g., interactive tabs, scroll-linked progress, layered cards, reveals, state transitions) to communicate information progressively.
3. **Reduced Motion Accessibility**:
   - Always honor `prefers-reduced-motion: reduce` with graceful fallbacks.
4. **Visual Inspection**:
   - Always verify the rendered output visually (via browser screenshots) to confirm that motion, responsiveness, and spacing feel refined and tactile before completing a task.

---

## 4. ENGINEERING, PERFORMANCE & SECURITY STANDARDS

1. **Tech Stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion / GSAP / Lenis.
2. **Performance**: Target 60 FPS, LCP < 1.8s, CLS < 0.05, gzipped initial JS < 150KB. All raster images must be optimized `.webp`.
3. **Accessibility (WCAG AA)**: Minimum 44×44px touch targets, visible focus states (`focus-visible`), high contrast ratios, semantic HTML.
4. **Security & Validation**: Validate all inputs server-side with Zod; enforce Row Level Security (RLS); never expose secrets or keys on the client; sanitize user data.
5. **Acceptance Gate**: Ensure all types and tests pass (`npm run check:agent` / `tsc --noEmit`).

---

## 5. WHAT WE ARE BUILDING (PROJECT CONTENT & REQUIREMENTS)

The following sections define the V-HELD organisation, its purpose, programmes, audience, and mission. Use these as the source of truth for V-HELD's mission, goals, and content context—without dumping the copy into static wall-of-text boxes.


### 5.1 Project Brief & Details

V-HELD WEBSITE CONTENT & DEVELOPMENT BRIEF
ORGANISATION NAME
V-HELD
Volunteers in Health, Education and Leadership Development
Tagline
Give Back. Make a Difference!

1. WEBSITE PURPOSE
The V-HELD website should present the organisation as a credible Ghanaian volunteer and community development organisation that welcomes volunteers from both Ghana and around the world.
The website should:
• Attract local and international volunteers
• Clearly explain V-HELD’s programmes
• Allow prospective volunteers to apply online
• Showcase V-HELD’s community impact
• Build trust with international volunteers, universities, institutions and development partners
• Provide information about volunteering in Ghana
• Attract organisations interested in partnerships and community projects
• Provide opportunities for individuals and organisations to support V-HELD’s work
The website should feel professional, warm, youthful, trustworthy and impact-driven.

2. MAIN NAVIGATION
Home
About V-HELD
Volunteer With Us
Our Programmes
Our Impact
Stories
Partner With Us
Support Our Work
Contact
Primary button:
APPLY TO VOLUNTEER

3. HOMEPAGE
HERO SECTION
GIVE BACK. MAKE A DIFFERENCE 
Join volunteers from Ghana and around the world in supporting communities through health, education and leadership development.
V-HELD welcomes passionate volunteers from Ghana and around the world to work alongside communities, contribute their skills and gain meaningful experiences while making a positive difference.
Buttons:
BECOME A VOLUNTEER
EXPLORE OUR PROGRAMMES

4. INTRODUCTION SECTION
Welcome to V-HELD
Volunteers in Health, Education and Leadership Development (V-HELD) is a Ghanaian volunteer and community development organisation committed to creating opportunities for individuals to contribute to meaningful community development initiatives.
We connect passionate people with opportunities to serve in communities through education, health, leadership development and related community initiatives.
Whether you are a student, professional, graduate, retired professional or simply someone who wants to make a difference, there may be a place for you at V-HELD.
From Ghana or from across the world, you can volunteer, learn, connect and contribute.
Button:
LEARN MORE ABOUT V-HELD

5. OUR THREE FOCUS AREAS
Our Areas of Focus
EDUCATION
We support educational development by connecting volunteers with opportunities to contribute to schools, learners, teachers and community education initiatives.
Volunteers may support classroom activities, tutoring, mentorship, educational programmes, extracurricular activities and other initiatives based on community needs.
EXPLORE EDUCATION PROGRAMMES

HEALTH
We support community health initiatives and health education through volunteer participation, awareness activities and other appropriate programmes.
Volunteers with relevant professional backgrounds may have opportunities to contribute their knowledge and skills within approved programmes and partner institutions.
EXPLORE HEALTH PROGRAMMES

LEADERSHIP DEVELOPMENT
We believe that strong communities need empowered and responsible leaders.
Our leadership development initiatives focus on young people, personal development, mentorship, leadership skills, entrepreneurship and community engagement.
EXPLORE LEADERSHIP PROGRAMMES

6. WHY VOLUNTEER WITH V-HELD?
Make Your Time Matter
Volunteering is more than giving your time. It is an opportunity to connect with people, learn from different perspectives and contribute to meaningful change.
MAKE A MEANINGFUL IMPACT
Use your skills, knowledge and time to contribute to communities and initiatives that matter.
CONNECT WITH COMMUNITIES
Build genuine relationships with people and experience Ghana beyond the typical tourist experience.
GROW YOUR SKILLS
Develop communication, teamwork, leadership, cultural awareness and professional skills.
LEARN THROUGH EXPERIENCE
Gain practical experience while working alongside local communities and organisations.
EXPERIENCE GHANA
Discover Ghana, its people, culture, history and communities while contributing to something meaningful.
BE PART OF A COMMUNITY
Join a growing network of volunteers, community members and partners working towards positive change.

7. WHO CAN VOLUNTEER?
Who Can Volunteer With V-HELD?
V-HELD welcomes volunteers from diverse backgrounds.
You may be:
• A university or college student
• A recent graduate
• A working professional
• A healthcare professional
• A teacher or education professional
• A researcher
• An entrepreneur
• A retired professional
• A skilled individual
• Someone taking a career break
• Anyone passionate about community service and development
You do not always need professional experience to volunteer.
What matters most is your commitment, willingness to learn, respect for communities and readiness to contribute responsibly.
Volunteers from Ghana
You can volunteer with V-HELD whether you live in Ghana or are travelling from another region of the country.
International Volunteers
V-HELD welcomes volunteers from around the world who are interested in contributing to community development in Ghana.

8. HOW IT WORKS
Your V-HELD Volunteer Journey
01 — EXPLORE
Browse our volunteer programmes and find an opportunity that matches your interests, skills and availability.
02 — APPLY
Complete our online volunteer application and tell us about yourself, your interests and what you hope to contribute.
03 — CONNECT
Our team reviews your application and communicates with you about your preferred programme and placement.
04 — PREPARE
Receive the information and guidance you need to prepare for your volunteer experience.
International volunteers will receive relevant information regarding travel preparation and volunteering in Ghana.
05 — ARRIVE & ORIENT
Receive an orientation and introduction to your programme, host community and responsibilities.
06 — VOLUNTEER
Work alongside communities, local partners and other volunteers to contribute to meaningful initiatives.
07 — REFLECT & GROW
Reflect on your experience, document your learning and leave with new skills, relationships and memories.

9. PROGRAMMES PAGE
Our Volunteer Programmes
Our programmes are designed around community needs and opportunities for volunteers to contribute their knowledge, skills and time.
EDUCATION & TEACHING
Support learners, schools and educational initiatives.
HEALTH & COMMUNITY WELLBEING
Contribute to health education, awareness and appropriate community health initiatives.
YOUTH & LEADERSHIP DEVELOPMENT
Support young people through mentorship, leadership development and personal growth initiatives.
COMMUNITY DEVELOPMENT
Participate in community-based initiatives designed to address identified local needs.
SKILLS & PROFESSIONAL VOLUNTEERING
Share professional knowledge and practical skills with communities and partner organisations.

10. PROGRAMME PAGE TEMPLATE
Every individual programme should have the following information:
Programme Name
Short programme description.
Location
Where the programme takes place.
Duration
Available volunteering periods.
Who Can Apply
Relevant qualifications, skills or experience.
What You Will Do
Detailed description of volunteer responsibilities.
What You Will Learn
Skills and experiences volunteers can gain.
What Is Included
Clearly list what V-HELD provides.
What Is Not Included
Clearly list additional costs or responsibilities.
Programme Fee
Display the applicable fee where relevant.
Apply Now
Button leading to the application form.

11. INTERNATIONAL VOLUNTEERS
Volunteer in Ghana
Come to Ghana. Connect with Communities. Make an Impact.
Ghana offers an opportunity to experience a vibrant culture while contributing to meaningful community development initiatives.
As an international volunteer with V-HELD, you will have the opportunity to work alongside local communities while learning from the people and environment around you.
Your experience may include volunteering, cultural exchange, community engagement and discovering Ghana.
Before You Travel
V-HELD will provide relevant programme information and guidance to help you prepare for your experience.
International volunteers should independently ensure that they meet Ghana’s immigration, health, insurance and travel requirements applicable to their circumstances.
Experience Ghana Beyond Tourism
Your V-HELD experience can combine meaningful volunteering with cultural learning and exploration.

12. GHANAIAN VOLUNTEERS
Volunteer From Ghana
You do not need to travel internationally to make a difference.
V-HELD provides opportunities for individuals living in Ghana to contribute their time, knowledge, skills and energy to community development.
Whether you are a student, professional, graduate or simply passionate about service, you can find opportunities to contribute.
Join the V-HELD volunteer community and make a difference in Ghana.

13. IMPACT SECTION
Our Impact
At V-HELD, we believe that impact should be measured by the lives touched, skills shared and communities strengthened.
Through our programmes and partnerships, we aim to:
Strengthen Education
Support learners, teachers and educational initiatives.
Promote Community Health
Contribute to health awareness and community wellbeing.
Develop Young Leaders
Equip young people with knowledge, confidence and leadership skills.
Encourage Global Exchange
Create meaningful connections between Ghanaian communities and people from around the world.
Numbers should be added here as V-HELD’s verified impact data becomes available.
Suggested statistics:
Volunteers Engaged
Communities Reached
Learners Supported
Projects Completed

14. STORIES SECTION
Stories From the Field
Real people. Real experiences. Real impact.
Share stories from volunteers, community members, teachers, health workers, students and partners.
Each story should include:
• High-quality photographs
• Person’s name
• Location
• Their role
• Their experience
• The impact of the programme
Button:
READ MORE STORIES

15. VOLUNTEER TESTIMONIALS
What Our Volunteers Say
This section should display real testimonials from V-HELD volunteers.
Example layout:
“My experience with V-HELD gave me the opportunity to contribute my skills while learning from a completely different community and culture.”
Volunteer Name
Country
Only publish genuine testimonials from actual volunteers.

16. ABOUT PAGE
About V-HELD
Volunteers in Health, Education and Leadership Development (V-HELD) is a Ghanaian organisation committed to creating opportunities for volunteerism, community engagement and development.
We believe that individuals have the power to contribute to positive change when they are connected to communities and given meaningful opportunities to serve.
V-HELD brings together volunteers, communities, institutions and partners to support initiatives in health, education, leadership development and other areas of community development.
Our work is grounded in service, respect, collaboration and sustainable community impact.

17. OUR VISION
Our Vision
A world where individuals and communities are empowered to contribute, lead and thrive.

18. OUR MISSION
Our Mission
To connect people, skills and resources with communities in need of support, while creating meaningful opportunities for volunteerism, learning, leadership and sustainable development.

19. OUR VALUES
What We Stand For
SERVICE
We believe in using our time, skills and resources to serve others.
RESPECT
We respect the dignity, culture, knowledge and perspectives of every individual and community.
INTEGRITY
We are committed to honesty, accountability and responsible service.
COLLABORATION
We believe lasting impact is created when communities, volunteers and organisations work together.
LEARNING
We encourage continuous learning, cultural exchange and personal development.
IMPACT
We focus on meaningful activities that respond to genuine community needs.

20. PARTNERSHIP PAGE
Partner With V-HELD
Meaningful development requires collaboration.
V-HELD welcomes partnerships with:
• Schools
• Universities
• Hospitals and health institutions
• Community organisations
• NGOs
• Businesses
• Foundations
• International organisations
• Professional associations
• Volunteer groups
Partnership opportunities may include volunteer placements, community projects, educational initiatives, health programmes, leadership development and corporate social responsibility activities.
Become a Partner
Let’s work together to create meaningful impact.
Button:
START A PARTNERSHIP

21. SUPPORT OUR WORK
Support V-HELD
There are many ways to support community development.
VOLUNTEER
Give your time, skills and experience.
DONATE
Support projects and programmes that benefit communities.
PARTNER
Work with V-HELD to develop meaningful initiatives.
SPONSOR A PROJECT
Support a specific education, health or leadership development initiative.
PROVIDE RESOURCES
Contribute educational materials, equipment, professional expertise or other resources where appropriate.

22. SAFEGUARDING
Safeguarding & Responsible Volunteering
V-HELD is committed to protecting the dignity, safety and wellbeing of volunteers, community members, children and other people who participate in our programmes.
All volunteers are expected to behave responsibly and respectfully and to follow applicable V-HELD policies and programme guidelines.
The website should provide dedicated pages or downloadable documents for:
Child Protection & Safeguarding Policy
Volunteer Code of Conduct
Safeguarding Policy
Anti-Harassment Policy
Privacy Policy
Complaints & Feedback Procedure

23. FAQ
Frequently Asked Questions
Who can volunteer with V-HELD?
V-HELD welcomes volunteers from Ghana and internationally. Programme requirements vary depending on the placement.
Do I need previous volunteering experience?
Not necessarily. Some programmes may require specific qualifications or professional experience, while others are open to people who are new to volunteering.
How long can I volunteer?
Programme durations vary. Available options should be displayed on each programme page.
Can international volunteers volunteer in Ghana?
Yes. V-HELD welcomes international volunteers interested in participating in its programmes in Ghana.
Can Ghanaians volunteer?
Yes. V-HELD welcomes volunteers based in Ghana as well as those travelling to Ghana from other countries.
Do I need to speak a local Ghanaian language?
Not necessarily. Requirements depend on the programme and location.
Can I volunteer as part of a group?
Yes. V-HELD can explore group volunteering opportunities for universities, schools, professional groups, organisations and other groups.
Can my organisation partner with V-HELD?
Yes. Organisations interested in partnership opportunities can contact the V-HELD team.
Will V-HELD help international volunteers prepare for Ghana?
V-HELD will provide relevant programme information and guidance to help international volunteers prepare for their experience. Volunteers remain responsible for meeting applicable travel, immigration, health and insurance requirements.

24. APPLICATION PAGE
Become a V-HELD Volunteer
Ready to make a difference?
Tell us about yourself, your interests and the kind of experience you are looking for.
APPLICATION FORM
Full Name
Email Address
Phone / WhatsApp
Country of Residence
Nationality
Age
Occupation / Field of Study
Area of Interest
Education
Health
Leadership Development
Community Development
Other
Preferred Programme
Preferred Location
Preferred Start Date
Preferred Duration
Relevant Skills / Experience
Why would you like to volunteer with V-HELD?
Have you volunteered before?
Yes / No
Emergency Contact
Upload CV
Optional where applicable
Upload Passport / Identification
Only where required and with appropriate privacy notice
SUBMIT APPLICATION

25. CONTACT PAGE
Get In Touch
Have questions about volunteering, partnerships or our programmes?
We would love to hear from you.
V-HELD
Volunteers in Health, Education and Leadership Development
Ghana
Email: [official V-HELD email]
Phone / WhatsApp: [official number]
Office Address: [official address]
Social Media:
Facebook
Instagram
TikTok
LinkedIn
Send Us a Message
Name
Email
Phone
Subject
Message
SEND MESSAGE

26. FOOTER
V-HELD
Volunteers in Health, Education and Leadership Development
Volunteer. Serve. Develop.
Quick Links:
About V-HELD
Volunteer
Programmes
Impact
Stories
Partner With Us
Support Our Work
Contact
Policies:
Privacy Policy
Safeguarding
Volunteer Code of Conduct
Terms & Conditions
© V-HELD. All Rights Reserved.

27. DESIGN DIRECTION
The website should have a modern international NGO aesthetic.
Visual Style
Professional
Warm
Human
African
Clean
Trustworthy
Impact-focused
Use authentic photographs wherever possible rather than generic stock photography.
The website should visually communicate:
People + Community + Service + Ghana + Global Connection
Avoid making it look like a tourism company.

28. PRIMARY CALL TO ACTION
The most prominent action throughout the website should be:
APPLY TO VOLUNTEER
Secondary actions:
EXPLORE PROGRAMMES
PARTNER WITH US
SUPPORT OUR WORK

29. IMPORTANT FUNCTIONAL REQUIREMENTS
The developer should ensure the website is:
• Fully responsive on mobile, tablet and desktop
• Fast loading
• SEO friendly
• Easy for V-HELD administrators to update
• Secure
• Accessible
• Integrated with an online volunteer application form
• Integrated with email notifications for new applications
• Connected to V-HELD social media accounts
• Equipped with Google Analytics or equivalent analytics
• Equipped with proper spam protection on forms
• SSL secured
• Structured so new programmes and volunteer opportunities can easily be added
The website should also be designed so that international visitors can easily understand all prices, programme requirements, locations, durations and application procedures.

30. CORE WEBSITE MESSAGE
The entire website should communicate one central idea:
V-HELD connects people who want to serve with communities that can benefit from their time, skills and knowledge.
Whether someone is from Accra, Tamale, London, Toronto, New York, Nairobi or anywhere else in the world, they should be able to visit the website and immediately understand how they can become part of V-HELD.
Volunteer. Serve. Develop.


---

### 5.2 Raw Requirements Archive

# Raw Requirements & Master Input Archive

> **Note**: This file archives the complete, verbatim instructions and requirements provided by the user across prompts for permanent reference and ongoing tracking.

---

## Prompt 1: Project Directives, Anti-Vibecoding, Security, and Definition of Done

```markdown
these are all md is collected from different projects i built i want you to put them in separate md in the docs like i have started this project is not a portfolio website so leave that out and leave the brainstorming and review parts out oo                                                                                                                                                         FIND IT BELOW THIS IS A BIG PROJECT SO COPY EVERYTHING I SAY AND PUT IT IN A MARKDOWN FILE AND UPDATE IT AS YOU BUILD DONT TRY TO CRAM EVERYTHING IN TO YOUR CONTEXT. THAT IS THE FIRST THING TO DO AND THEN REFER THOSE MARKDOWNS IN YOUR AGENT MARKDOWN FILES THAT WILL BE THE FIRST THING I CHECK. REWRITE BEFORE EVEN THINKING # Build a Wow-Worthy 3D Portfolio Website

You are the lead creative developer, senior frontend engineer, interaction designer, motion designer, and QA engineer for this project.

Your job is to design and build an original, unconventional, production-quality portfolio website from scratch.
...
[Full master text included in docs/raw-spec.md archive]
...
Update AGENTS.md with the following rules. Do not just acknowledge them — actually add them to the file and organize them into clear sections.

# Design & UI Standards
Avoid making the app look "vibecoded." Specifically avoid:
1. Purple-to-blue gradients
2. Gradient hero text
3. Emojis in headings
4. Using Inter everywhere
5. Colored-border cards
6. Glassmorphism cards
7. Low-contrast dark mode
8. Three icon boxes in a row
9. Badge above the headline
10. Lucide icons everywhere
11. Untouched Shadcn UI
12. Fade-in-on-scroll effects
13. Cursor-following beams
14. Buttons that only fade/change on hover
15. Inconsistent spacing
16. Em dashes everywhere
17. Generic buzzword copy
18. Serif italic accents
19. Space Grotesk + Instrument Serif as a generic combination
20. Grain/noise texture over gradients

# Before Building
Before building or making major changes:
1. Create a PRD
...
20. Commit small changes frequently

# Security Requirements Before Launch
1. Never expose API keys
...
20. Scan dependencies for vulnerabilities

# Additional Security Requirements
1. Add HSTS
...
20. Restrict database permissions using least privilege

# Engineering Principles
- Do not blindly implement generated code.
...
- Make production readiness a requirement, not an afterthought.

# Typography / Font Direction
Do not automatically default to Inter, Space Grotesk, Instrument Serif...

# Agent Behavior
Before implementing a feature, check AGENTS.md and follow all applicable requirements...

# DEFINITION OF DONE
DO NOT DECLARE THIS PROJECT COMPLETE UNTIL EVERY REQUIREMENT BELOW IS TRUE.
...
```

---

## Prompt 2: Integration of Review Gate & Architecture from Reference Project

```markdown
add the review and important things from this read me to the one we have                                                                                                                   # SynapseLearn

An AI tutor that turns a learner's own course material into slides, explanation,
and assessment — and keeps the learner's work on the learner's machine.

Two principles run through the whole codebase, and most of the architecture is
downstream of them:

1. **The platform stores nothing personal.** Course content, question banks,
   tutor memory, review queue and transcripts live in the learner's browser
   (IndexedDB) or in cloud storage *they* own. The shared database holds only
   what the system itself needs: prompts, configuration, and the opt-in
   anonymous leaderboard. See [docs/DATA-LOCATION.md](docs/DATA-LOCATION.md).
2. **No model output reaches the learner unchecked.** Generated questions and
   structured output pass a code-level validation layer — schema checks, not an
   AI reviewer. Invalid output is retried with corrective feedback, never shown.

## Getting started

```bash
npm install          # runs prisma generate + copies ONNX runtime assets
cp .env.example .env # fill in provider keys; see the file's own comments
npm run db:push      # create the local SQLite database
npm run dev          # http://localhost:3000
```

`npm install` triggers a `postinstall` that generates the Prisma client and
copies the ONNX runtime assets used by local speech. Both also run before `dev`
and `build`, so a fresh clone does not need extra steps.

## Everyday commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build + standalone asset copy |
| `npm start` | Serve the standalone build |
| `npm test` | Unit and integration tests (vitest) |
| `npm run lint` | ESLint |
| `npm run check:agent` | The full gate: `prisma validate` + `tsc` + lint + tests |
| `npm run test:e2e` | Playwright end-to-end tests |
| `npm run eval` | Model evaluations — real provider calls, slow, costs money |

`npm run check:agent` is the one to run before opening a pull request. It is the
same gate described in [docs/FINAL-ACCEPTANCE.md](docs/FINAL-ACCEPTANCE.md).

## Production container and Office originals

The checked-in `Dockerfile` installs Debian's maintained headless LibreOffice
packages (Writer + Impress) and verifies the executable while building. This is
the local fallback for PPTX, DOCX, ODP, ODT and RTF → PDF conversion:

```bash
docker build -t synapse .
docker run --rm -p 3000:3000 --env-file .env synapse
```

When `GOTENBERG_URL` is set, Gotenberg remains the primary supervised converter
and local LibreOffice is used after a remote failure. On serverless deployments
that cannot run this container or install executables, Gotenberg is required to
retain Office layout; a browser cannot render a private `.pptx` directly.

## Layout

```
src/
  app/api/      Route handlers (agent, chat, questions, vision, upload, …)
  components/   React UI — app/, tutor/, landing/, shared/, ui/
  lib/          Domain logic. Most of the system lives here.
    agent/      The tutor agent: prompt assembly, intent, memory, modes,
                task registry, review queue. Has its own docs — start at
                src/lib/agent/DESIGN.md.
    llm/        Provider gateway and model chains
    document/   Course material ingestion
    voice/      Local speech (STT/TTS web workers)
    orchestrator/
  stores/       Zustand store, split into slices/
  types/        Shared types
docs/           Architecture, decisions, and research. See docs/README.md.
scripts/        Operational and benchmark scripts
e2e/            Playwright specs
```

## Where the model configuration lives

Model chains are defined in `src/lib/llm/providerGateway.ts` and were last
rebuilt from measurement on 2026-08-05 — see the comment above the chain
definitions, and [docs/CHEAP_LLM_PROVIDER_DECISION.md](docs/CHEAP_LLM_PROVIDER_DECISION.md)
for the superseded July benchmark and why the two disagree.

## Documentation

[docs/README.md](docs/README.md) indexes every document and marks which are
current, which are historical, and which have been superseded. The agent
subsystem keeps its own contract in
[src/lib/agent/DESIGN.md](src/lib/agent/DESIGN.md).
```

---

## 2026-10-09 Prompt 4: Real System Logos Reconstructed to SVG

> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_1_2026-10-09_08-41-10.jpg`  
> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_2_2026-10-09_08-41-10.jpg`  
> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_3_2026-10-09_08-41-10.jpg`  
> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_4_2026-10-09_08-41-10.jpg`  
> we have the real system logos here you will create an svg version of them all only the logo the names the descriptions everything exact copy of it and put in the logo section so i can see them

---

## 2026-10-09 Prompt 5: Develop Trunk, Ticket Hierarchy & Human PR Gate

> once that is done delete the landing page branch and create a new branch from main called develop. that is where we will work from, then from develop that is where we will create the other branches and merge into so change the mds we will not create the branches from main but from develop and each branch will have a ticket so say we are working on landing page it has a ticket and then we create the landing page sections from it maybe the headercompnent, and so on all branch from that main branch, then we merge itno the parent. create the pr for develop and inform to check out the build if i approve you merge and continue else we fix my remarks so we update the develop met work flow.

