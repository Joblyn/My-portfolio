import { Work } from "@/interfaces/work";

const works: Work[] = [
  {
    id: "tnnafrica",
    title: "TNNAfrica",
    info: "Doctor-Patient health care web application for TNNAfrica. It includes document sharing, appointment booking, and video call sessions.",
    article: [
      "Doctor-Patient health care web application for TNNAfrica. It includes document sharing, appointment booking, and video call sessions.",
      "Collaborated with a team of developers and designers, working as the frontend engineer. Built the frontend of the application using ReactJS, Redux state management, consuming RESTAPIs for backend communication. Video call sessions were built using WebRTC.",
    ],
    banner: "banner.svg",
    width: 903,
    height: 6723,
    pages: [
      {
        src: "landing.svg",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "appointment-feature.svg",
        alt: "Appointment feature",
        caption: "Book an appointment with a doctor",
      },
      {
        src: "contact.svg",
        alt: "Contact page",
        caption: "Contact Us page",
      },
      {
        src: "mobile-contact.svg",
        alt: "Mobile view of contact page",
        caption: "Mobile view of contact page",
      },
      {
        src: "speak-to-us.svg",
        alt: "Speak to us page",
        caption: "Speak to us page",
      },
    ],
    tags: ["ReactJS", "Redux", "RESTAPI", "WebRTC"],
    live: "https://tnnafrica.com/",
    github: "",
  },
  {
    id: "cv-builder",
    title: "CV Builder",
    info: "A simple CV builder web app built with ReactJs and Firebase. It allows users to create a CV quickly by filling a set of forms. Users can save their progress and continue creating their CV later.",
    article: [
      "A simple CV builder web app built with ReactJs and Firebase. It allows users to create a CV quickly by filling a set of forms. Users can save their progress and continue creating their CV later.",
      " Users can preview CV while creating it and download it as a PDF file. They can also edit a CV after building it.",
    ],
    banner: "banner.svg",
    height: 825,
    width: 1440,
    pages: [
      {
        src: "landing.svg",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "login.svg",
        alt: "Login page",
        caption:
          "Login page, where users login with existing account or create a new one",
      },
      {
        src: "personal-info.svg",
        alt: "Personal info page",
        caption: "Personal info form page",
      },
      {
        src: "mobile-work-exp.svg",
        alt: "Work experience page on mobile",
        caption: "Mobile view of work experience form page",
      },
    ],
    tags: ["ReactJs", "Redux", "Firebase"],
    live: "https://cv-builder-c0429.web.app",
    github: "https://github.com/Joblyn/Cv-Builder",
  },
  {
    id: "netflix",
    title: "Netflix Clone",
    info: "A clone of netflix official web app, built with ReactJS, Firebase, and GSAP library. A user is able to authenticate into his account, view a catalogue of movies and series and watch a simple video.",
    article: [
      "A clone of netflix official web app, built with ReactJS, Firebase, and GSAP library. A user is able to authenticate into his account, view a catalogue of movies and series and watch a simple video.",
      "It was built with React Context API, Redux state management library, and Firestore database.",
    ],
    banner: "banner.svg",
    height: 833,
    width: 6723,
    pages: [
      {
        src: "landing.svg",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "login.svg",
        alt: "Login page",
        caption: "Login page, where user login or create a new one",
      },
      {
        src: "user-preview.svg",
        alt: "Select user page",
        caption: "Select the user's profile to watch in",
      },
      {
        src: "mobile-browse.svg",
        alt: "Mobile view of movies page",
        caption: "Mobile view of movies page",
      },
      {
        src: "movie-info.svg",
        alt: "Preview movie info",
        caption: "Read about a movie before watching",
      },
    ],
    tags: ["ReactJS", "Firebase"],
    live: "https://netflix-clone-40b11.web.app/",
    github: "https://github.com/Joblyn/Netflix-clone",
  },
  {
    id: "wgh-reseller-site",
    title: "Whogohost Reseller Center",
    info: "Unique, dynamic, reseller site auto generated for individual resellers of Whogohost, a web hosting company. Website's data is auto generated according to the reseller's domain.",
    article: [
      "Unique, dynamic, reseller site auto generated for individual resellers of Whogohost, a web hosting company. Website's data is auto generated according to the reseller's domain.",
      "Users are able to search for a domain name, register a domain name, and manage their domains on the clientarea. They can also manage their hosting accounts, and view (and download) their invoices. Buil with ReactJS, Redux and RESTAPIs. Payment integration was done using Paystack and Flutterwave.",
    ],
    banner: "banner.svg",
    width: 8320,
    height: 828,
    pages: [
      {
        src: "landing.svg",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "services.svg",
        alt: "Services preview on landing page",
        caption: "Services preview on landing page",
      },
      {
        src: "domain-search.svg",
        alt: "Domain search page",
        caption: "Search a domain's availability",
      },
      {
        src: "mobile-domain-transfer.svg",
        alt: "Mobile view of domain transfer page",
        caption: "Transfer an existing domain to Whogohost",
      },
      {
        src: "dasjboard.svg",
        alt: "Dashboard page",
        caption: "Client dashboard",
      },
      {
        src: "hosting-plans.svg",
        alt: "Hosting plans page",
        caption: "View hosting plans",
      },
    ],
    tags: ["ReactJS", "Redux", "Paystack", "Flutterwave", "Domains"],
    live: "https://whogohost.myreseller.site",
    github: "",
  },
  {
    id: "resell-wgh",
    title: "Whogohost Reseller Landing Page",
    info: "Beautiful, aesthetic, fully responsive landing page for Whogohost resellers, capturing brand identitiy and elegance.",
    article: [
      "Beautiful, aesthetic, fully responsive landing page for Whogohost resellers, capturing brand identitiy and elegance.",
      "Developed with HTML, CSS, JavaScript and jquery.",
    ],
    banner: "banner.svg",
    width: 5162,
    height: 828,
    pages: [
      {
        src: "hero.svg",
        alt: "Hero section",
        caption: "Hero section",
      },
      {
        src: "features.svg",
        alt: "Why choose us",
        caption: "Features section",
      },
      {
        src: "mobile-about.svg",
        alt: "who are we (mobile)",
        caption: "Mobile view of about section",
      },
      {
        src: "about.svg",
        alt: "who are we",
        caption: "About section",
      },
    ],
    tags: ["HTML", "CSS", "Javscript", "jquery"],
    live: "https://resell.whoghost.com",
    github: "",
  },
  {
    id: "exowem",
    title: "Exowem",
    info: "Web application for trading bitcoin and giftcards, built with ReactJS.",
    article: [
      "Beautiful, aesthetic web application for trading of bitcoin and gitcards, with selective dark theme.",
      "Developed with TailwindCSS and ReactJS.",
    ],
    banner: "banner.svg",
    width: 7192,
    height: 828,
    pages: [
      {
        src: "landing.svg",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "mobile-landing-night.svg",
        alt: "landing page night mode (mobile)",
        caption: "Mobile view of landing page in dark theme",
      },
      {
        src: "dashboard.svg",
        alt: "dashboard",
        caption: "User dashboard showing approximate bitcoing balance.",
      },
      {
        src: "dashboard-offers.svg",
        alt: "user offers in night mode",
        caption: "User's offers in night mode",
      },
      {
        src: "mobile-dashboard-offers.svg",
        alt: "user offers in night mode (mobile)",
        caption: "Mobile view of user's  offers in night mode",
      },
      {
        src: "dashboard-giftcard.svg",
        alt: "user giftcards in night mode",
        caption: "User's giftcards in night mode",
      },
    ],
    tags: ["ReactJS", "Redux", "RESTAPI"],
    live: "https://exowem-e932d.web.app",
    github: "https://github.com/Joblyn/Exowem",
  },
];

export default works;
