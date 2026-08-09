import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { CONTACT, whatsappLink, phoneTel, IMAGES, CAPACITY } from "../../lib/config";
import { Reveal, MaskLines } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contatti() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", guests: "2", area: "interno", date: "", time: "", note: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const maxGuests = CAPACITY[form.area];

  const buildMessage = () =>
    c.msgTemplate
      .replace("{name}", form.name || "-")
      .replace("{guests}", form.guests || "-")
      .replace("{area}", c.form[form.area] || form.area)
      .replace("{date}", form.date || "-")
      .replace("{time}", form.time || "-")
      .replace("{note}", form.note || "-");

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time) {
      toast.error("Nome, data e ora sono richiesti / Name, date & time required");
      return;
    }
    if (Number(form.guests) > maxGuests) {
      toast.error(
        c.form.maxGuests.replace("{max}", maxGuests).replace("{area}", c.form[form.area])
      );
      return;
    }
    setLoading(true);
    const msg = buildMessage();
    try {
      await axios.post(`${API}/reservations`, { ...form, guests: Number(form.guests) || 0, message: msg });
    } catch (err) {
      // Non-blocking: WhatsApp is the primary channel.
    } finally {
      setLoading(false);
      window.open(whatsappLink(msg), "_blank");
      toast.success("WhatsApp ✓");
    }
  };

  return (
    <section id="contatti" className="relative overflow-hidden bg-crema py-24 sm:py-32" data-testid="contatti">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: heading + info */}
          <div>
            <Reveal as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
              {c.label}
            </Reveal>
            <h2 className="font-serif text-5xl font-medium leading-[0.95] text-marrone sm:text-7xl">
              <MaskLines lines={c.title.split("\n")} lineClass="block italic" />
            </h2>
            <Reveal delay={0.15} className="mt-8 max-w-md text-base font-light leading-relaxed text-nero/75">
              {c.body}
            </Reveal>

            <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp-button"
                className="rounded-full bg-terracotta px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-crema transition-colors duration-300 hover:bg-mattone"
              >
                {c.whatsapp}
              </a>
              <a
                href={phoneTel()}
                data-testid="contact-call-reserve-button"
                className="rounded-full border border-mattone px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-mattone transition-colors duration-300 hover:bg-mattone hover:text-crema"
              >
                {c.callReserve}
              </a>
              <a
                href={phoneTel()}
                data-testid="contact-chiamaci-button"
                className="rounded-full border border-mattone px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-mattone transition-colors duration-300 hover:bg-mattone hover:text-crema"
              >
                {c.chiamaci}
              </a>
            </Reveal>

            <Reveal delay={0.22} className="mt-4">
              <p className="text-sm font-light text-nero/70" data-testid="contact-events-note">
                {c.eventsNote.split("{phone}")[0]}
                <a href={phoneTel()} className="font-medium text-mattone underline underline-offset-4 hover:text-terracotta">
                  {CONTACT.phoneDisplay}
                </a>
                {c.eventsNote.split("{phone}")[1]}
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 space-y-4">
              <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm text-nero/80 hover:text-terracotta" data-testid="contact-address">
                <MapPin className="mt-0.5 h-4 w-4 text-terracotta" strokeWidth={1.6} />
                {CONTACT.address}
              </a>
              <a href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-nero/80 hover:text-terracotta" data-testid="contact-phone">
                <Phone className="h-4 w-4 text-terracotta" strokeWidth={1.6} />
                {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-sm text-nero/80 hover:text-terracotta" data-testid="contact-email">
                <Mail className="h-4 w-4 text-terracotta" strokeWidth={1.6} />
                {CONTACT.email}
              </a>
              <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-nero/80 hover:text-terracotta" data-testid="contact-instagram">
                <Instagram className="h-4 w-4 text-terracotta" strokeWidth={1.6} />
                @{CONTACT.instagram}
              </a>
              <a href={CONTACT.facebookUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-nero/80 hover:text-terracotta" data-testid="contact-facebook">
                <Facebook className="h-4 w-4 text-terracotta" strokeWidth={1.6} />
                {CONTACT.facebook}
              </a>
              <p className="pt-3 text-xs uppercase tracking-[0.15em] text-nero/50">{c.hours}</p>
            </Reveal>
          </div>

          {/* Right: reservation form */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-sm border border-beige bg-nero p-8 text-crema sm:p-10">
              <img src={IMAGES.stringLights2} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15" />
              <form onSubmit={submit} className="relative space-y-5" data-testid="reservation-form">
                <div className="grid grid-cols-2 gap-4">
                  <Field label={c.form.name} testid="res-name">
                    <input value={form.name} onChange={set("name")} data-testid="input-name" className="cv-input" />
                  </Field>
                  <Field label={c.form.guests} testid="res-guests">
                    <input type="number" min="1" max={maxGuests} value={form.guests} onChange={set("guests")} data-testid="input-guests" className="cv-input" />
                  </Field>
                </div>

                <div data-testid="res-area">
                  <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.2em] text-crema/50">{c.form.area}</span>
                  <div className="flex gap-2">
                    {["interno", "esterno"].map((z) => (
                      <button
                        type="button"
                        key={z}
                        onClick={() => setForm((f) => ({ ...f, area: z }))}
                        data-testid={`area-${z}`}
                        className={`flex-1 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                          form.area === z
                            ? "border-terracotta bg-terracotta text-crema"
                            : "border-crema/25 text-crema/70 hover:border-crema/60"
                        }`}
                      >
                        {c.form[z]} · {CAPACITY[z]}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-[0.65rem] text-crema/45">
                    {c.form.maxGuests.replace("{max}", maxGuests).replace("{area}", c.form[form.area])}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label={c.form.date} testid="res-date">
                    <input type="date" value={form.date} onChange={set("date")} data-testid="input-date" className="cv-input" />
                  </Field>
                  <Field label={c.form.time} testid="res-time">
                    <input type="time" value={form.time} onChange={set("time")} data-testid="input-time" className="cv-input" />
                  </Field>
                </div>
                <Field label={c.form.note} testid="res-note">
                  <textarea value={form.note} onChange={set("note")} rows={2} data-testid="input-note" className="cv-input resize-none" />
                </Field>
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="reservation-submit"
                  className="w-full rounded-full bg-terracotta py-4 text-xs font-semibold uppercase tracking-[0.2em] text-crema transition-colors duration-300 hover:bg-mattone disabled:opacity-60"
                >
                  {c.form.send}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .cv-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(232,217,195,0.3);
          padding: 8px 0;
          color: #F6F1E8;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .cv-input:focus { border-color: #A84A2D; }
        .cv-input::placeholder { color: rgba(246,241,232,0.4); }
        .cv-input::-webkit-calendar-picker-indicator { filter: invert(0.8); }
      `}</style>
    </section>
  );
}

function Field({ label, children, testid }) {
  return (
    <label className="block" data-testid={testid}>
      <span className="mb-1 block text-[0.65rem] uppercase tracking-[0.2em] text-crema/50">{label}</span>
      {children}
    </label>
  );
}
