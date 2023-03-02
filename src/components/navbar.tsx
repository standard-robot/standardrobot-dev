import {
    FiHome,
    FiClock,
    FiPaperclip,
    FiHeadphones,
    FiUser,
    FiBookOpen,
    FiSun,
    FiMoon,
    FiCommand,
    FiZap,
} from "react-icons/fi";

const NavbarItems = [
    {
        name: "Home",
        slug: "/",
        icon: FiHome,
    },
    {
        name: "About",
        slug: "/about",
        icon: FiUser,
    },
    {
        name: "Now",
        slug: "/now",
        icon: FiClock,
    },
    {
        name: "Links",
        slug: "/links",
        icon: FiPaperclip,
    },
    // {
    //   name: "About",
    //   slug: "/about",
    //   icon: FiKey,
    // },
    {
        name: "Guestbook",
        slug: "/guestbook",
        icon: FiBookOpen,
    },
    {
        name: "Spotify",
        slug: "/spotify",
        icon: FiHeadphones,
    },
    {
        name: "Dashboard",
        slug: "/dashboard",
        icon: FiZap,
    },
];
const navbar = {};

export default navbar;
