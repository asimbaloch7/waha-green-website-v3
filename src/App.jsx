import React, { useMemo, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Menu, X, Sprout, Leaf, Droplets, Flower2, Sun,
  Lightbulb, Scissors, CalendarDays, Check, MessageCircle, Phone, Mail,
  MapPin, ChevronDown, ChevronLeft, ChevronRight, MoveHorizontal, Instagram,
  Facebook, Send, ShieldCheck, Clock3, TreePine
} from 'lucide-react';
import { business, socials, services, specialties, plans, faqs, process } from './content';

const iconMap = { sprout:Sprout, leaf:Leaf, droplets:Droplets, flower:Flower2, sun:Sun, lightbulb:Lightbulb, scissors:Scissors, calendar:CalendarDays };
const WA = business.whatsapp;

function Logo({ light=false }) {
  return <Link className={`brand ${light?'brand-light':''}`} to="/" aria-label="Waha Green home">
    <img src="/logo.png" alt="Waha Green grass logo" /><span>WAHA <b>GREEN</b><small>LANDSCAPING & GARDENING</small></span>
  </Link>;
}
function WhatsAppButton({ children='Chat on WhatsApp', outline=false, className='' }) {
  return <a className={`button ${outline?'button-outline':''} ${className}`} href={WA} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{children}</a>;
}
function Header() {
  const [open,setOpen] = useState(false);
  const loc = useLocation();
  React.useEffect(()=>setOpen(false),[loc.pathname]);
  return <header className="site-header"><div className="nav-wrap container">
    <Logo />
    <button className="mobile-menu" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <nav className={open?'nav-links nav-open':'nav-links'}>
      <NavLink to="/services">Services</NavLink><NavLink to="/projects">Our work</NavLink>
      <NavLink to="/maintenance-plans">Maintenance</NavLink><NavLink to="/about">About</NavLink>
      <Link className="nav-quote" to="/contact">Get a free quote <ArrowUpRight size={15}/></Link>
    </nav>
  </div></header>;
}
function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Logo light/><p className="footer-about">A green, calm place at home. We design, plant and maintain gardens built for Qatar's climate.</p>
      <div className="socials">{socials.map(s=><a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>{s.name==='Instagram'?<Instagram/>:s.name==='Facebook'?<Facebook/>:<span>{s.name==='TikTok'?'♪':s.name==='Threads'?'@':'𝕏'}</span>}</a>)}</div>
    </div>
    <div><h4>Explore</h4><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/maintenance-plans">Maintenance plans</Link><Link to="/about">About us</Link><Link to="/faq">FAQ</Link></div>
    <div><h4>Get in touch</h4><a href={`tel:${business.phone}`}><Phone/> {business.displayPhone}</a><a href={`mailto:${business.email}`}><Mail/> {business.email}</a><a href={WA} target="_blank" rel="noopener noreferrer"><MessageCircle/> WhatsApp us</a><p className="tiny">Qatar · [Service areas to be confirmed]</p></div>
    <div className="footer-note"><span className="eyebrow gold">A little oasis, close to home</span><p>Tell us what you have in mind. We would be glad to hear about your garden.</p><WhatsAppButton>Start a conversation</WhatsAppButton></div>
  </div><div className="container footer-bottom"><span>© Waha Green · Landscaping & Gardening, Qatar</span><span>Commercial Registration: [to be added]</span><div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></div></footer>;
}
function FloatingWhatsApp() { return <a className="floating-wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat with Waha Green on WhatsApp"><MessageCircle/></a>; }
function SectionHeading({ eyebrow, title, text, centered=false }) {
  return <div className={`section-heading ${centered?'center':''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>;
}
function GardenArt({ night=false, compact=false }) {
  return <div className={`garden-art ${night?'night':''} ${compact?'compact':''}`} role="img" aria-label="Illustrative garden landscape placeholder">
    <div className="art-sky"/><div className="art-moon"/><div className="art-house"><i/><b/><span/></div>
    <div className="art-tree tree-one"><i/><i/><i/></div><div className="art-tree tree-two"><i/><i/><i/></div>
    <div className="art-hedge"/><div className="art-lawn"/><div className="art-path"/>
    <div className="art-lights"><i/><i/><i/></div><span className="art-caption">PROJECT PHOTO PLACEHOLDER</span>
  </div>;
}
function ServiceCard({service}) {
  const Icon=iconMap[service.icon]||Sprout;
  return <Link className="service-card" to={`/services/${service.slug}`}><span className="service-icon"><Icon/></span><h3>{service.title}</h3><p>{service.short}</p><span className="text-link">Explore service <ArrowUpRight size={16}/></span></Link>;
}
function Home() {
  return <>
    <section className="hero hero-premium">
      <div className="hero-image"><GardenArt night/></div><div className="hero-shade"/>
      <div className="container hero-content">
        <span className="eyebrow gold">LANDSCAPING · GARDEN DESIGN · MAINTENANCE · QATAR</span>
        <h1>Your outdoor space.<br/><em>Beautifully brought to life.</em></h1>
        <p>From a fresh green lawn to a complete garden transformation, Waha Green makes outdoor spaces easier to enjoy — and easier to maintain.</p>
        <div className="hero-actions">
          <WhatsAppButton>Get a free garden quote</WhatsAppButton>
          <Link className="button button-ghost" to="/services">Explore services <ArrowRight size={17}/></Link>
        </div>
        <div className="hero-trust"><span><Check size={15}/> Clear written quotes</span><span><Check size={15}/> Designed for Qatar's climate</span><span><Check size={15}/> Ongoing garden care</span></div>
      </div>
      <div className="hero-stamp"><img src="/logo.png" alt="Waha Green logo"/><span>YOUR HOME.<br/>YOUR OASIS.</span></div>
    </section>

    <section className="quick-start">
      <div className="container quick-start-inner">
        <div className="quick-intro"><span className="eyebrow">HOW CAN WE HELP?</span><h2>What does your garden need?</h2><p>Choose a service to see what we can do.</p></div>
        <div className="quick-links">
          <Link to="/services/lawn-installation"><span><Leaf/></span><b>New lawn</b><small>Natural or artificial grass</small><ArrowUpRight/></Link>
          <Link to="/services/garden-design"><span><Sprout/></span><b>Garden makeover</b><small>Design and landscaping</small><ArrowUpRight/></Link>
          <Link to="/services/smart-irrigation"><span><Droplets/></span><b>Irrigation</b><small>Drip and sprinkler systems</small><ArrowUpRight/></Link>
          <Link to="/maintenance-plans"><span><CalendarDays/></span><b>Garden maintenance</b><small>Regular visits and care</small><ArrowUpRight/></Link>
        </div>
      </div>
    </section>

    <section className="section container home-services">
      <div className="section-topline"><SectionHeading eyebrow="OUR SERVICES" title="Everything your garden needs" text="Choose a service and tell us what you have in mind. We will help you plan the next step."/></div>
      <div className="service-grid">{services.slice(0,6).map(s=><ServiceCard key={s.slug} service={s}/>)}</div>
      <div className="center more-link"><Link className="button button-secondary" to="/services">View all services <ArrowRight size={17}/></Link></div>
    </section>

    <section className="section cream-section">
      <div className="container project-feature">
        <div className="project-copy"><span className="eyebrow">SEE THE DIFFERENCE</span><h2>From plain ground to a greener garden.</h2><p>Drag the slider to see a garden transformed. One movement tells the story.</p><Link className="text-link" to="/projects">View project details <ArrowRight size={17}/></Link></div>
        <div className="home-comparison"><BeforeAfter compact/></div>
      </div>
    </section>

    <VisualProcess/>

    <section className="section cream-section">
      <div className="container compact-specialties"><div><span className="eyebrow">MORE POSSIBILITIES</span><h2>Have something different in mind?</h2><p>We can also discuss pergolas, pathways, garden lighting, planting, water features and more.</p></div><Link className="button button-secondary" to="/contact">Discuss your idea <ArrowRight size={16}/></Link></div>
    </section>
    <section className="closing-cta"><div className="container closing-inner"><div><span className="eyebrow gold">YOUR GARDEN STARTS HERE</span><h2>Ready to make your garden greener?</h2><p>Send us a few photos and get the conversation started.</p></div><div className="closing-actions"><WhatsAppButton>Get a free quote <ArrowUpRight/></WhatsAppButton><a className="closing-phone" href={`tel:${business.phone}`}><Phone size={16}/> {business.displayPhone}</a></div></div></section>
  </>;
}
function Specialties(){return <section className="section cream-section"><div className="container"><SectionHeading eyebrow="More ways to make it yours" title="Specialties, available on request"/><div className="specialty-grid">{specialties.map(x=><div key={x}><Check size={16}/>{x}</div>)}</div></div></section>}
function PageIntro({eyebrow,title,lead}){return <section className="page-intro"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{lead}</p></div></section>}
function ServicesPage(){return <><PageIntro eyebrow="Our services" title="A garden that works beautifully, every day." lead="From the first layout to the regular visit, we bring the pieces of your outdoor space together."/><section className="section container"><div className="service-grid">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></section><Specialties/></>}
function ServiceDetail(){const {pathname}=useLocation();const slug=pathname.split('/').pop();const s=services.find(x=>x.slug===slug);if(!s)return <NotFound/>;const Icon=iconMap[s.icon]||Sprout;return <><PageIntro eyebrow="Waha Green services" title={s.title} lead={s.short}/><section className="section container detail-layout"><div className="detail-icon"><Icon size={46}/></div><div><h2>Made for your space</h2><p className="lead-copy">{s.intro||s.short}</p>{s.details.length>0&&<><h3>What this can include</h3><div className="check-grid">{s.details.map(d=><span key={d}><Check size={16}/>{d}</span>)}</div></>}<WhatsAppButton>Ask about this service</WhatsAppButton></div></section></>}
function BeforeAfter({compact=false}) {
  const [pos,setPos] = useState(50);
  const [dragging,setDragging] = useState(false);
  const frameRef = React.useRef(null);
  const moveTo = clientX => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.max(0,Math.min(100,100*(clientX-rect.left)/rect.width)));
  };
  return <div className={`comparison-wrap ${compact?'comparison-compact':''}`}>
    <div className="comparison-heading"><span className="eyebrow">BEFORE & AFTER</span><span className="comparison-instruction">Drag to reveal the garden</span></div>
    <div ref={frameRef} className="comparison photo-comparison"
      onPointerDown={e=>{setDragging(true);e.currentTarget.setPointerCapture(e.pointerId);moveTo(e.clientX)}}
      onPointerMove={e=>{if(dragging)moveTo(e.clientX)}}
      onPointerUp={()=>setDragging(false)} onPointerCancel={()=>setDragging(false)}
      onLostPointerCapture={()=>setDragging(false)}>
      <img className="compare-photo" src="/sample-before.webp" alt="Reference example: garden before landscaping" draggable="false" />
      <div className="compare-reveal" style={{clipPath:`inset(0 0 0 ${pos}%)`}}>
        <img className="compare-photo" src="/sample-after.webp" alt="Reference example: landscaped garden with a green lawn" draggable="false" />
      </div>
      <div className="compare-line" style={{left:`${pos}%`}}><div className="comparison-knob"><ChevronLeft size={23} fill="currentColor"/><ChevronRight size={23} fill="currentColor"/></div></div>
      <span className="compare-label left-label">Before</span><span className="compare-label right-label">After</span>
      <input className="comparison-range" type="range" min="0" max="100" value={pos}
        onChange={e=>setPos(Number(e.target.value))}
        aria-label="Garden comparison: move left to reveal finished grass, move right to reveal original yard" />
    </div>
    <div className="comparison-foot"><span><i className="legend-dot before-dot"/> Before</span><span><i className="legend-dot after-dot"/> After</span></div>
    <p className="reference-note">Reference photography for layout demonstration only — replace both images with Waha Green project photos before publishing.</p>
  </div>;
}
function VisualProcess(){
  const steps=[
    {n:'01',title:'Tell us your idea',detail:'Send photos on WhatsApp',icon:MessageCircle,art:'chat'},
    {n:'02',title:'We visit & plan',detail:'Site check + written quote',icon:MapPin,art:'plan'},
    {n:'03',title:'We transform it',detail:'Soil · irrigation · planting',icon:Sprout,art:'grow'},
    {n:'04',title:'Enjoy & maintain',detail:'Your green space, cared for',icon:Leaf,art:'done'},
  ];
  return <section className="section visual-process-section" id="how-it-works"><div className="container">
    <div className="visual-process-header"><div><span className="eyebrow">OUR SIMPLE PROCESS</span><h2>From your idea to your oasis.</h2></div><p>Four simple steps. No complicated process.</p></div>
    <div className="visual-process-grid">{steps.map((step,i)=>{const Icon=step.icon;return <article className="visual-step" key={step.n}>
      <div className={`step-illustration step-${step.art}`}><span className="step-number">{step.n}</span><div className="step-art-ring"><Icon size={49} strokeWidth={1.5}/></div><span className="step-art-ground"/></div>
      <div className="step-info"><h3>{step.title}</h3><p>{step.detail}</p></div>{i<3&&<ArrowRight className="step-connector" size={18}/>}</article>})}</div>
    <div className="visual-process-action"><WhatsAppButton>Send your garden photos</WhatsAppButton><span>No long form needed to start.</span></div>
  </div></section>;
}
function ProjectsPage(){return <><PageIntro eyebrow="OUR WORK" title="See the transformation at a glance." lead="Drag the divider to compare before and after."/><section className="section container"><div className="project-intro-row"><div><span className="eyebrow">PROJECT PREVIEW</span><h2>Slide to see the difference.</h2><p>Drag left for more green lawn. Drag right for the original yard.</p></div><span className="project-count">BEFORE / AFTER</span></div><BeforeAfter/></section></>}
function PlansPage(){return <><PageIntro eyebrow="Ongoing care" title="A garden that stays looked after." lead="Choose a visit rhythm that suits your garden. Each plan can be shaped around your space."/><section className="section container"><div className="plans-grid">{plans.map((p,i)=><article className={`plan-card ${i===2?'featured':''}`} key={p.name}>{i===2&&<span className="plan-tag">Weekly care</span>}<span className="eyebrow">Maintenance plan</span><h2>{p.name}</h2><p className="plan-frequency">{p.frequency}</p><div className="plan-rule"/><ul>{p.items.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul><WhatsAppButton className="plan-button">Request a quote</WhatsAppButton></article>)}</div></section></>}
function AboutPage(){return <><PageIntro eyebrow="About Waha Green" title="A garden is the first thing you see and the last thing you leave." lead="Our name means oasis, and that is the idea behind everything we do: a green, calm place at home."/><section className="section cream-section"><div className="container about-grid"><div className="about-art"><GardenArt/></div><div><span className="eyebrow">Rooted in Qatar</span><h2>Care for the climate. Care for the details.</h2><p>Waha Green is a Qatar-based landscaping and gardening company. We build and look after gardens that suit this climate: heat, strong sun, wind and salty water.</p><p>We are a new company, and every project is done with the care of a first one. We would rather do fewer jobs well than many jobs badly.</p><div className="values">{['Honest advice','Clean finish','On time','After-care'].map(x=><span key={x}><Check size={16}/>{x}</span>)}</div></div></div></section><section className="section container"><SectionHeading eyebrow="Our process" title="From first conversation to ongoing care" text="A clear, practical process at every stage."/><div className="timeline">{process.map((p,i)=><article key={p[0]}><span className="timeline-number">0{i+1}</span><div><h3>{p[0]}</h3><p>{p[1]}</p></div></article>)}</div></section></>}
function FAQPage(){const [opened,setOpened]=useState(0);return <><PageIntro eyebrow="A few helpful answers" title="Questions about your garden?" lead="If you do not see your question here, send us a message and tell us what you have in mind."/><section className="section container faq-wrap">{faqs.map((f,i)=><article className={`faq-item ${opened===i?'open':''}`} key={f[0]}><button onClick={()=>setOpened(opened===i?-1:i)} aria-expanded={opened===i}><span>{f[0]}</span><ChevronDown/></button>{opened===i&&<p>{f[1]}</p>}</article>)}<div className="faq-contact"><h3>Still have a question?</h3><WhatsAppButton>Ask us on WhatsApp</WhatsAppButton></div></section></>}
function ContactPage(){const [sent,setSent]=useState(false);const [form,setForm]=useState({name:'',phone:'',area:'',service:'',size:'',details:'',preferred:'WhatsApp',website:''});const set=(k,v)=>setForm(f=>({...f,[k]:v}));const summary=`Hello Waha Green, I would like a quote for my garden.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AArea: ${encodeURIComponent(form.area)}%0AService: ${encodeURIComponent(form.service)}%0AGarden size: ${encodeURIComponent(form.size)}%0ADetails: ${encodeURIComponent(form.details)}%0APreferred contact: ${encodeURIComponent(form.preferred)}`;function submit(e){e.preventDefault();if(form.website)return;window.location.href=`mailto:${business.email}?subject=${encodeURIComponent('Garden quote request')}&body=${summary.replaceAll('%0A','%0D%0A')}`;setSent(true)}return <><PageIntro eyebrow="Get in touch" title="Tell us about your garden" lead="Send a message on WhatsApp for the fastest reply, or fill in the short form."/><section className="section container contact-layout"><div className="contact-info"><span className="eyebrow">Let's talk</span><h2>Start with a few details.</h2><p>Share your location and a few photos on WhatsApp. We can arrange a site visit and prepare a written quote.</p><a href={WA} className="contact-method"><MessageCircle/><span><b>WhatsApp</b><small>Fastest way to reach us</small></span><ArrowUpRight/></a><a href={`tel:${business.phone}`} className="contact-method"><Phone/><span><b>{business.displayPhone}</b><small>Call Waha Green</small></span><ArrowUpRight/></a><a href={`mailto:${business.email}`} className="contact-method"><Mail/><span><b>{business.email}</b><small>Send us an email</small></span><ArrowUpRight/></a><div className="location-note"><MapPin/><span>Qatar · [Address to be confirmed]<small>Service areas: [TO CONFIRM]</small></span></div><p className="tiny">Opening hours: [TO CONFIRM]</p><div className="follow"><b>Follow us</b>{socials.map(s=><a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>)}</div></div>
<form className="quote-form" onSubmit={submit}><h2>Request a quote</h2><p className="muted">Fields marked * are required.</p>{sent&&<div className="form-success">Your email app should open with your request ready to send. Thank you.</div>}<div className="form-grid"><label>Name *<input required value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Your name"/></label><label>Phone / WhatsApp *<input required type="tel" value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="+974 ..."/></label><label>Area *<input required value={form.area} onChange={e=>set('area',e.target.value)} placeholder="Your area in Qatar"/></label><label>Service needed *<select required value={form.service} onChange={e=>set('service',e.target.value)}><option value="">Choose a service</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}</select></label><label>Approx. garden size <input value={form.size} onChange={e=>set('size',e.target.value)} placeholder="Optional"/></label><label>Preferred contact<select value={form.preferred} onChange={e=>set('preferred',e.target.value)}><option>WhatsApp</option><option>Call</option><option>Email</option></select></label><label className="full">Tell us a little about the garden<textarea rows="4" value={form.details} onChange={e=>set('details',e.target.value)} placeholder="What would you like us to help with?"/></label><label className="honeypot">Website<input tabIndex="-1" autoComplete="off" value={form.website} onChange={e=>set('website',e.target.value)}/></label></div><p className="form-note">You can attach garden photos directly in WhatsApp. This form prepares an email; connect a secure form backend before accepting submissions online.</p><div className="form-actions"><button className="button" type="submit"><Send size={16}/> Send request by email</button><a className="button button-secondary" href={WA}>Send summary to WhatsApp <MessageCircle size={16}/></a></div></form></section></>}
function LegalPage({privacy=false}){return <><PageIntro eyebrow="Waha Green" title={privacy?'Privacy Policy':'Terms & Conditions'} lead="This page provides a starting structure for our website information."/><section className="section container legal-copy"><h2>{privacy?'Information you share':'Using this website'}</h2><p>{privacy?'When you contact Waha Green, you may share your name, phone number, area, garden details and photographs so we can respond to your enquiry. We use these details to communicate with you about your request.':'The information on this website describes Waha Green services in general. A project scope, schedule and quote will be confirmed separately in writing before work begins.'}</p><h2>{privacy?'Contact':'Quotes and services'}</h2><p>{privacy?'For questions about information you have shared, contact contact@wahagreen.com. Add the company’s final data-retention and privacy practices here before launch.':'Service availability, site requirements, materials and final costs depend on the specific property and will be discussed during the quotation process.'}</p><p className="muted">[This page should be reviewed and completed for the company’s actual legal and operational requirements before launch.]</p></section></>}
function NotFound(){return <PageIntro eyebrow="Page not found" title="This path has not been planted yet." lead="Use the navigation to find your way back to Waha Green."/>}
export default function App(){return <><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/services/:slug" element={<ServiceDetail/>}/><Route path="/projects" element={<ProjectsPage/>}/><Route path="/maintenance-plans" element={<PlansPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/faq" element={<FAQPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/privacy" element={<LegalPage privacy/>}/><Route path="/terms" element={<LegalPage/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/><FloatingWhatsApp/></>}
