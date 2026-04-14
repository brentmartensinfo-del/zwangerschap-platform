'use client';

import { useState } from 'react';

const SUBJECTS = [
  'Vraag over een cursus',
  'Vraag over mijn boeking',
  'Ik ben aanbieder en wil me aansluiten',
  'Technisch probleem',
  'Anders',
];

const INPUT_CLASS =
  'w-full h-12 px-4 border border-black/[0.08] rounded-md bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-black/20 transition-colors font-sans';

export default function ContactForm() {
  const [subject, setSubject] = useState('');

  return (
    <div className="bg-white border border-black/[0.08] rounded-xl p-8 md:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
      <form className="flex flex-col" noValidate>

        {/* Naam row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <FormGroup label="Voornaam" htmlFor="firstname">
            <input
              id="firstname"
              type="text"
              placeholder="Bijv. Sanne"
              className={INPUT_CLASS}
            />
          </FormGroup>
          <FormGroup label="Achternaam" htmlFor="lastname">
            <input
              id="lastname"
              type="text"
              placeholder="Bijv. de Vries"
              className={INPUT_CLASS}
            />
          </FormGroup>
        </div>

        {/* E-mail */}
        <FormGroup label="E-mailadres" htmlFor="email" className="mb-6">
          <input
            id="email"
            type="email"
            placeholder="jouw@email.nl"
            className={INPUT_CLASS}
          />
        </FormGroup>

        {/* Onderwerp */}
        <FormGroup label="Onderwerp" htmlFor="subject" className="mb-6">
          <div className="relative">
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`${INPUT_CLASS} appearance-none pr-10 ${
                !subject ? 'text-muted-foreground' : 'text-foreground'
              }`}
            >
              <option value="" disabled>Kies een onderwerp</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <iconify-icon
              icon="lucide:chevron-down"
              class="text-base text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </FormGroup>

        {/* Bericht */}
        <FormGroup label="Bericht" htmlFor="message" className="mb-2">
          <textarea
            id="message"
            rows={5}
            placeholder="Typ hier je vraag of opmerking..."
            className="w-full px-4 pt-3 border border-black/[0.08] rounded-md bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-black/20 transition-colors resize-none font-sans"
          />
        </FormGroup>

        {/* Submit */}
        <button
          type="submit"
          className="mt-3 w-full h-12 bg-primary text-white rounded-md text-[15px] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          Verstuur bericht
        </button>
      </form>
    </div>
  );
}

function FormGroup({ label, htmlFor, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}