import { Mic, Music, Sliders, Disc3, AudioWaveform, Headphones, Mail, Phone, MapPin, Instagram } from "lucide-react";

import navData           from "./nav.json";
import servicesData      from "./services.json";
import portfolioData     from "./portfolio.json";
import equipmentData     from "./equipment.json";
import testimonialsData  from "./testimonials.json";
import contactData       from "./contact.json";
import formFieldsData    from "./formFields.json";

const ICON_MAP = { Mic, Music, Sliders, Disc3, AudioWaveform, Headphones, Mail, Phone, MapPin, Instagram };

export const NAV_LINKS      = navData;
export const SERVICES       = servicesData.map((s) => ({ ...s, icon: ICON_MAP[s.icon] }));
export const PORTFOLIO_ITEMS = portfolioData;
export const EQUIPMENT      = equipmentData;
export const TESTIMONIALS   = testimonialsData;
export const CONTACT_INFO   = contactData.map((c) => ({ ...c, icon: ICON_MAP[c.icon] }));
export const FORM_FIELDS    = formFieldsData;
