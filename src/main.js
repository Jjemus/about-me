import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createI18n} from 'vue-i18n';

// createApp(App).mount('#app')

const messages = {
    en: {
        hi: "Hi!",
        greeting: "My name is Peter Unterthurner and I'm a passionate web developer specializing in Vue.js, Java Spring, Python,\n" +
            "Typo3 (although i wish i wouldn't) and\n" +
            "other modern web technologies.",
        tech: "I enjoy solving complex problems and building elegant user experiences. During my professional life I've worked\n" +
            "on a variety of projects.",
        projects: "The bigger ones include: a web application for Insurance Providers, a WebApp Civil Protection Services, various\n" +
            "WebApps for snowmaking systems, and a Webpresence for a local chain of banks.",
        hobbies: "In my free time, I love cooking, hiking and travelling the nordic countries (Although i wish i could do that\n" +
            "more often).",
        dog: "I'm a big dog enthusiast and I have a lovely swiss mountain dog named Leif. He's my best friend and always keeps\n" +
            "me company while I'm coding.\n" +
            "Or more often he tries to distract me from coding so that I go on a walk with him.",
        github: "Check out my GitHub",
        cv: "Download my CV",
    },
    it: {
        hi: "Ciao!",
        greeting: "Mi chiamo Peter Unterthurner e sono un appassionato sviluppatore web specializzato in Vue.js, Java Spring, Python,\n" +
            "Typo3 (anche se vorrei non esserlo) e\n" +
            "altre tecnologie web moderne.",
        tech: "Mi piace risolvere problemi complessi e creare esperienze utente eleganti. Durante la mia carriera professionale ho lavorato\n" +
            "su una varietà di progetti.",
        projects: "I più grandi includono: un'applicazione web per i fornitori di assicurazioni, una WebApp per i servizi di protezione civile, varie\n" +
            "WebApp per sistemi di innevamento e una presenza web per una catena locale di banche.",
        hobbies: "Nel mio tempo libero, amo cucinare, fare escursioni e viaggiare nei paesi nordici (anche se vorrei poterlo fare\n" +
            "più spesso).",
        dog: "Sono un grande appassionato di cani e ho un adorabile cane di montagna svizzero di nome Leif. È il mio migliore amico e mi tiene sempre\n" +
            "compagnia mentre programmo.\n" +
            "O più spesso cerca di distrarmi dalla programmazione per farmi fare una passeggiata con lui.",
        github: "Dai un'occhiata al mio GitHub",
        cv: "Scarica il mio CV",
    },
    de: {
        hi: "Hallo!",
        greeting: "Mein Name ist Peter Unterthurner und ich bin ein leidenschaftlicher Webentwickler, der sich auf Vue.js, Java Spring, Python,\n" +
            "Typo3 (obwohl ich wünschte, ich wäre es nicht) und\n" +
            "andere moderne Webtechnologien spezialisiert hat.",
        tech: "Ich mag es, komplexe Probleme zu lösen und elegante Benutzererlebnisse zu schaffen. Während meines Berufslebens habe ich an\n" +
            "einer Vielzahl von Projekten gearbeitet.",
        projects: "Die größeren beinhalten: eine Webanwendung für Versicherungsanbieter, eine WebApp für den Zivilschutz, verschiedene\n" +
            "WebApps für Beschneiungssysteme und eine Webpräsenz für eine lokale Bankkette.",
        hobbies: "In meiner Freizeit koche ich gerne, wandere und reise in die nordischen Länder (obwohl ich wünschte, ich könnte das\n" +
            "öfter tun).",
        dog: "Ich bin ein großer Hundeliebhaber und habe einen liebenswerten Schweizer Sennenhund namens Leif. Er ist mein bester Freund und leistet mir immer\n" +
            "beim Programmieren Gesellschaft.\n" +
            "Oder er versucht mich vom Programmieren abzulenken, damit ich mit ihm spazieren gehe.",
        github: "Schau dir mein GitHub an",
        cv: "Lade meinen Lebenslauf herunter",
    },
};

// Create an instance of vue-i18n
const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en', // Fallback language if translation is missing
    messages, // Translations
});

// Create and mount the app
const app = createApp(App);
app.use(i18n);
app.mount('#app');