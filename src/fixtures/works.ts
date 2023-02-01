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
    paragraphs: [
      "I am a huge board game fan and collector. And, as a UX designer and game designer, I'd been thinking for a while now that I could put all these passions together into creating digital board games.",
      "I've made this game using Vue.js for the front end (with PWA support) and Firebase to manage the real-time updates and did all the UI and art direction for it.",
    ],
    banner: "banner.png",
    width: 903,
    height: 6723,
    pages: [
      {
        src: "page1.png",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "page2.png",
        alt: "Appointment feature",
        caption: "Book an appointment with a doctor",
      },
      {
        src: "page3.png",
        alt: "Contact page",
        caption: "Contact Us page",
      },
      {
        src: "page4.png",
        alt: "Mobile view of contact page",
        caption: "Mobile view of contact page",
      },
      {
        src: "page5.png",
        alt: "Speak to us page",
        caption: "Speak to us page",
      },
    ],
    tags: ["ReactJS", "Redux", "RESTAPI", "WebRTC"],
    live: "tnnafrica.com/",
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
    banner: "banner.png",
    height: 825,
    width: 1440,
    paragraphs: [
      "I am a huge board game fan and collector. And, as a UX designer and game designer, I'd been thinking for a while now that I could put all these passions together into creating digital board games.",
      "I've made this game using Vue.js for the front end (with PWA support) and Firebase to manage the real-time updates and did all the UI and art direction for it.",
    ],
    pages: [
      {
        src: "page1.png",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "page2.png",
        alt: "Login page",
        caption:
          "Login page, where users login with existing account or create a new one",
      },
      {
        src: "page3.png",
        alt: "Personal info page",
        caption: "Personal info form page",
      },
      {
        src: "page4.png",
        alt: "Work experience page on mobile",
        caption: "Mobile view of work experience form page",
      },
    ],
    tags: ["ReactJs", "Redux", "Firebase"],
    live: "cv-builder-c0429.web.app",
    github: "github.com/Joblyn/Cv-Builder",
  },
  {
    id: "netflix",
    title: "Netflix Clone",
    info: "A clone of netflix official web app, built with ReactJS, Firebase, and GSAP library. A user is able to authenticate into his account, view a catalogue of movies and series and watch a simple video.",
    article: [
      "A clone of netflix official web app, built with ReactJS, Firebase, and GSAP library. A user is able to authenticate into his account, view a catalogue of movies and series and watch a simple video.",
      "It was built with React Context API, Redux state management library, and Firestore database.",
    ],
    paragraphs: [
      "I am a huge board game fan and collector. And, as a UX designer and game designer, I'd been thinking for a while now that I could put all these passions together into creating digital board games.",
      "I've made this game using Vue.js for the front end (with PWA support) and Firebase to manage the real-time updates and did all the UI and art direction for it.",
    ],
    banner: "banner.png",
    height: 833,
    width: 6723,
    pages: [
      {
        src: "page1.png",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "page2.png",
        alt: "Login page",
        caption: "Login page, where user login or create a new one",
      },
      {
        src: "page3.png",
        alt: "Select user page",
        caption: "Select the user's profile to watch in",
      },
      {
        src: "page4.png",
        alt: "Mobile view of movies page",
        caption: "Mobile view of movies page",
      },
      {
        src: "ppage5.png",
        alt: "Preview movie info",
        caption: "Read about a movie before watching",
      },
    ],
    tags: ["ReactJS", "Firebase"],
    live: "netflix-clone-40b11.web.app/",
    github: "github.com/Joblyn/Netflix-clone",
  },
  {
    id: "wgh-reseller-site",
    title: "Whogohost Reseller Center",
    info: "Unique, dynamic, reseller site auto generated for individual resellers of Whogohost, a web hosting company. Website's data is auto generated according to the reseller's domain.",
    article: [
      "Unique, dynamic, reseller site auto generated for individual resellers of Whogohost, a web hosting company. Website's data is auto generated according to the reseller's domain.",
      "Users are able to search for a domain name, register a domain name, and manage their domains on the clientarea. They can also manage their hosting accounts, and view (and download) their invoices. Buil with ReactJS, Redux and RESTAPIs. Payment integration was done using Paystack and Flutterwave.",
    ],
    paragraphs: [
      "I am a huge board game fan and collector. And, as a UX designer and game designer, I'd been thinking for a while now that I could put all these passions together into creating digital board games.",
      "I've made this game using Vue.js for the front end (with PWA support) and Firebase to manage the real-time updates and did all the UI and art direction for it.",
    ],
    banner: "banner.png",
    width: 8320,
    height: 828,
    pages: [
      {
        src: "page1.png",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "page2.png",
        alt: "Services preview on landing page",
        caption: "Services preview on landing page",
      },
      {
        src: "page3.png",
        alt: "Domain search page",
        caption: "Search a domain's availability",
      },
      {
        src: "page4.png",
        alt: "Mobile view of domain transfer page",
        caption: "Transfer an existing domain to Whogohost",
      },
      {
        src: "page5.png",
        alt: "Dashboard page",
        caption: "Client dashboard",
      },
      {
        src: "page6.png",
        alt: "Hosting plans page",
        caption: "View hosting plans",
      },
    ],
    tags: ["ReactJS", "Redux", "Paystack", "Flutterwave", "Domains"],
    live: "whogohost.myreseller.site",
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
    paragraphs: [
      "I am a huge board game fan and collector. And, as a UX designer and game designer, I'd been thinking for a while now that I could put all these passions together into creating digital board games.",
      "I've made this game using Vue.js for the front end (with PWA support) and Firebase to manage the real-time updates and did all the UI and art direction for it.",
    ],
    banner: "banner.png",
    width: 5162,
    height: 828,
    pages: [
      {
        src: "page1.png",
        alt: "Hero section",
        caption: "Hero section",
      },
      {
        src: "page2.png",
        alt: "Why choose us",
        caption: "Features section",
      },
      {
        src: "page3.png",
        alt: "who are we (mobile)",
        caption: "Mobile view of about section",
      },
      {
        src: "page4.png",
        alt: "who are we",
        caption: "About section",
      },
    ],
    tags: ["HTML", "CSS", "Javscript", "jquery"],
    live: "resell.whoghost.com",
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
    paragraphs: [
      "I am a huge board game fan and collector. And, as a UX designer and game designer, I'd been thinking for a while now that I could put all these passions together into creating digital board games.",
      "I've made this game using Vue.js for the front end (with PWA support) and Firebase to manage the real-time updates and did all the UI and art direction for it.",
    ],
    banner: "banner.png",
    width: 7192,
    height: 828,
    pages: [
      {
        src: "page1.png",
        alt: "Landing page",
        caption: "Landing page",
      },
      {
        src: "page2.png",
        alt: "landing page night mode (mobile)",
        caption: "Mobile view of landing page in dark theme",
      },
      {
        src: "page3.png",
        alt: "dashboard",
        caption: "User dashboard showing approximate bitcoing balance.",
      },
      {
        src: "page4.png",
        alt: "user offers in night mode",
        caption: "User's offers in night mode",
      },
      {
        src: "page5.png",
        alt: "user offers in night mode (mobile)",
        caption: "Mobile view of user's  offers in night mode",
      },
      {
        src: "page6.png",
        alt: "user giftcards in night mode",
        caption: "User's giftcards in night mode",
      },
    ],
    tags: ["ReactJS", "Redux", "RESTAPI"],
    live: "exowem-e932d.web.app",
    github: "github.com/Joblyn/Exowem",
  },
];

export default works;
