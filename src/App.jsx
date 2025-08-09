import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Rocket, Sparkles, MapPin } from 'lucide-react'
import { SiAngular, SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiMysql, SiHtml5, SiCss3, SiGit, SiVite } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useTypewriter } from './hooks/useTypewriter'
import Particles from './components/Particles'
import Magnetic from './components/Magnetic'
import Tilt from './components/Tilt'
import CommandPalette from './components/CommandPalette'
import UDPFlow from './components/previews/UDPFlow'
import BoardingPass from './components/previews/BoardingPass'
import WalletPreview from './components/previews/WalletPreview'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

const projects = [
  {
    key: 'airline',
    title: 'Airline System',
    description: 'Management app for flights, bookings and seats. Built with Angular, TypeScript and MySQL.',
    tech: ['Angular', 'TypeScript', 'MySQL'],
    link: '#',
    repo: 'https://github.com/you/airline-system',
  },
  {
    key: 'udpchat',
    title: 'UDP Local Chat',
    description: 'Local network chat using mixed cryptography (AES + RSA) built in Java with WebSockets.',
    tech: ['Java', 'AES', 'RSA', 'WebSockets'],
    link: '#',
    repo: 'https://github.com/you/udp-chat',
  },
  {
    key: 'wallet',
    title: 'Virtual Wallet',
    description: 'Simulated wallet with JWT auth, validations and transactions using Angular, TypeScript and MySQL.',
    tech: ['Angular', 'TypeScript', 'MySQL', 'JWT'],
    link: '#',
    repo: 'https://github.com/you/virtual-wallet',
  },
]

const skillsIcons = [
  { name: 'Angular', icon: SiAngular, color: '#dd0031' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', dark: true },
  { name: 'React', icon: SiReact, color: '#61dafb', dark: true },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8', dark: true },
  { name: 'MySQL', icon: SiMysql, color: '#00758f' },
  { name: 'Java', icon: FaJava, color: '#ea2d2e' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Git', icon: SiGit, color: '#f34f29' },
  { name: 'Vite', icon: SiVite, color: '#a855f7', dark: true },
]

// Dark theme by default (no toggle for simplicity)

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="container-grid my-16 scroll-mt-24">
      <div className="mb-6 flex items-center gap-2 text-white/70">
        {Icon && <Icon size={16} className="text-white/50" />}
        <h2 className="text-sm uppercase tracking-widest">{title}</h2>
      </div>
      <div className="grid items-stretch gap-6 md:grid-cols-12">
        {children}
      </div>
    </section>
  )
}

function Nav() {
  const { t, i18n } = useTranslation()
  const [langOpen, setLangOpen] = useState(false)
  const items = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ]
  return (
    <div className="sticky top-4 z-50">
      <div className="container-grid">
        <div className="glass flex items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-2 text-sm text-white/80">
            <Rocket size={16} />
            <span>Juan Francisco Sampieri</span>
          </a>
          <div className="flex items-center gap-2">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="rounded px-2 py-1 text-xs text-white/70 hover:text-white">
                {i.label}
              </a>
            ))}
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:text-white"
              >
                {i18n.language && i18n.language.startsWith('es') ? 'ES' : 'EN'}
              </button>
              {langOpen && (
                <div
                  role="listbox"
                  tabIndex={-1}
                  className="glass absolute right-0 z-50 mt-2 w-24 overflow-hidden rounded-md p-1 shadow-xl"
                  onMouseLeave={() => setLangOpen(false)}
                >
                  {['en','es'].map((lng) => (
                    <button
                      key={lng}
                      role="option"
                      aria-selected={(i18n.language || '').startsWith(lng)}
                      onClick={() => { i18n.changeLanguage(lng); setLangOpen(false) }}
                      className="block w-full rounded px-2 py-1 text-left text-xs text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const { t } = useTranslation()
  const title = t('hero.title')
  const { text } = useTypewriter(title, { speed: 67, startDelay: 500 })
  return (
    <section id="hero" className="container-grid relative flex min-h-screen flex-col">
      <div className="flex-1 grid items-center gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-balance text-4xl font-semibold tracking-tight md:text-6xl"
          >
            {/* Sizer reserves final space to avoid layout shift while typing */}
            <span aria-hidden="true" className="invisible block">
              <span className="font-mono text-white/90">$</span> {title}
            </span>
            {/* Visible typing text overlayed */}
            <span className="absolute inset-0">
              <span className="font-mono text-white/90">$</span>{' '}
              <span className="terminal-caret">{text}</span>
            </span>
          </motion.h1>
          <p className="mt-4 max-w-prose text-white/70">{t('hero.subtitle')}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#projects" className="shimmer-border rounded-md bg-[--color-brand] px-4 py-2 text-sm text-[--color-brand-foreground]">
              {t('hero.ctaProjects')}
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="#contact" className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              {t('hero.ctaContact')}
              </a>
            </Magnetic>
            <Badge>{t('hero.badge')}</Badge>
          </div>
          
        </div>
        <div className="md:col-span-5">
          <div className="glass grid h-full place-items-center p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="grid size-24 place-items-center rounded-full bg-gradient-to-tr from-[--color-brand]/20 to-white/10 text-white">
                <User />
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin size={16} /> <span>{t('hero.location')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Bottom-centered scroll hint - now at bottom of viewport */}
      <div className="pb-20 text-center">
        <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition-colors hover:bg-white/15">
          <span>{t('scroll.first')} {t('scroll.second')}</span>
          <span className="bounceY text-base">↓</span>
        </a>
      </div>
    </section>
  )
}

function About() {
  const { t } = useTranslation()
  return (
    <Section id="about" title={t('about.heading')} icon={User}>
      <div className="md:col-span-7">
        <div className="max-w-prose space-y-3 text-white/80">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="glass grid gap-3 p-4 text-sm text-white/80">
          <div className="flex items-center gap-2"><Sparkles size={16} /> {t('about.traits.learning')}</div>
          <div className="flex items-center gap-2"><Code2 size={16} /> {t('about.traits.clean')}</div>
          <div className="flex items-center gap-2"><Rocket size={16} /> {t('about.traits.shipping')}</div>
        </div>
      </div>
    </Section>
  )
}

function Skills() {
  const { t } = useTranslation()
  return (
    <Section id="skills" title={t('skills.heading')} icon={Code2}>
      <div className="md:col-span-12">
        <div className="glass p-4">
          <div className="mb-3 text-xs uppercase tracking-wider text-white/70">Stack</div>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {skillsIcons.map(({ name, icon: Icon, color, dark }) => (
              <div key={name} className="group flex flex-col items-center gap-2">
                <div className="rounded-md border border-white/10 bg-white/5 p-3 transition-colors group-hover:bg-white/10">
                  <Icon size={28} style={{ color }} />
                </div>
                <span className="text-xs text-white/70">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Projects() {
  const { t } = useTranslation()
  return (
    <Section id="projects" title={t('projects.heading')} icon={Rocket}>
      {projects.map((p) => (
        <div key={p.title} className="md:col-span-4 h-full">
          <Tilt className="h-full [transform-style:preserve-3d]">
            <div className="glass flex h-full flex-col justify-between p-4" style={{ transform: 'translateZ(10px)' }}>
            <div>
              <div className="mb-2 text-lg font-medium">{t(`projects.${p.key}.title`)}</div>
              <p className="text-sm text-white/70">{t(`projects.${p.key}.desc`)}</p>
                {p.key === 'airline' && (
                  <>
                    <BoardingPass />
                    
                  </>
                )}
                {p.key === 'udpchat' && (
                  <>
                    <UDPFlow />
                    
                  </>
                )}
                {p.key === 'wallet' && (
                  <>
                    <WalletPreview />
                
                  </>
                )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a href={p.link} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
                <Github size={16} /> {t('projects.code')}
              </a>
            </div>
            </div>
          </Tilt>
        </div>
      ))}
    </Section>
  )
}

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="container-grid my-16">
      <div className="glass flex flex-col items-center justify-between gap-3 px-4 py-4 md:flex-row">
        <div className="text-xs text-white/60">© {new Date().getFullYear()} Juan Francisco Sampieri. {t('footer.builtWith')}</div>
        <div className="flex gap-2">
          <a className="rounded p-2 text-white/70 hover:text-white" href="https://github.com/you" aria-label="GitHub"><Github size={18} /></a>
          <a className="rounded p-2 text-white/70 hover:text-white" href="https://linkedin.com/in/you" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className="rounded p-2 text-white/70 hover:text-white" href="#contact" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const { t } = useTranslation()
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      {/* color accents background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Particles count={70} />
        <div className="absolute -top-40 left-1/2 h-96 w-[110vw] -translate-x-1/2 rounded-full bg-[conic-gradient(from_45deg,theme(colors.violet.500/.35),theme(colors.fuchsia.400/.35),transparent_30%)] blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-[70vw] rounded-full bg-[radial-gradient(closest-side,theme(colors.cyan.500/.25),transparent)] blur-2xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-[50vw] rounded-full bg-[radial-gradient(closest-side,theme(colors.amber.400/.2),transparent)] blur-2xl" />
        <div className="scanlines" />
      </div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Section id="contact" title={t('contact.heading')} icon={Mail}>
        <div className="md:col-span-8">
          <div className="glass p-4">
            <div className="text-white/80">{t('contact.prompt')}</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <a href="mailto:you@example.com" className="rounded-md bg-[--color-brand] px-4 py-2 text-[--color-brand-foreground]">{t('contact.email')}</a>
              <a href="https://github.com/you" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:text-white"><Github size={16} /> GitHub</a>
              <a href="https://linkedin.com/in/you" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:text-white"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
      {/* Command Palette: open with Ctrl/Cmd + K */}
      <CommandPalette />
    </div>
  )
}

