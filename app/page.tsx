"use client";

import { useEffect, useState } from "react";

const content = {
  hi: {
    nav: ["होम","सफर","Symptoms","लवी AI","ट्रैकर","प्लान","कंपनियों के लिए"],
    badge: "भारत की महिलाओं के लिए AI-powered menopause companion",
    title: "वो सफ़र, जिसके बारे में कोई बात नहीं करता।",
    text: "HerSfar एक Hindi-first menopause wellness platform है — जहाँ महिलाएँ लवी AI से बात कर सकती हैं, symptoms track कर सकती हैं, menopause को सरल भाषा में समझ सकती हैं और डॉक्टर से बेहतर conversation के लिए तैयारी कर सकती हैं।",
    cta1: "फ्री में शुरू करें",
    cta2: "लवी से मिलें",
    stats: [["1B+","दुनिया भर में महिलाएँ menopause journey से गुजरती हैं"],["Years","यह journey कई महिलाओं के लिए सालों तक चल सकती है"],["India-first","हिंदी + English support शुरुआत से"]],
    heroSlides: [
      ["लवी AI Companion","रात 2 बजे भी सवाल पूछिए — बिना judgement, simple Hindi-English में।","24/7 Support"],
      ["Journey Tracker","Hot flashes, sleep, mood, energy, periods और notes को रोज़ track करें।","Daily Check-in"],
      ["Doctor Prep","डॉक्टर visit से पहले symptoms summary और questions तैयार करें।","Better Consults"],
      ["Workplace Support","Office impact, confidence और HR conversation के लिए support।","B2B Wellness"],
      ["Privacy-first","आपकी private journey आपकी ही रहेगी. Companies को only anonymous insights मिलेंगे।","Trust Layer"]
    ],

    introTitle: "HerSfar क्या बदलना चाहता है?",
    introText: "आज भी बहुत सी महिलाएँ menopause को अकेले, चुपचाप और confusion में face करती हैं। कोई पूछने की जगह नहीं, symptoms को नाम देने की language नहीं, और doctor से क्या पूछना है इसकी clarity नहीं। HerSfar इस gap को emotional support, trusted education, tracking और AI companion के साथ solve करता है।",

    stagesTitle: "Menopause journey के stages",
    stages: [
      ["Perimenopause", "आमतौर पर menopause से पहले का transition phase. Periods irregular हो सकते हैं, sleep, mood, hot flashes, anxiety, brain fog जैसे changes शुरू हो सकते हैं।"],
      ["Menopause", "12 months तक periods न आना menopause माना जाता है. इस stage में hormonal changes clearly महसूस हो सकते हैं।"],
      ["Post-menopause", "Menopause के बाद का phase. Symptoms कुछ महिलाओं में continue हो सकते हैं, और long-term health awareness important हो जाती है।"]
    ],

    symptomsTitle: "Symptoms सिर्फ hot flashes तक limited नहीं हैं",
    symptomsIntro: "Menopause whole-body transition हो सकता है. Lavi और Tracker इन categories को समझने और record करने के लिए designed हैं।",
    symptomGroups: [
      ["Temperature", ["Hot flashes","Night sweats","Sudden heat","Sweating"]],
      ["Sleep & Energy", ["Insomnia","Waking often","Fatigue","Low energy"]],
      ["Mood", ["Anxiety","Irritability","Low mood","Emotional changes"]],
      ["Mind", ["Brain fog","Forgetfulness","Low focus","Mental fatigue"]],
      ["Cycle", ["Irregular periods","Heavy flow","Spotting","Missed periods"]],
      ["Body", ["Joint pain","Headache","Weight change","Bloating"]],
      ["Intimate Health", ["Vaginal dryness","Low libido","Urinary urgency","Recurrent UTI"]],
      ["Workplace", ["Meeting anxiety","Brain fog at work","Embarrassment","Confidence drop"]]
    ],

    whyTitle: "यह product क्यों ज़रूरी है?",
    whyCards: [
      ["Silence को support में बदलना", "महिलाएँ अक्सर symptoms को normal मानकर ignore करती हैं. HerSfar उन्हें language, support और clarity देता है।"],
      ["India-first context", "Indian family, culture, language, workplace hesitation और stigma को ध्यान में रखकर product बनाया गया है।"],
      ["Daily companion, one-time article नहीं", "Menopause एक long journey हो सकती है. इसलिए HerSfar tracking, memory और ongoing AI support देता है।"],
      ["Doctor conversations बेहतर बनाना", "App diagnosis नहीं करता, लेकिन doctor visit से पहले symptoms, frequency और questions organize करने में मदद करता है।"]
    ],

    laviTitle: "लवी AI — आपकी menopause companion",
    laviText: "लवी डॉक्टर नहीं है। लवी diagnosis, prescription या medicine dosage नहीं देती। लवी आपको सुनती है, symptoms समझाती है, tracker में log करने में मदद करती है और red flags पर doctor/emergency guidance देती है।",
    laviFeatures: ["Hindi + English conversation","No diagnosis","No medicine advice","Red-flag escalation","Doctor-prep questions","Memory-ready journey support"],
    chat: [
      ["Lavi","Namaste 🌸 आज आप कैसा महसूस कर रही हैं?"],
      ["You","रात को फिर sweating हुई"],
      ["Lavi","मुझे अफसोस है. Night sweats menopause journey में discuss किए जाते हैं. मैं diagnosis नहीं कर सकती, लेकिन हम timing, severity और sleep impact track कर सकते हैं."],
      ["You","Doctor ko kya bolu?"],
      ["Lavi","मैं आपके लिए short doctor-prep note बना सकती हूँ: कब शुरू हुआ, कितनी बार होता है, sleep पर कितना असर है, और क्या triggers दिख रहे हैं."]
    ],

    trackerTitle: "Journey Tracker — daily logs से real patterns",
    trackerText: "हर दिन 1–2 minute का check-in. Mood, sleep, energy, symptoms, severity, periods और notes. समय के साथ यह weekly insights और doctor-ready summary बना सकता है।",
    trackerItems: ["Mood log","Sleep quality","Energy level","Symptom severity","Hot flash / night sweat count","Period changes","Triggers","Notes / journal","Weekly insight","Doctor visit report"],

    packagesTitle: "Packages और monetization model",
    packagesIntro: "HerSfar user trust-first model पर बना है: individual women को low-friction access, premium users को deeper insights, और companies को menopause-inclusive wellness programs.",
    plans: [
      ["Free", "₹0 / month", ["Limited Lavi AI chats","Basic symptom tracker","Selected learn cards","Hindi-English access","Doctor-prep checklist","Privacy-first onboarding"]],
      ["Premium", "₹199 / month", ["Unlimited Lavi conversations","Advanced symptom insights","Weekly summaries","Doctor visit report","Expert webinars","Priority learning library"]],
      ["Corporate", "Custom annual", ["Employee invite dashboard","Anonymous wellness insights","HR awareness workshops","Policy support","Team activation reports","Privacy-protected analytics"]]
    ],

    credibilityTitle: "Credibility और trust कैसे बनेगा?",
    credibility: [
      ["Expert-reviewed content", "Menopause content को gynecologists/women’s health experts से review करवाया जाएगा।"],
      ["Clear AI boundaries", "लवी clearly बताएगी कि वह doctor नहीं है और diagnosis/prescription नहीं देगी।"],
      ["Video testimonials", "Pilot users, doctors, HR leaders और wellness experts की stories credibility build करेंगी।"],
      ["Source-backed learning", "Learn library में simple, evidence-informed menopause content होगा।"],
      ["Privacy-first design", "User conversations और health logs sensitive हैं, इसलिए consent और privacy center product का core रहेगा।"],
      ["Corporate impact reports", "Companies को individual data नहीं, only anonymized trends मिलेंगे।"]
    ],

    impactTitle: "Women की life कैसे easy होगी?",
    impact: [
      ["Confusion कम", "Symptoms को नाम और context मिलेगा."],
      ["Doctor visit बेहतर", "User prepared questions और summary के साथ जाएगी."],
      ["Emotional relief", "महिला को लगेगा कि कोई सुन रहा है."],
      ["Daily awareness", "Tracker से patterns दिखने लगेंगे."],
      ["Work confidence", "Office symptoms और HR conversation के लिए support मिलेगा."],
      ["Family conversation", "Simple language से घर में बात शुरू करना आसान होगा."]
    ],

    corporateTitle: "कंपनियों के लिए menopause-inclusive workplace",
    corporateText: "Experienced women workforce का valuable हिस्सा हैं. Menopause symptoms confidence, sleep, productivity और retention को affect कर सकते हैं. HerSfar companies को employee support, awareness sessions और anonymous wellness insights देता है — individual privacy protect करते हुए.",
    corporateFeatures: ["Employee app access","Invite links","Anonymous dashboard","Workshops","Manager sensitization","Policy starter kit"],

    faqTitle: "Common Questions",
    faqs: [
      ["क्या Lavi doctor है?", "नहीं. Lavi support companion है. वह diagnosis, medicine या dosage recommend नहीं करती."],
      ["क्या app free होगा?", "हाँ, basic access free होगा. Premium और corporate plans deeper support के लिए होंगे."],
      ["क्या company मेरे symptoms देखेगी?", "नहीं. Corporate dashboard में only anonymous group-level insights होंगे."],
      ["क्या Hindi support होगा?", "हाँ. Hindi और English first version में होंगे. Bangla, Kannada और Punjabi future roadmap में हैं."],
      ["क्या यह केवल menopause के लिए है?", "Main focus perimenopause, menopause, post-menopause और midlife women’s wellness है."]
    ],

    contactTitle: "चलिए इस journey को साथ बनाते हैं",
    contactText: "अगर आप investor, HR leader, doctor, wellness partner या early user हैं — HerSfar India-first menopause support category build कर रहा है.",
    footer: "HerSfar — हर महिला के सफ़र को support, dignity और knowledge के साथ आगे बढ़ाने के लिए।"
  },

  en: {
    nav: ["Home","Journey","Symptoms","Lavi AI","Tracker","Plans","For Companies"],
    badge: "AI-powered menopause companion for Indian women",
    title: "The Journey No One Talks About.",
    text: "HerSfar is a Hindi-first menopause wellness platform where women can talk to Lavi AI, track symptoms, understand menopause in simple language and prepare for better doctor conversations.",
    cta1: "Start Free",
    cta2: "Meet Lavi",
    stats: [["1B+","women globally navigate menopause"],["Years","the journey may last for years for many women"],["India-first","Hindi + English support from day one"]],
    heroSlides: [
      ["Lavi AI Companion","Ask questions anytime — without judgement, in simple Hindi-English.","24/7 Support"],
      ["Journey Tracker","Track hot flashes, sleep, mood, energy, periods and notes daily.","Daily Check-in"],
      ["Doctor Prep","Prepare symptom summaries and questions before doctor visits.","Better Consults"],
      ["Workplace Support","Support for office impact, confidence and HR conversations.","B2B Wellness"],
      ["Privacy-first","Your private journey stays yours. Companies see only anonymous insights.","Trust Layer"]
    ],
    introTitle: "What HerSfar wants to change",
    introText: "Many women still face menopause silently and with confusion. There is no safe place to ask, no simple language to name symptoms, and little clarity on what to discuss with doctors. HerSfar solves this with emotional support, trusted education, tracking and an AI companion.",
    stagesTitle: "Stages of the menopause journey",
    stages: [
      ["Perimenopause", "The transition phase before menopause. Periods may become irregular and changes in sleep, mood, hot flashes, anxiety and brain fog may begin."],
      ["Menopause", "Menopause is commonly identified after 12 months without periods. Hormonal changes may feel more visible during this stage."],
      ["Post-menopause", "The phase after menopause. Some symptoms may continue and long-term health awareness becomes important."]
    ],
    symptomsTitle: "Symptoms are not limited to hot flashes",
    symptomsIntro: "Menopause can be a whole-body transition. Lavi and Tracker are designed to understand and record these categories.",
    symptomGroups: [
      ["Temperature", ["Hot flashes","Night sweats","Sudden heat","Sweating"]],
      ["Sleep & Energy", ["Insomnia","Waking often","Fatigue","Low energy"]],
      ["Mood", ["Anxiety","Irritability","Low mood","Emotional changes"]],
      ["Mind", ["Brain fog","Forgetfulness","Low focus","Mental fatigue"]],
      ["Cycle", ["Irregular periods","Heavy flow","Spotting","Missed periods"]],
      ["Body", ["Joint pain","Headache","Weight change","Bloating"]],
      ["Intimate Health", ["Vaginal dryness","Low libido","Urinary urgency","Recurrent UTI"]],
      ["Workplace", ["Meeting anxiety","Brain fog at work","Embarrassment","Confidence drop"]]
    ],
    whyTitle: "Why this product is needed",
    whyCards: [
      ["Turning silence into support", "Women often ignore symptoms or suffer alone. HerSfar gives them language, support and clarity."],
      ["India-first context", "Built around Indian families, culture, language, workplace hesitation and stigma."],
      ["A daily companion, not a one-time article", "Menopause can be a long journey, so HerSfar offers tracking, memory and ongoing AI support."],
      ["Better doctor conversations", "The app does not diagnose, but helps organize symptoms, frequency and questions before a visit."]
    ],
    laviTitle: "Lavi AI — Your menopause companion",
    laviText: "Lavi is not a doctor. Lavi does not diagnose, prescribe or suggest medicine dosages. Lavi listens, explains symptoms, helps log tracker entries and escalates red flags to doctor/emergency guidance.",
    laviFeatures: ["Hindi + English conversation","No diagnosis","No medicine advice","Red-flag escalation","Doctor-prep questions","Memory-ready journey support"],
    chat: [
      ["Lavi","Namaste 🌸 How are you feeling today?"],
      ["You","I had sweating again at night"],
      ["Lavi","I’m sorry. Night sweats are discussed in the menopause journey. I can’t diagnose, but we can track timing, severity and sleep impact."],
      ["You","What should I tell the doctor?"],
      ["Lavi","I can create a short doctor-prep note: when it started, how often, sleep impact and possible triggers."]
    ],
    trackerTitle: "Journey Tracker — daily logs to real patterns",
    trackerText: "A 1–2 minute daily check-in for mood, sleep, energy, symptoms, severity, periods and notes. Over time, this can create weekly insights and doctor-ready summaries.",
    trackerItems: ["Mood log","Sleep quality","Energy level","Symptom severity","Hot flash / night sweat count","Period changes","Triggers","Notes / journal","Weekly insight","Doctor visit report"],
    packagesTitle: "Packages and monetization model",
    packagesIntro: "HerSfar is built on a trust-first model: low-friction access for women, deeper insights for premium users, and menopause-inclusive wellness programs for companies.",
    plans: [
      ["Free", "₹0 / month", ["Limited Lavi AI chats","Basic symptom tracker","Selected learn cards","Hindi-English access","Doctor-prep checklist","Privacy-first onboarding"]],
      ["Premium", "₹199 / month", ["Unlimited Lavi conversations","Advanced symptom insights","Weekly summaries","Doctor visit report","Expert webinars","Priority learning library"]],
      ["Corporate", "Custom annual", ["Employee invite dashboard","Anonymous wellness insights","HR awareness workshops","Policy support","Team activation reports","Privacy-protected analytics"]]
    ],
    credibilityTitle: "How credibility and trust will be built",
    credibility: [
      ["Expert-reviewed content", "Menopause content will be reviewed by gynecologists and women’s health experts."],
      ["Clear AI boundaries", "Lavi will clearly say it is not a doctor and cannot diagnose or prescribe."],
      ["Video testimonials", "Stories from pilot users, doctors, HR leaders and wellness experts will build credibility."],
      ["Source-backed learning", "The learn library will include simple, evidence-informed menopause content."],
      ["Privacy-first design", "Conversations and logs are sensitive, so consent and privacy are core to the product."],
      ["Corporate impact reports", "Companies receive only anonymized trends, never individual data."]
    ],
    impactTitle: "How this makes women’s lives easier",
    impact: [
      ["Less confusion", "Symptoms get a name and context."],
      ["Better doctor visits", "Women arrive with questions and summaries."],
      ["Emotional relief", "Women feel heard and supported."],
      ["Daily awareness", "Tracker makes patterns visible."],
      ["Work confidence", "Support for workplace symptoms and HR conversations."],
      ["Family conversation", "Simple language makes it easier to talk at home."]
    ],
    corporateTitle: "For menopause-inclusive workplaces",
    corporateText: "Experienced women are a valuable part of the workforce. Menopause symptoms can affect confidence, sleep, productivity and retention. HerSfar helps companies provide support, awareness sessions and anonymous wellness insights while protecting individual privacy.",
    corporateFeatures: ["Employee app access","Invite links","Anonymous dashboard","Workshops","Manager sensitization","Policy starter kit"],
    faqTitle: "Common Questions",
    faqs: [
      ["Is Lavi a doctor?", "No. Lavi is a support companion. It does not diagnose or recommend medicines or dosages."],
      ["Will the app be free?", "Yes, basic access will be free. Premium and corporate plans unlock deeper support."],
      ["Can my company see my symptoms?", "No. Corporate dashboards show only anonymous group-level insights."],
      ["Will Hindi be supported?", "Yes. Hindi and English come first. Bangla, Kannada and Punjabi are on the future roadmap."],
      ["Is this only for menopause?", "The core focus is perimenopause, menopause, post-menopause and midlife women’s wellness."]
    ],
    contactTitle: "Let’s build this journey together",
    contactText: "If you are an investor, HR leader, doctor, wellness partner or early user — HerSfar is building India’s first menopause support category.",
    footer: "HerSfar — supporting every woman’s journey with dignity, knowledge and care."
  }
};

export default function HomePage() {
  const [lang, setLang] = useState<"hi" | "en">("hi");
  const [active, setActive] = useState(0);
  const t = content[lang];

  useEffect(() => {
    const timer = setInterval(() => setActive((x) => (x + 1) % t.heroSlides.length), 2700);
    return () => clearInterval(timer);
  }, [t.heroSlides.length]);

  return (
    <main>
      <header className="nav">
        <a href="#home" className="logo">Her<span>Sfar</span></a>
        <nav>{t.nav.map((n, i) => <a key={n} href={["#home","#stages","#symptoms","#lavi","#tracker","#plans","#corporate"][i]}>{n}</a>)}</nav>
        <select value={lang} onChange={(e) => ["hi","en"].includes(e.target.value) && setLang(e.target.value as "hi" | "en")}>
          <option value="hi">हिंदी</option>
          <option value="en">English</option>
          <option disabled>বাংলা — Coming soon</option>
          <option disabled>ಕನ್ನಡ — Coming soon</option>
          <option disabled>ਪੰਜਾਬੀ — Coming soon</option>
        </select>
      </header>

      <section id="home" className="hero">
        <div className="glow" />
        <div className="heroGrid">
          <div>
            <span className="badge">{t.badge}</span>
            <h1>{t.title}</h1>
            <p className="lead">{t.text}</p>
            <div className="actions"><a className="primary" href="#plans">{t.cta1}</a><a className="secondary" href="#lavi">{t.cta2}</a></div>
            <div className="stats">{t.stats.map(([v,l]) => <div key={v}><b>{v}</b><span>{l}</span></div>)}</div>
          </div>

          <div className="carousel">
            {t.heroSlides.map(([title, text, tag], index) => (
              <div className={`slide ${index === active ? "active" : ""}`} key={title}>
                <div className="slideTag">{tag}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="mockVisual"><i/><i/><div><span/><span/><span/></div></div>
              </div>
            ))}
            <div className="dots">{t.heroSlides.map((_, i) => <button key={i} onClick={() => setActive(i)} className={i === active ? "on" : ""} />)}</div>
          </div>
        </div>
      </section>

      <section className="section two">
        <div><span className="eyebrow">Why HerSfar</span><h2>{t.introTitle}</h2><p>{t.introText}</p></div>
        <div className="quoteCard">“Every woman deserves language, support and dignity during this journey — not silence.”</div>
      </section>

      <section id="stages" className="section white">
        <div className="sectionHead"><span className="eyebrow">Journey</span><h2>{t.stagesTitle}</h2></div>
        <div className="stageGrid">{t.stages.map(([a,b]) => <div className="stage" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
      </section>

      <section id="symptoms" className="section soft">
        <div className="sectionHead"><span className="eyebrow">Symptoms</span><h2>{t.symptomsTitle}</h2><p>{t.symptomsIntro}</p></div>
        <div className="symptomGroups">{t.symptomGroups.map(([cat, list]) => <div className="symptomBox" key={cat as string}><h3>{cat}</h3>{(list as string[]).map((x) => <span key={x}>{x}</span>)}</div>)}</div>
      </section>

      <section className="section mauve">
        <div className="sectionHead light"><span className="eyebrow light">Need</span><h2>{t.whyTitle}</h2></div>
        <div className="cards four">{t.whyCards.map(([a,b]) => <div className="darkCard" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
      </section>

      <section id="lavi" className="section two">
        <div className="iphone">
          <div className="speaker" />
          <div className="screen">
            <div className="phoneTop">Lavi AI</div>
            {t.chat.map(([who,msg]) => <p key={msg} className={who === "You" ? "right" : "left"}><b>{who}</b><br/>{msg}</p>)}
            <div className="input">Ask Lavi...</div>
          </div>
        </div>
        <div><span className="eyebrow">AI Companion</span><h2>{t.laviTitle}</h2><p>{t.laviText}</p><div className="mini">{t.laviFeatures.map((x) => <span key={x}>{x}</span>)}</div></div>
      </section>

      <section id="tracker" className="section white two">
        <div><span className="eyebrow">Tracker</span><h2>{t.trackerTitle}</h2><p>{t.trackerText}</p></div>
        <div className="trackerCard">{t.trackerItems.map((x, i) => <div key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span></div>)}</div>
      </section>

      <section id="plans" className="section soft">
        <div className="sectionHead"><span className="eyebrow">Plans</span><h2>{t.packagesTitle}</h2><p>{t.packagesIntro}</p></div>
        <div className="cards">{t.plans.map(([name,price,features],i) => <div key={name as string} className={`plan ${i===1 ? "featured" : ""}`}>{i===1 && <em>Recommended</em>}<h3>{name}</h3><strong>{price}</strong>{(features as string[]).map((f) => <p key={f}>✓ {f}</p>)}<button>{i===2 ? "Book Demo" : "Start"}</button></div>)}</div>
      </section>

      <section className="section">
        <div className="sectionHead"><span className="eyebrow">Credibility</span><h2>{t.credibilityTitle}</h2></div>
        <div className="cards three">{t.credibility.map(([a,b]) => <div className="lightCard" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
      </section>

      <section className="section white">
        <div className="sectionHead"><span className="eyebrow">Impact</span><h2>{t.impactTitle}</h2></div>
        <div className="impactGrid">{t.impact.map(([a,b]) => <div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
      </section>

      <section id="corporate" className="section two">
        <div><span className="eyebrow">B2B Wellness</span><h2>{t.corporateTitle}</h2><p>{t.corporateText}</p><div className="mini">{t.corporateFeatures.map((x) => <span key={x}>{x}</span>)}</div></div>
        <div className="dashboard"><h3>Corporate Dashboard</h3><div><b>72%</b><span>Activation</span></div><div><b>148</b><span>Employees</span></div><div><b>4.2</b><span>Avg sessions</span></div><div><b>0</b><span>Individual data exposed</span></div></div>
      </section>

      <section className="section soft">
        <div className="sectionHead"><span className="eyebrow">FAQ</span><h2>{t.faqTitle}</h2></div>
        <div className="faq">{t.faqs.map(([q,a]) => <div key={q}><h3>{q}</h3><p>{a}</p></div>)}</div>
      </section>

      <section className="section center">
        <h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="primary" href="mailto:hello@hersfar.com">hello@hersfar.com</a>
      </section>

      <footer><div className="logo">Her<span>Sfar</span></div><p>{t.footer}</p><small>© 2026 HerSfar. All rights reserved.</small></footer>
    </main>
  );
}
