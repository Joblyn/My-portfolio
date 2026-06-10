import { Social } from "@/interfaces/social";
import {
  faDev,
  faGithub,
  faHashnode,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials: Social[] = [
  {
    name: "Twitter",
    icon: faXTwitter,
    alt: "twitter",
    link: "https://twitter.com/Joblyn/",
  },
  {
    name: "Github",
    icon: faGithub,
    alt: "github",
    link: "https://github.com/Joblyn/",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    alt: "linkedin",
    link: "https://www.linkedin.com/in/job-oaikhenah/",
  },
  {
    name: "Dev",
    icon: faDev,
    alt: "dev.to blog",
    link: "https://dev.to/joblyn",
  },
  {
    name: "Hashnode",
    icon: faHashnode,
    alt: "hashnode blog",
    link: "https://hashnode.com/@Joblyn",
  },
];

export default socials;
