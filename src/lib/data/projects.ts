import type { LocalizedString } from "@/lib/i18n";

export type ProjectSection = {
  index: string;
  title: LocalizedString;
  body: LocalizedString;
};

export type ProjectHighlight = {
  value: string;
  label: LocalizedString;
};

export type GalleryItem = {
  src?: string;
  caption?: LocalizedString;
};

export type Project = {
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  category?: LocalizedString;
  desc: LocalizedString;
  techStack: string[];
  liveUrl: string;
  showLiveButton: boolean;
  githubUrl: string;
  paperUrl?: string;
  heroImage?: string;
  sections: ProjectSection[];
  highlights?: ProjectHighlight[];
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "depguard-ai",
    name: { nl: "DepGuard AI", en: "DepGuard AI" },
    tagline: {
      nl: "Een AI-gestuurd dashboard dat dependency-updates automatisch detecteert, analyseert en samenvat — zodat het kernteam van software bedrijven minder tijd verliest aan changelogs en sneller kan beslissen welke updates doorgevoerd moeten worden.",
      en: "An AI-driven dashboard that automatically detects, analyzes and summarizes dependency updates — so software teams spend less time reading changelogs and can decide faster which updates to ship.",
    },
    category: {
      nl: "AI-integratie · Web Dashboard · Dependency Management",
      en: "AI Integration · Web Dashboard · Dependency Management",
    },
    desc: {
      nl: "Bachelorproef — HoGent, in opdracht van Springbok Agency. AI-gestuurd dashboard voor dependency-analyse.",
      en: "Bachelor thesis — HoGent, for Springbok Agency. AI-driven dashboard for dependency analysis.",
    },
    techStack: [
      "Next.js",
      "TypeScript",
      "Mastra AI",
      "Supabase",
      "OpenAI",
      "n8n",
      "Tailwind CSS",
      "PostgreSQL",
      "GitHub API",
      "Tavily",
    ],
    liveUrl: "",
    showLiveButton: false,
    githubUrl: "https://github.com/jellev00/depguardai",
    paperUrl: "/documents/depguard-ai-bachelorproef.pdf",
    heroImage: "/projects/depguard-ai/hero.png",
    gallery: [
      { src: "/projects/depguard-ai/1.png", caption: { nl: "Dashboard met overzicht van alle projecten en dependency status", en: "Dashboard with an overview of all projects and dependency status" } },
      { src: "/projects/depguard-ai/2.png", caption: { nl: "Detailpagina van een project — major/minor/patch badges tonen het type update", en: "Project detail page — major/minor/patch badges show the update type" } },
      { src: "/projects/depguard-ai/3.png", caption: { nl: "AI-samenvatting met nieuwe features, breaking changes en migratiestappen", en: "AI summary with new features, breaking changes, and migration steps" } },
      { src: "/projects/depguard-ai/4.png", caption: { nl: "De resulaten van de LLM-as-a-Judge benchmark", en: "The results of the LLM-as-a-Judge benchmark" } },
    ],
    highlights: [
      { value: "7,81 / 10", label: { nl: "Mastra overall score", en: "Mastra overall score" } },
      { value: "~4,3 s", label: { nl: "Snelste variant (OpenAI)", en: "Fastest variant (OpenAI)" } },
      { value: "5 × 3 runs", label: { nl: "Testcases geëvalueerd", en: "Test cases evaluated" } },
    ],
    sections: [
      {
        index: "01",
        title: { nl: "Over het project", en: "About the project" },
        body: {
          nl: "Softwareprojecten bouwen op tientallen externe bibliotheken die voortdurend worden bijgewerkt. Het bijhouden van die updates — changelogs doorlezen, compatibiliteit inschatten, risico's beoordelen — kost ontwikkelteams onnodig veel tijd. Bestaande tools zoals Dependabot detecteren updates wel, maar laten de inhoudelijke interpretatie volledig aan de developer over. DepGuard AI vult precies die kloof: het haalt automatisch de dependencies op van gekoppelde GitHub-repositories, vergelijkt versies via de npm-registry en stuurt de relevante changelogs en release notes door naar een AI-agent, die per update een begrijpelijke samenvatting genereert met nieuwe features, breaking changes, security fixes, migratiestappen en een risicoadvies (veilig / voorzichtig / kritiek).",
          en: "Software projects rely on dozens of external libraries that are constantly updated. Keeping track of those updates — reading changelogs, assessing compatibility, judging risk — costs development teams unnecessary time. Existing tools like Dependabot detect updates, but leave the interpretation entirely to the developer. DepGuard AI fills that gap: it automatically pulls dependencies from connected GitHub repositories, compares versions via the npm registry, and forwards the relevant changelogs and release notes to an AI agent, which generates a clear summary per update covering new features, breaking changes, security fixes, migration steps, and a risk rating (safe / caution / critical).",
        },
      },
      {
        index: "02",
        title: { nl: "Hoe het werkt", en: "How it works" },
        body: {
          nl: "Gebouwd als een Next.js full-stack app met Tailwind CSS en shadcn/ui. Supabase (PostgreSQL + Row Level Security) verzorgt de multi-tenant opslag van bedrijven, projecten, teamleden en analyses. De AI-kern bestaat uit drie parallelle implementaties die onder dezelfde condities werden vergeleken: Mastra AI (TypeScript agentframework met custom tools voor npm/GitHub-metadata en Tavily-websearch, hoogste kwaliteit met score 7,81/10), een n8n workflow (low-code keten van acht nodes, snel op te zetten maar minder specifiek), en een eigen OpenAI-agent (expliciete tool-loop, snelste variant met gem. 4,3s maar minder volledig bij updates met veel nieuwe features).",
          en: "Built as a Next.js full-stack app with Tailwind CSS and shadcn/ui. Supabase (PostgreSQL + Row Level Security) handles multi-tenant storage of companies, projects, team members and analyses. The AI core consists of three parallel implementations compared under identical conditions: Mastra AI (a TypeScript agent framework with custom tools for npm/GitHub metadata and Tavily web search, highest quality with a score of 7.81/10), an n8n workflow (a low-code chain of eight nodes, fast to set up but less specific), and a custom OpenAI agent (an explicit tool loop, the fastest variant at avg. 4.3s but less thorough on updates with many new features).",
        },
      },
      {
        index: "03",
        title: { nl: "Resultaten", en: "Results" },
        body: {
          nl: "De evaluatie gebruikte een LLM-as-a-Judge benchmark over vijf representatieve testcases (React minor, Next.js minor, TypeScript major, Zod patch, Tailwind minor). Elke agent-output werd gescoord op specificiteit, volledigheid, actiegerichtheid en feitendekking. Een one-way ANOVA bevestigde significante verschillen tussen de agents op overall score, specificiteit en volledigheid. Mastra behaalde de hoogste score en werd aanbevolen als basis voor verdere uitwerking in de context van Springbok.",
          en: "The evaluation used an LLM-as-a-Judge benchmark across five representative test cases (React minor, Next.js minor, TypeScript major, Zod patch, Tailwind minor). Each agent output was scored on specificity, completeness, actionability and factual coverage. A one-way ANOVA confirmed significant differences between the agents on overall score, specificity and completeness. Mastra achieved the highest score and was recommended as the basis for further development in the context of Springbok.",
        },
      },
      {
        index: "04",
        title: { nl: "Conclusie", en: "Conclusion" },
        body: {
          nl: "DepGuard AI toont aan dat een agentgebaseerde aanpak een echte meerwaarde biedt voor dependencybeheer. Het systeem neemt niet de beslissing over, maar verlaagt de interpretatielast aanzienlijk — zodat developers sneller en beter geïnformeerd kunnen handelen. De kwaliteit van de output hangt sterk af van de orchestratie en de beschikbaarheid van actuele brondata, twee inzichten die ook buiten de context van dependencies relevant zijn voor iedereen die met AI-agents aan de slag gaat.",
          en: "DepGuard AI shows that an agent-based approach offers real added value for dependency management. The system doesn't take over the decision, but significantly reduces the interpretation burden — so developers can act faster and better informed. Output quality depends heavily on orchestration and the availability of up-to-date source data, two insights that are also relevant beyond dependency management for anyone working with AI agents.",
        },
      },
    ],
  },
  {
    slug: "inkling",
    name: { nl: "Inkling", en: "Inkling" },
    tagline: {
      nl: "Een multiplayer teken- en raadspel voor de browser: één speler tekent een woord, de rest raadt live mee via chat terwijl de tekening ontstaat. Snelheid bepaalt de score.",
      en: "A multiplayer drawing-and-guessing game for the browser: one player draws a word while the rest guess live via chat as the drawing takes shape. Speed determines the score.",
    },
    category: {
      nl: "Multiplayer game · Real-time · Solliciatie-opdracht",
      en: "Multiplayer game · Real-time · Application assignment",
    },
    desc: {
      nl: "Gebouwd als sollicitatie-opdracht voor een full service marketingbureau. Live multiplayer tekenspel met Next.js en Supabase Realtime.",
      en: "Built as an application assignment for a full-service marketing agency. Live multiplayer drawing game with Next.js and Supabase Realtime.",
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Realtime", "Edge Functions"],
    liveUrl: "https://inkling-pi.vercel.app/",
    showLiveButton: true,
    githubUrl: "https://github.com/jellev00/inkling",
    heroImage: "/projects/inkling/hero.png",
    gallery: [
      { src: "/projects/inkling/hero.png", caption: { nl: "Landing — wordmark in Caveat, primaire call-to-action om een room te maken of te joinen.", en: "Landing — wordmark in Caveat, primary call-to-action to create or join a room." } },
      { src: "/projects/inkling/tekenaar.png", caption: { nl: "Tekenscherm voor de tekenaar — het volledige woord zichtbaar boven het canvas, tekentools eronder.", en: "Drawing screen for the artist — the full word visible above the canvas, drawing tools below." } },
      { src: "/projects/inkling/raders.png", caption: { nl: "Zelfde scherm voor de raders — het woord toont enkel de blanks, met de live chat/gokkenlijst en spelerslijst in de zijbalk.", en: "Same screen for the bettors — the word only shows the blanks, with the live chat/betting list and player list in the sidebar." } },
      { src: "/projects/inkling/einde.png", caption: { nl: "Eindstand — volledige ranking met scores, en de optie om via \"Nog een keer\" een nieuwe game in dezelfde room te starten.", en: "Final standings — complete ranking with scores, and the option to start a new game in the same room via \"One more time\"." } },
    ],
    sections: [
      {
        index: "01",
        title: { nl: "Over het project", en: "About the project" },
        body: {
          nl: "Inkling is een echt multiplayer spel: spelers maken of joinen een room via een korte code, kiezen een woord uit een categorie en tekenen om beurten terwijl de rest live meeraadt via chat. Score gaat op snelheid — hoe sneller een correcte gok, hoe meer punten, met een bonus voor de tekenaar per juiste gok.",
          en: "Inkling is a real multiplayer game: players create or join a room via a short code, pick a word from a category, and take turns drawing while the rest guess live via chat. Scoring is speed-based — the faster a correct guess, the more points, with a bonus for the drawer per correct guess.",
        },
      },
      {
        index: "02",
        title: { nl: "Architectuur & realtime", en: "Architecture & real-time" },
        body: {
          nl: "Next.js + TypeScript op Vercel, met Supabase als backend: Postgres met Row Level Security, Realtime en Edge Functions (Deno). Het te raden woord staat in een aparte tabel met een RLS-policy die het enkel leesbaar maakt voor de tekenaar van die ronde — structureel onmogelijk te omzeilen via devtools. Scoring en woordselectie lopen via server-side Edge Functions met de service role key, zodat een gemanipuleerde client zichzelf geen punten kan toekennen. Drie realtime-mechanismen worden bewust verschillend ingezet: Broadcast voor tekenstrokes en chat (laagste latency), Postgres Changes voor scores en spelerstatus (betrouwbare bron van waarheid), en Presence wordt bewust vermeden omdat spelersaanwezigheid een refresh moet overleven.",
          en: "Next.js + TypeScript on Vercel, with Supabase as backend: Postgres with Row Level Security, Realtime and Edge Functions (Deno). The word to guess lives in a separate table with an RLS policy that only makes it readable to that round's drawer — structurally impossible to bypass via devtools. Scoring and word selection run through server-side Edge Functions with the service role key, so a manipulated client can't award itself points. Three real-time mechanisms are deliberately used differently: Broadcast for drawing strokes and chat (lowest latency), Postgres Changes for scores and player status (reliable source of truth), and Presence is deliberately avoided since player presence needs to survive a refresh.",
        },
      },
      {
        index: "03",
        title: { nl: "Belangrijkste features", en: "Key features" },
        body: {
          nl: "Eerlijke tekenvolgorde (iedereen tekent gegarandeerd één keer voor iemand een tweede beurt krijgt), live samen tekenen op canvas met normalisatie voor verschillende schermformaten, volledige rondecyclus met scorebord, geluidseffecten, en een volledig responsive layout die op mobiel automatisch herschikt naar canvas → chat → spelerslijst.",
          en: "Fair drawing rotation (everyone draws exactly once before anyone gets a second turn), live shared canvas drawing normalized across different screen sizes, a full round cycle with a scoreboard, sound effects, and a fully responsive layout that reorders to canvas → chat → player list on mobile.",
        },
      },
    ],
  },
  {
    slug: "fifa-world-cup-2026",
    name: { nl: "FIFA World Cup 2026 — Team Prediction", en: "FIFA World Cup 2026 — Team Prediction" },
    tagline: {
      nl: "Een Spring Boot webapplicatie waarin gebruikers teams vormen met vrienden en tegen elkaar strijden door WK-wedstrijden te voorspellen.",
      en: "A Spring Boot web application where users form teams with friends and compete by predicting World Cup match results.",
    },
    category: {
      nl: "Full-stack Java · School-opdracht · Enterprise Web Development",
      en: "Full-stack Java · School assignment · Enterprise Web Development",
    },
    desc: {
      nl: "Gebouwd voor het vak Enterprise Web Development: Java. Teams vormen, wedstrijden voorspellen en strijden om de ranking.",
      en: "Built for the course Enterprise Web Development: Java. Form teams, predict matches, and compete on the leaderboard.",
    },
    techStack: ["Java", "Spring Boot", "Spring Security", "Thymeleaf", "JPA / Hibernate", "MySQL", "REST API"],
    liveUrl: "",
    showLiveButton: false,
    githubUrl: "https://github.com/jellev00/fifa_world_cup_2026",
    heroImage: "/projects/fifa-world-cup-2026/home.png",
    gallery: [
      { src: "/projects/fifa-world-cup-2026/home.png", caption: { nl: "Home page", en: "Home page" }  },
      { src: "/projects/fifa-world-cup-2026/team.png", caption: { nl: "Team page", en: "Team page" }  },
      { src: "/projects/fifa-world-cup-2026/prediction.png", caption: { nl: "Wedstrijdvoorspelling page", en: "Match prediction page" } },
      { src: "/projects/fifa-world-cup-2026/admin.png", caption: { nl: "Admin page", en: "Admin page" } },
    ],
    sections: [
      {
        index: "01",
        title: { nl: "Over het project", en: "About the project" },
        body: {
          nl: "Gebruikers maken een account aan, vormen of joinen teams via een invite-code, en voorspellen de uitslag van elke WK-wedstrijd. Voorspellingen kunnen bijgewerkt worden tot 1 uur voor aftrap, waarna scores automatisch berekend worden — met bonuspunten voor wie als enige in het team de juiste exacte score voorspelde. Admins beheren de wedstrijden en voeren de officiële resultaten in.",
          en: "Users create an account, form or join teams via an invite code, and predict the outcome of every World Cup match. Predictions can be edited until 1 hour before kickoff, after which scores are calculated automatically — with bonus points for being the only team member with the exact correct score. Admins manage matches and enter official results.",
        },
      },
      {
        index: "02",
        title: { nl: "Architectuur", en: "Architecture" },
        body: {
          nl: "Spring Boot met Thymeleaf voor server-side rendering, Spring Security voor rolgebaseerde autorisatie (Guest, User, Admin), en JPA/Hibernate boven MySQL als datalaag. Externe wedstrijddata en stadioncapaciteit worden opgehaald via een reactieve WebClient-integratie met een REST API. Validatie loopt via Jakarta Validation met custom validator-annotaties, en de UI ondersteunt internationalisatie via resource bundles.",
          en: "Spring Boot with Thymeleaf for server-side rendering, Spring Security for role-based authorization (Guest, User, Admin), and JPA/Hibernate over MySQL as the data layer. External match data and stadium capacity are fetched via a reactive WebClient integration with a REST API. Validation runs through Jakarta Validation with custom validator annotations, and the UI supports internationalization via resource bundles.",
        },
      },
      {
        index: "03",
        title: { nl: "Belangrijkste features", en: "Key features" },
        body: {
          nl: "Teams aanmaken en joinen via invite-codes, een privé teamscorebord naast een publieke Top 10 ranking, admin-beheer van wedstrijden en resultaten, en een uitgebreide testsuite (MVC-, REST-controller-, security- en validatietests) om de correctheid van de scoringslogica te garanderen.",
          en: "Creating and joining teams via invite codes, a private team scoreboard alongside a public Top 10 ranking, admin management of matches and results, and an extensive test suite (MVC, REST controller, security and validation tests) to guarantee the correctness of the scoring logic.",
        },
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
