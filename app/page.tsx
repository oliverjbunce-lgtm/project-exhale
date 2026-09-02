"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ContactForm from "./ContactForm";
import MobileNav from "./MobileNav";
import ServiceExplorer from "./ServiceExplorer";

const framework = [
  {
    number: "01",
    name: "Regulate",
    label: "Create calm under pressure",
    body: "Breath and nervous-system tools for real-time stress management, clearer thinking and steadier decision-making.",
  },
  {
    number: "02",
    name: "Recover",
    label: "Restore capacity",
    body: "Practical sleep and recovery strategies that rebuild energy, sharpen focus and protect resilience over time.",
  },
  {
    number: "03",
    name: "Energise",
    label: "Move with purpose",
    body: "Movement strategies designed to lift energy, mood and cognitive performance without adding another task to the day.",
  },
  {
    number: "04",
    name: "Align",
    label: "Lead from what matters",
    body: "Values-led action for stronger boundaries, greater clarity and performance that remains sustainable.",
  },
];

const audiences = [
  "Corporate teams",
  "Managers & leaders",
  "Health & human services",
  "Education & schools",
];

const credibility = [
  {
    value: "20+",
    title: "Years in health & performance",
    body: "Two decades of experience translating health and performance science into practical change for real people.",
  },
  {
    value: "Physio",
    title: "Clinical foundation",
    body: "A physiotherapy background keeps the work grounded in how people actually function under stress and load.",
  },
  {
    value: "4",
    title: "Integrated performance shifts",
    body: "Regulate, Recover, Energise and Align are designed to work together rather than as isolated wellbeing tips.",
  },
  {
    value: "NZ",
    title: "Christchurch · nationwide",
    body: "Speaking, workshops, leadership development and coaching for organisations across New Zealand.",
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const exhaleSpacing = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["0.12em", "0.34em"],
  );
  const heroOpacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 0.9, 0]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Project Exhale home">
          <span>PROJECT</span>
          <span className="wordmark-exhale">EXHALE</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#framework">Framework</a>
          <a href="#work">Work with Jo</a>
          <a href="#jo">Meet Jo</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a conversation
        </a>

        <MobileNav />
      </header>

      <section ref={heroRef} id="top" className="hero-section">
        <div className="hero-grain" aria-hidden="true" />

        <motion.div
          className="hero-copy"
          style={{
            y: reduceMotion ? 0 : heroTextY,
            opacity: reduceMotion ? 1 : heroOpacity,
          }}
        >
          <p className="eyebrow">Science-based human performance</p>
          <h1>
            Pressure is
            <br />
            inevitable.
            <br />
            Staying there <em>isn’t.</em>
          </h1>
          <div className="accent-line" />
          <p className="hero-intro">
            Practical strategies for leaders and teams to regulate stress,
            restore capacity and perform with clarity.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#framework">
              Explore Project Exhale
            </a>
            <a className="text-link" href="#work">
              Bring Exhale to your team <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          style={{ y: reduceMotion ? 0 : heroImageY }}
        >
          <div className="portrait-shade" />
          <img
            src="https://images.squarespace-cdn.com/content/v1/6a376da1a775186cb973ccf4/4282b65c-4db7-4cd9-81d9-de2b4f12354f/JoeGoPhoto-94.jpg"
            alt="Jo Hopkinson-Haigh, founder of Project Exhale"
          />
        </motion.div>

        <motion.blockquote
          className="hero-quote"
          style={{ opacity: reduceMotion ? 1 : heroOpacity }}
        >
          <span className="quote-mark">“</span>
          Our nervous system influences every conversation, every decision and
          every leadership moment. Learning to regulate it changes everything.
          <cite>— Jo Hopkinson-Haigh</cite>
        </motion.blockquote>

        <div className="hero-exhale" aria-hidden="true">
          <motion.span
            style={{ letterSpacing: reduceMotion ? "0.22em" : exhaleSpacing }}
          >
            EXHALE
          </motion.span>
        </div>
      </section>

      <section className="statement-section">
        <p className="eyebrow">The idea behind Project Exhale</p>
        <div className="statement-grid">
          <h2>
            Better performance starts
            <br />
            with the person performing.
          </h2>
          <div className="statement-copy">
            <p>
              Sustainable performance is not another productivity system. It is
              the capacity to think clearly, recover properly and respond well
              when pressure rises.
            </p>
            <p>
              Project Exhale translates evidence from physiology, stress,
              recovery and behaviour into practical tools people can actually
              use in real life.
            </p>
          </div>
        </div>
        <div className="audience-line" aria-label="Who Project Exhale works with">
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </section>

      <section id="framework" className="framework-section">
        <div className="section-heading">
          <p className="eyebrow">The Project Exhale framework</p>
          <h2>
            Four shifts.
            <br />
            One integrated approach.
          </h2>
          <p>
            The framework moves from immediate regulation to the deeper habits
            that support performance over time.
          </p>
        </div>

        <div className="framework-list">
          {framework.map((item) => (
            <motion.article
              key={item.number}
              className="framework-row"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="framework-number">{item.number}</span>
              <div className="framework-name-wrap">
                <h3>{item.name}</h3>
                <span>{item.label}</span>
              </div>
              <p>{item.body}</p>
              <span className="framework-arrow" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="work-intro">
          <p className="eyebrow">Ways to work with Jo</p>
          <h2>Built around your people, not a template.</h2>
          <p>
            From a single keynote to deeper leadership work, delivery is shaped
            around the context, pressure points and outcomes of your organisation.
          </p>
        </div>

        <ServiceExplorer />
      </section>

      <section id="jo" className="jo-section">
        <div className="jo-image-wrap">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6a376da1a775186cb973ccf4/a1966a40-5560-4394-be1e-7e720ce55268/JoeGoPhoto-86.jpg"
            alt="Jo Hopkinson-Haigh"
          />
          <div className="jo-image-caption">
            <span>Physiotherapist</span>
            <span>Performance educator</span>
            <span>Founder</span>
          </div>
        </div>

        <div className="jo-copy">
          <p className="eyebrow">Meet Jo</p>
          <h2>
            Science. Experience.
            <br />
            Human understanding.
          </h2>
          <p className="jo-lead">
            I help leaders and organisations build sustainable performance by
            understanding the science behind stress, resilience and recovery.
          </p>
          <p>
            As a physiotherapist, mother of four and advocate for preventative
            health, Jo brings more than 20 years of health and performance
            experience to practical, down-to-earth programmes designed for busy
            people.
          </p>
          <p>
            Project Exhale was created to make complex science useful — through
            breath, sleep, movement and values-led performance strategies that
            fit into everyday life.
          </p>
          <a className="text-link" href="#contact">
            Talk with Jo <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="credibility-section" aria-labelledby="credibility-title">
        <div className="credibility-heading">
          <div>
            <p className="eyebrow">Experience behind the work</p>
            <h2 id="credibility-title">Grounded in more than a good idea.</h2>
          </div>
          <p>
            Project Exhale brings together clinical experience, performance
            education and practical tools that are designed to make sense in the
            middle of a real working day.
          </p>
        </div>

        <div className="credibility-grid">
          {credibility.map((item) => (
            <article className="credibility-item" key={item.title}>
              <span className="credibility-value">{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-statement">
        <p className="eyebrow">Pressure will always exist</p>
        <h2>
          The goal isn’t to remove it.
          <br />
          It’s to change what happens next.
        </h2>
      </section>

      <section id="contact" className="contact-section contact-with-form">
        <div>
          <p className="eyebrow">Christchurch · Working nationwide</p>
          <h2>Start the conversation.</h2>
          <p className="contact-intro-copy">
            Looking for a keynote, workshop, leadership programme or one-to-one
            coaching? Tell Jo what is happening in your team and what you would
            like to change.
          </p>
          <div className="direct-contact">
            <a href="mailto:jo@project-exhale.co.nz">jo@project-exhale.co.nz ↗</a>
            <a href="tel:+64211163063">021 116 3063</a>
          </div>
        </div>

        <ContactForm />
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top">
          <span>PROJECT</span>
          <span className="wordmark-exhale">EXHALE</span>
        </a>
        <p>Science-based human performance.</p>
        <p>© {new Date().getFullYear()} Project Exhale</p>
      </footer>
    </main>
  );
}
