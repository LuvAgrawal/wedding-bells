import LanguageIcon from "@mui/icons-material/Language";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import wedding1 from "../images/wedding1.jpg";
import wedding2 from "../images/wedding2.jpeg";
import wedding3 from "../images/wedding3.jpg";
import wedding4 from "../images/wedding4.jpg";

export const swiperImages = [
  {
    photo: wedding1,
    alt: "Wedding Image 1",
  },
  {
    photo: wedding2,
    alt: "Wedding Image 2",
  },
  {
    photo: wedding3,
    alt: "Wedding Image 3",
  },
  {
    photo: wedding4,
    alt: "Wedding Image 4",
  },
];

export const servicesData = [
  {
    icon: <LanguageIcon />,
    title: "Wedding Invitation",
    desc: "Wedding invitation websites that gives your wedding an extra zing. ",
  },
  {
    icon: <Diversity1Icon />,
    title: "Family Tree",
    desc: "Showcase your family members easily",
  },
  {
    icon: <RememberMeIcon />,
    title: "Lifetime Memory",
    desc: "A digital catalogue of your journey in your pocket.",
  },
];
