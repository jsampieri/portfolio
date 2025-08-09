import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      nav: { about: 'About Me', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      hero: {
        title: 'Turning ideas into impactful digital products',
        subtitle: 'I’m Juan Francisco Sampieri — a junior fullstack developer and computer engineering student passionate about solving problems with clean code and great design. I thrive in fast-learning environments and love building apps that make a difference.',
        ctaProjects: 'See my work',
        ctaContact: 'Let\'s talk',
        badge: 'Open to work',
        location: 'Buenos Aires, Argentina'
      },
      scroll: {
        first: 'Scroll',
        second: 'to explore'
      },
      about: {
        heading: 'About',
        p1: 'I’m a curious and motivated junior developer who loves crafting interactive, user-friendly web applications. I learn quickly, adapt fast, and enjoy collaborating in small teams where every contribution counts.',
        p2: 'Right now, I’m diving deeper into frontend performance, reusable component patterns, and integrating backend services with scalable architectures.',
        traits: { learning: 'Learning daily', clean: 'Writing clean code', shipping: 'Shipping small features' }
      },
      skills: { heading: 'Skills', Core: 'Core', Frontend: 'Frontend', Tools: 'Tools' },
      projects: {
        heading: 'Projects',
        airline: { title: 'Airline System', desc: 'Management app for flights, bookings and seats. Built with Angular, TypeScript and MySQL.' },
        udpchat: { title: 'UDP Local Chat', desc: 'Local network chat using mixed cryptography (AES + RSA) built in Java with WebSockets.' },
        wallet: { title: 'Virtual Wallet', desc: 'Simulated wallet with JWT auth, validations and transactions using Angular, TypeScript and MySQL.' },
        code: 'Code'
      },
      contact: {
        heading: 'Contact',
        prompt: 'Want to collaborate or have an opportunity?',
        email: 'Email'
      },
      footer: { builtWith: 'Built with React + Vite.' }
    }
  },
  es: {
    translation: {
      nav: { about: "Sobre mí", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
      hero: {
        title: "Transformando ideas en productos digitales con impacto",
        subtitle: "Soy Juan Francisco Sampieri — desarrollador fullstack junior y estudiante de ingeniería en computación, apasionado por resolver problemas con código limpio y buen diseño. Me desenvuelvo en entornos de rápido aprendizaje y disfruto crear aplicaciones que marcan la diferencia.",
        ctaProjects: "Ver mi trabajo",
        ctaContact: "Hablemos",
        badge: "Disponible para trabajar",
        location: "Buenos Aires, Argentina"
      },
      scroll: {
        first: "Bajar",
        second: "para explorar"
      },
      about: {
        heading: "Sobre mí",
        p1: "Soy un desarrollador junior curioso y motivado, que disfruta crear aplicaciones web interactivas y fáciles de usar. Aprendo rápido, me adapto con facilidad y disfruto colaborar en equipos pequeños donde cada aporte cuenta.",
        p2: "Actualmente estoy profundizando en el rendimiento frontend, patrones de componentes reutilizables e integración de servicios backend con arquitecturas escalables.",
        traits: {
          learning: "Aprendiendo cada día",
          clean: "Escribiendo código limpio",
          shipping: "Entregando pequeñas funcionalidades"
        }
      },
      skills: {
        heading: "Habilidades",
        Core: "Núcleo",
        Frontend: "Frontend",
        Tools: "Herramientas"
      },
      projects: {
        heading: "Proyectos",
        airline: {
          title: "Sistema de Aerolínea",
          desc: "Aplicación de gestión para vuelos, reservas y asientos. Construida con Angular, TypeScript y MySQL."
        },
        udpchat: {
          title: "Chat Local UDP",
          desc: "Chat en red local utilizando criptografía mixta (AES + RSA) desarrollado en Java con WebSockets."
        },
        wallet: {
          title: "Billetera Virtual",
          desc: "Simulación de billetera con autenticación JWT, validaciones y transacciones usando Angular, TypeScript y MySQL."
        },
        code: "Código"
      },
      contact: {
        heading: "Contacto",
        prompt: "¿Quieres colaborar o tienes una oportunidad?",
        email: "Correo"
      },
      footer: {
        builtWith: "Construido con React + Vite."
      }
    }
  }
  
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  })

export default i18n


