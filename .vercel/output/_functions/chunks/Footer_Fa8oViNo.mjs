import { e as createComponent, o as renderHead, p as renderSlot, r as renderTemplate, h as createAstro, m as maybeRenderHead } from './astro/server_D86D_h2o.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description" content="11,000 ha plantation • 22 TPD processing • Zero-waste • Export-ready VCO"><!-- FAVICON: Link to your favicon.png, assuming it's placed in the project's public/ folder --><link rel="icon" type="image/png" href="/favicon.png"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Satoshi:wght@500;700;900&family=Dancing+Script:wght@700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">${renderHead()}</head>  ${renderSlot($$result, $$slots["header"])} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderSlot($$result, $$slots["footer"])} </html>`;
}, "C:/Users/Siri/Documents/Code Base/VerdantArces/Verdant-Astro-Perfect/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<header class="sticky top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition duration-300" data-astro-cid-3ef6ksr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 flex justify-between items-center" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center" data-astro-cid-3ef6ksr2> <!-- UPDATED LOGO: Larger size, no surrounding text, no shadow --> <img src="/assets/logo.png" alt="Verdant Acres Logo" class="w-24 h-24 object-contain rounded-xl" data-astro-cid-3ef6ksr2> </a> <nav class="flex items-center space-x-4 lg:space-x-8 text-sm font-medium text-gray-600" data-astro-cid-3ef6ksr2> <!-- DESKTOP NAVIGATION --> <div class="hidden sm:flex items-center space-x-4 lg:space-x-8" data-astro-cid-3ef6ksr2> <!-- NEW: Home Link --> <a href="/" class="hover:text-corporate" data-astro-cid-3ef6ksr2>Home</a> <!-- ABOUT DROPDOWN MENU - Click-based Toggle (Desktop Only) --> <div class="relative py-2" data-astro-cid-3ef6ksr2> <!-- Dropdown Trigger Button --> <button id="about-dropdown-button" onclick="toggleDropdown(event)" class="hover:text-corporate cursor-pointer flex items-center p-1 -m-1 focus:outline-none" aria-expanded="false" data-astro-cid-3ef6ksr2>
About
<!-- Dropdown Icon --> <svg id="about-dropdown-icon" class="ml-1 w-3 h-3 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path></svg> </button> <!-- Dropdown Menu Content --> <div id="about-dropdown-menu" class="absolute left-1/2 -translate-x-1/2 mt-4 w-40 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 
                      transition duration-300 transform origin-top-right dropdown-menu z-10" data-astro-cid-3ef6ksr2> <div class="py-1" data-astro-cid-3ef6ksr2> <!-- Dropdown Item 1: About Us --> <a href="/about" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-corporate" data-astro-cid-3ef6ksr2>About Us</a> <!-- Dropdown Item 2: Our Team --> <a href="/team" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-corporate" data-astro-cid-3ef6ksr2>Our Team</a> </div> </div> </div> <!-- Standard Links (Desktop Only) --> <a href="/operations" class="hover:text-corporate hidden md:block" data-astro-cid-3ef6ksr2>Operations</a> <a href="/products" class="hover:text-corporate" data-astro-cid-3ef6ksr2>Products</a> <a href="/sustainability" class="hover:text-corporate" data-astro-cid-3ef6ksr2>Sustainability</a> </div> <!-- HAMBURGER MENU BUTTON (Mobile Only) --> <button id="mobile-menu-button" onclick="toggleMobileMenu()" class="sm:hidden text-gray-600 hover:text-corporate p-2 focus:outline-none" aria-label="Toggle navigation menu" data-astro-cid-3ef6ksr2> <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-3ef6ksr2></path></svg> <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path></svg> </button> <!-- CONNECT BUTTON (Visible on all sizes) --> <a href="/contact" class="bg-corporate text-white px-5 py-2.5 rounded-xl hover:bg-primary transition duration-300 shadow-lg font-bold" data-astro-cid-3ef6ksr2>
Connect
</a> </nav> </div> </header> <!-- MOBILE MENU DRAWER --> <div id="mobile-menu" class="fixed inset-0 top-[60px] bg-white transform -translate-y-full transition-transform duration-500 ease-in-out z-40 sm:hidden shadow-lg overflow-y-auto" data-astro-cid-3ef6ksr2> <div class="p-6 space-y-4" data-astro-cid-3ef6ksr2> <!-- NEW: Home Link --> <a href="/" class="block text-lg font-medium text-gray-700 hover:text-corporate py-2 border-b border-gray-100" onclick="closeMobileMenu()" data-astro-cid-3ef6ksr2>Home</a> <!-- Main Links --> <a href="/about" class="block text-lg font-medium text-gray-700 hover:text-corporate py-2 border-b border-gray-100" onclick="closeMobileMenu()" data-astro-cid-3ef6ksr2>About Us</a> <a href="/team" class="block text-lg font-medium text-gray-700 hover:text-corporate py-2 border-b border-gray-100 pl-4" onclick="closeMobileMenu()" data-astro-cid-3ef6ksr2>Our Team</a> <a href="/operations" class="block text-lg font-medium text-gray-700 hover:text-corporate py-2 border-b border-gray-100" onclick="closeMobileMenu()" data-astro-cid-3ef6ksr2>Operations</a> <a href="/products" class="block text-lg font-medium text-gray-700 hover:text-corporate py-2 border-b border-gray-100" onclick="closeMobileMenu()" data-astro-cid-3ef6ksr2>Products</a> <a href="/sustainability" class="block text-lg font-medium text-gray-700 hover:text-corporate py-2 border-b border-gray-100" onclick="closeMobileMenu()" data-astro-cid-3ef6ksr2>Sustainability</a> </div> </div>  <script>
  // --- DESKTOP DROPDOWN LOGIC ---
  
  // Function to toggle the desktop dropdown state
  function toggleDropdown(event) {
    // Prevent navigating to the /about page when clicking the button
    event.preventDefault();
    
    const menu = document.getElementById('about-dropdown-menu');
    const icon = document.getElementById('about-dropdown-icon');
    const button = document.getElementById('about-dropdown-button');

    if (!menu || !icon || !button) return;

    const isOpen = menu.classList.contains('is-open');

    // Close any currently open menus before opening the new one
    if (!isOpen) {
      closeAllDropdowns();
    }

    // Toggle visibility and icon rotation
    menu.classList.toggle('is-open');
    icon.classList.toggle('rotate-180');
    
    // Update ARIA attribute for accessibility
    button.setAttribute('aria-expanded', String(!isOpen));
  }
  
  // Function to close the desktop dropdown
  function closeDropdown() {
    const menu = document.getElementById('about-dropdown-menu');
    const icon = document.getElementById('about-dropdown-icon');
    const button = document.getElementById('about-dropdown-button');
    
    if (menu && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      icon.classList.remove('rotate-180');
      button.setAttribute('aria-expanded', 'false');
    }
  }

  // Function to close all open desktop dropdowns
  function closeAllDropdowns() {
    // Currently, only one dropdown exists, so we call closeDropdown directly
    closeDropdown();
  }

  // Close desktop dropdown when clicking outside
  document.addEventListener('click', (event) => {
    const button = document.getElementById('about-dropdown-button');

    // Check if the click occurred outside the dropdown button itself and is not inside the mobile menu
    if (button && !button.contains(event.target)) {
      closeDropdown();
    }
  });

  // --- MOBILE MENU LOGIC ---
  
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.toggle('mobile-menu-open');
    
    // Toggle icons
    menuIconOpen.classList.toggle('hidden', isOpen);
    menuIconClose.classList.toggle('hidden', !isOpen);

    // Prevent body scrolling when menu is open
    document.body.classList.toggle('noscroll', isOpen);

    // When opening the mobile menu, ensure desktop dropdown is closed
    if (isOpen) {
      closeAllDropdowns();
    }
  }

  function closeMobileMenu() {
    if (mobileMenu.classList.contains('mobile-menu-open')) {
      toggleMobileMenu();
    }
  }
  
  // Optional: Close mobile menu on resize (when desktop view takes over)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 640) { // Tailwind's 'sm' breakpoint
      closeMobileMenu();
    }
  });

<\/script>`])), maybeRenderHead());
}, "C:/Users/Siri/Documents/Code Base/VerdantArces/Verdant-Astro-Perfect/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-neutral-900 text-white py-16" data-astro-cid-sz7xmlte> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left" data-astro-cid-sz7xmlte> <div class="md:col-span-1" data-astro-cid-sz7xmlte> <a href="/" class="flex items-center justify-center md:justify-start" data-astro-cid-sz7xmlte> <img              src="/assets/Logo-F.png"               alt="Verdant Acres Logo"               class="w-24 h-24 object-contain"             data-astro-cid-sz7xmlte></img > </a> <p class="text-white/80 text-sm leading-relaxed mb-6" data-astro-cid-sz7xmlte>
Pioneering West Africa’s fully integrated coconut value chain from 11,000 hectares of sustainable plantations to premium, export-ready Virgin Coconut Oil.
</p> </div> <div data-astro-cid-sz7xmlte> <h3 class="text-[#af8737] font-black text-lg mb-5" data-astro-cid-sz7xmlte>Quick Links</h3> <ul class="space-y-3 text-white/80 text-sm" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/" class="hover:text-[#af8737] transition" data-astro-cid-sz7xmlte>Home</a></li> <li data-astro-cid-sz7xmlte><a href="/about" class="hover:text-[#af8737] transition" data-astro-cid-sz7xmlte>About Us</a></li> <li data-astro-cid-sz7xmlte><a href="/operations" class="hover:text-[#af8737] transition" data-astro-cid-sz7xmlte>Operations</a></li> <li data-astro-cid-sz7xmlte><a href="/products" class="hover:text-[#af8737] transition" data-astro-cid-sz7xmlte>Products</a></li> <li data-astro-cid-sz7xmlte><a href="/sustainability" class="hover:text-[#af8737] transition" data-astro-cid-sz7xmlte>Sustainability</a></li> <li data-astro-cid-sz7xmlte><a href="/team" class="hover:text-[#af8737] transition" data-astro-cid-sz7xmlte>Our Team</a></li> </ul> </div> <div data-astro-cid-sz7xmlte> <h3 class="text-[#af8737] font-black text-lg mb-5" data-astro-cid-sz7xmlte>Get in Touch</h3> <ul class="space-y-4 text-white/80 text-sm" data-astro-cid-sz7xmlte> <li class="flex items-center justify-center md:justify-start gap-3" data-astro-cid-sz7xmlte> <i class="fas fa-envelope text-[#af8737]" data-astro-cid-sz7xmlte></i> <a href="mailto:info@verdantacres.com" class="hover:text-[#af8737] transition" data-astro-cid-sz7xmlte>info@verdantacres.com</a> </li> <li class="flex items-center justify-center md:justify-start gap-3" data-astro-cid-sz7xmlte> <i class="fas fa-phone text-[#af8737]" data-astro-cid-sz7xmlte></i> <span data-astro-cid-sz7xmlte>+234 (0) 906 2834 201, <br data-astro-cid-sz7xmlte> +234 (0) 906 2834 202</span> </li> <li class="flex items-center justify-center md:justify-start gap-3" data-astro-cid-sz7xmlte> <i class="fas fa-map-marker-alt text-[#af8737]" data-astro-cid-sz7xmlte></i> <span data-astro-cid-sz7xmlte>24c Dr Omon Ebhomenye Street, <br data-astro-cid-sz7xmlte>Lekki Phase 1 Lagos, Nigeria</span> </li> </ul> </div> <div class="md:col-span-1" data-astro-cid-sz7xmlte> <h3 class="text-[#af8737] font-black text-lg mb-5" data-astro-cid-sz7xmlte>Partner With Us</h3> <p class="text-white/80 text-sm mb-6" data-astro-cid-sz7xmlte>
Secure supply. Sustainable impact. Strong returns.
</p> <a href="/contact" class="inline-block bg-[#af8737] text-neutral-900 font-bold py-4 px-8 rounded-full hover:bg-white transition shadow-xl" data-astro-cid-sz7xmlte>
Explore Opportunities
</a> </div> </div> <div class="border-t border-white/20 mt-12 pt-8 text-center text-white/60 text-sm" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
© <span id="year" data-astro-cid-sz7xmlte>${(/* @__PURE__ */ new Date()).getFullYear()}</span> Verdant Acres Limited. All Rights Reserved. 
        | Integrated Coconut Agribusiness • Nigeria
</p> </div> </div> </footer> `;
}, "C:/Users/Siri/Documents/Code Base/VerdantArces/Verdant-Astro-Perfect/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
