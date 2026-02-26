// Header and Footer Injection
const components = {
    header: `
        <div class="container nav-container">
            <div class="logo">
                <a href="index.html">
                    <img src="logo.png" alt="Rich Leads Logo">
                </a>
            </div>
            <nav class="nav-links">
                <a href="index.html" id="nav-home">Home</a>
                <a href="data-coverage.html" id="nav-data">Data Coverage</a>
                <a href="use-cases.html" id="nav-use-cases">Use Cases</a>
                <a href="contact.html" id="nav-contact">Contact</a>
            </nav>
            <div class="nav-cta">
                <a href="pricing.html" class="btn btn-outline">View Pricing</a>
                <a href="contact.html" class="btn btn-primary">Get Your Free Lead List</a>
            </div>
            <button class="mobile-toggle" aria-label="Toggle Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    `,
    footer: `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="logo-black.png" alt="Rich Leads" class="footer-logo">
                    <p>India's most comprehensive B2B intelligence platform. Powering high-conversion outreach with verified decision-maker data.</p>
                </div>
                <div class="footer-links">
                    <h4>Platform</h4>
                    <ul>
                        <li><a href="data-coverage.html">Data Coverage</a></li>
                        <li><a href="use-cases.html">Use Cases</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                        <li><a href="compliance.html">Compliance</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:communication.richleads@gmail.com">communication.richleads@gmail.com</a></li>
                        <li><a href="contact.html">Support</a></li>
                        <li><a href="book-demo.html">Book Demo</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Rich Leads. All rights reserved.</p>
            </div>
        </div>
    `,
    whatsapp: `
        <a href="https://wa.me/917980219584" class="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 32 32" class="whatsapp-icon"><path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825.733 5.476 2.016 7.787l-2.016 7.376 7.545-1.981c2.247 1.196 4.811 1.879 7.531 1.879 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.484 0-4.814-.658-6.828-1.807l-.489-.28-4.49 1.178 1.2-4.385-.308-.49c-1.259-2.012-1.986-4.398-1.986-6.953 0-7.363 5.989-13.353 13.353-13.353s13.353 5.989 13.353 13.353c0 7.363-5.989 13.353-13.353 13.353zM22.99 18.96c-.382-.191-2.261-1.115-2.613-1.242s-.607-.191-.863.191c-.255.382-.988 1.242-1.211 1.498s-.446.287-.828.096c-.382-.191-1.614-.595-3.075-1.897-1.136-1.013-1.903-2.264-2.126-2.646s-.024-.589.167-.779c.171-.171.382-.446.573-.669s.255-.382.382-.637-.064-.478-.159-.669c-.096-.191-.863-2.073-1.182-2.837-.311-.746-.628-.646-.863-.658s-.478-.016-.734-.016c-.255 0-.669.096-1.019.478s-1.338 1.306-1.338 3.185 1.37 3.695 1.561 3.95c.191.255 2.693 4.113 6.524 5.766.911.393 1.622.628 2.176.804.915.291 1.75.25 2.408.151.734-.11 2.261-.924 2.579-1.815s.318-1.657.223-1.815-.347-.255-.731-.447z"></path></svg>
        </a>
    `,
    leadPopup: `
        <div id="lead-popup">
            <div class="popup-card">
                <button class="popup-close" aria-label="Close Popup">&times;</button>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-step active" data-step="1"></div>
                        <div class="progress-step" data-step="2"></div>
                        <div class="progress-step" data-step="3"></div>
                    </div>
                </div>

                <form id="lead-form">
                    <!-- Step 1: Target Requirements -->
                    <div class="popup-step active" data-step="1">
                        <h2>Target Market</h2>
                        <p>Tell us about the companies you want to reach.</p>
                        <div class="form-group">
                            <label>Target Location</label>
                            <input type="text" class="form-control" name="location" placeholder="e.g. Bangalore, Mumbai" required>
                        </div>
                        <div class="form-group">
                            <label>Industry Verticals</label>
                            <input type="text" class="form-control" name="industry" placeholder="e.g. Fintech, E-commerce" required>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label>Revenue Range</label>
                                <select class="form-control" name="revenue">
                                    <option>0 - 10 Cr</option>
                                    <option>10 - 50 Cr</option>
                                    <option>50 - 100 Cr</option>
                                    <option>100 Cr+</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Profitability</label>
                                <select class="form-control" name="profitability">
                                    <option>Profitable</option>
                                    <option>Break-even</option>
                                    <option>High Growth</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2: Professional Details -->
                    <div class="popup-step" data-step="2">
                        <h2>Personalize Data</h2>
                        <p>Help us tailor the insights for your specific needs.</p>
                        <div class="form-group">
                            <label>Your Full Name</label>
                            <input type="text" class="form-control" name="name" placeholder="John Doe" required>
                        </div>
                        <div class="form-group">
                            <label>Company Name</label>
                            <input type="text" class="form-control" name="company" placeholder="Acme India Pvt Ltd" required>
                        </div>
                    </div>

                    <!-- Step 3: Delivery Options -->
                    <div class="popup-step" data-step="3">
                        <h2>Final Step</h2>
                        <p>Where should we send your custom lead list?</p>
                        <div class="form-group">
                            <label>WhatsApp Number</label>
                            <input type="tel" class="form-control" name="whatsapp" placeholder="+91 99999 99999" required>
                        </div>
                        <div class="form-group">
                            <label>Work Email Address</label>
                            <input type="email" class="form-control" name="email" placeholder="john@company.in" required>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--text-light); line-height: 1.4;">
                            *This data will only be used for lead list delivery and direct communication purposes.
                        </p>
                    </div>

                    <div class="popup-nav">
                        <button type="button" class="btn btn-outline popup-back" style="display: none;">Back</button>
                        <button type="button" class="btn btn-primary popup-next">Next Step</button>
                        <button type="submit" class="btn btn-primary popup-submit" style="display: none;">Send My Lead List</button>
                    </div>
                </form>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // Inject components
    const headerElem = document.querySelector('header');
    const footerElem = document.querySelector('footer');

    if (headerElem) {
        headerElem.innerHTML = components.header;

        // Mobile menu toggle logic
        const toggle = headerElem.querySelector('.mobile-toggle');
        const navLinks = headerElem.querySelector('.nav-links');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }

    if (footerElem) footerElem.innerHTML = components.footer;

    // Inject WhatsApp Button & Lead Popup
    document.body.insertAdjacentHTML('beforeend', components.whatsapp);
    document.body.insertAdjacentHTML('beforeend', components.leadPopup);

    const leadPopup = document.getElementById('lead-popup');
    const leadForm = document.getElementById('lead-form');
    const steps = leadPopup.querySelectorAll('.popup-step');
    const progressSteps = leadPopup.querySelectorAll('.progress-step');
    const nextBtn = leadPopup.querySelector('.popup-next');
    const backBtn = leadPopup.querySelector('.popup-back');
    const submitBtn = leadPopup.querySelector('.popup-submit');
    const closeBtn = leadPopup.querySelector('.popup-close');
    let currentStep = 1;

    const updateStep = (step) => {
        steps.forEach(s => s.classList.remove('active'));
        progressSteps.forEach((s, idx) => {
            if (idx + 1 <= step) s.classList.add('active');
            else s.classList.remove('active');
        });
        leadPopup.querySelector(`.popup-step[data-step="${step}"]`).classList.add('active');

        backBtn.style.display = step === 1 ? 'none' : 'block';
        if (step === 3) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
    };

    nextBtn.addEventListener('click', () => {
        const currentInputs = steps[currentStep - 1].querySelectorAll('input[required]');
        let valid = true;
        currentInputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (valid && currentStep < 3) {
            currentStep++;
            updateStep(currentStep);
        }
    });

    backBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStep(currentStep);
        }
    });

    closeBtn.addEventListener('click', () => {
        leadPopup.classList.remove('active');
        document.body.style.overflow = '';
    });

    leadPopup.addEventListener('click', (e) => {
        if (e.target === leadPopup) closeBtn.click();
    });

    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitBtn.innerText = 'Sending Request...';
        submitBtn.disabled = true;

        // Simulate submission
        setTimeout(() => {
            leadPopup.querySelector('.popup-card').innerHTML = `
                <div style="text-align: center; padding: 1rem 0;">
                    <div style="font-size: 4.5rem; margin-bottom: 2rem;">🚀</div>
                    <h2 style="font-size: 2.25rem; margin-bottom: 1rem;">Request Received!</h2>
                    <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.6;">Our B2B analysts are preparing your custom lead list based on your criteria. You'll receive the download link via email and WhatsApp shortly.</p>
                    <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 2.5rem; width: 100%;">Got it, Thanks!</button>
                </div>
            `;
        }, 1500);
    });

    // Link all CTA buttons to the popup
    document.querySelectorAll('a[href="contact.html"], .btn-primary, .btn-white').forEach(btn => {
        const text = btn.innerText.toLowerCase();
        if (text.includes('lead list') || text.includes('get in touch') || text.includes('view plans')) {
            // We want 'view plans' to navigate, so exclude it from popup if needed or let it be.
            // User said "throughout the website there are a lot of CTA buttons with 'get your free lead list', when somebody clicks on that I want a popup"
            if (text.includes('lead list')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    leadPopup.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            }
        }
    });

    // Active link highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .feature-row, .section-title, .section-lead, .trust-logos').forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
});
