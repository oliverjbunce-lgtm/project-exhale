"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    number: "01",
    name: "Conference speaking",
    summary:
      "Keynotes that make the science of stress, regulation and sustainable performance useful in the room — not just interesting in theory.",
    format: "45–60 minute keynote",
    suitedTo: "Conferences, events and organisation-wide learning",
    detail:
      "Jo translates evidence into practical actions people can understand quickly and use immediately. The emphasis is on making complex physiology relevant to real pressure, real decisions and real working lives.",
  },
  {
    number: "02",
    name: "Workplace workshops",
    summary:
      "Interactive sessions that give teams practical ways to work with stress, recovery, resilience and performance.",
    format: "Interactive team session",
    suitedTo: "Teams wanting practical, shared tools",
    detail:
      "Workshops create space to understand what is happening under pressure, practise useful strategies and connect the Project Exhale framework to the realities of the team. Delivery is shaped around the organisation rather than pulled from a fixed template.",
  },
  {
    number: "03",
    name: "Leadership development",
    summary:
      "Deeper work for leaders who want steadier decision-making, stronger regulation and healthier team cultures.",
    format: "Tailored leadership programme",
    suitedTo: "Managers and leaders",
    detail:
      "Leadership work connects nervous-system regulation with the moments that matter: pressure, boundaries, communication, recovery and decision-making. The aim is to make sustainable performance part of how leaders operate, not another initiative sitting beside the work.",
  },
  {
    number: "04",
    name: "Executive coaching",
    summary:
      "One-to-one work shaped around the pressure, priorities and performance demands of an individual leader.",
    format: "One-to-one coaching",
    suitedTo: "Individual leaders and executives",
    detail:
      "Coaching creates room to work more personally with the patterns, pressure and behaviours affecting performance. The same Project Exhale principles are applied in a way that fits the person rather than a group programme.",
  },
];

export default function ServiceExplorer() {
  const [active, setActive] = useState<number | null>(0);

  function enquire(serviceName: string) {
    window.dispatchEvent(
      new CustomEvent("project-exhale:interest", { detail: serviceName }),
    );
  }

  return (
    <div className="service-explorer">
      {services.map((service, index) => {
        const isOpen = active === index;

        return (
          <article
            className={`service-explorer-item${isOpen ? " is-open" : ""}`}
            key={service.number}
          >
            <button
              className="service-explorer-trigger"
              type="button"
              onClick={() => setActive(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="service-number">{service.number}</span>
              <span className="service-explorer-title-wrap">
                <span className="service-explorer-title">{service.name}</span>
                <span className="service-explorer-summary">{service.summary}</span>
              </span>
              <span className="service-explorer-toggle" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="service-explorer-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="service-explorer-panel-inner">
                    <div className="service-explorer-meta">
                      <div>
                        <span>Format</span>
                        <strong>{service.format}</strong>
                      </div>
                      <div>
                        <span>Designed for</span>
                        <strong>{service.suitedTo}</strong>
                      </div>
                    </div>

                    <div className="service-explorer-detail">
                      <p>{service.detail}</p>
                      <p className="service-framework-note">
                        The work can draw from Regulate, Recover, Energise and Align depending on the context and what your people need.
                      </p>
                      <a
                        href="#contact"
                        className="service-enquire-link"
                        onClick={() => enquire(service.name)}
                      >
                        Enquire about {service.name.toLowerCase()} <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
