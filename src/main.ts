import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleDoubleDown,
    faAngleDoubleRight,
    faHeart,
    faSave,
    faCompactDisc,
    faBookOpen,
    faMoon,
    faMapMarkerAlt,
    faStream,
    faBolt,
    faChevronLeft,
    faChevronRight,
    faTimes,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faPatreon,
    faWindows,
    faLinux,
    faApple,
    faDiscord,
    faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import "./assets/main.css";
library.add(
    faAngleDoubleDown,
    faAngleDoubleRight,
    faHeart,
    faSave,
    faGithub,
    faPatreon,
    faWindows,
    faLinux,
    faApple,
    faCompactDisc,
    faBookOpen,
    faMoon,
    faMapMarkerAlt,
    faStream,
    faDiscord,
    faBolt,
    faAndroid,
    faChevronLeft,
    faChevronRight,
    faTimes,
    faBars);
createApp(App).component("Icon", FontAwesomeIcon).mount("#app");