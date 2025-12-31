// Language data for all pages
const translations = {
    en: {
        'hero-title': 'Private Mobility Redefined',
        'hero-text': 'Experience unparalleled discretion and luxury in Morocco\'s premier private car service.',
        'cta-text': 'Inquire via WhatsApp',
        'about-title': 'About Us',
        'about-text': 'MOROCCO LUXURY CAR provides elite private mobility solutions, ensuring discretion and authority in every journey. Established to serve discerning clients, we uphold the highest standards of service.',
        'fleet-title': 'Fleet',
        'sedans-title': 'Sedans',
        'sedans-text': 'Elegant and refined vehicles for executive travel.',
        'suvs-title': 'SUVs',
        'suvs-text': 'Spacious and powerful options for diverse terrains.',
        'sports-title': 'Sports Cars',
        'sports-text': 'High-performance models for discerning enthusiasts.',
        'services-title': 'Services',
        'service-1': 'Chauffeur-driven transportation',
        'service-2': 'Airport transfers',
        'service-3': 'Event and occasion services',
        'service-4': 'Custom itineraries',
        'contact-title': 'Contact',
        'contact-text': 'For inquiries, contact us directly via WhatsApp.',
        'contact-cta': 'WhatsApp',
        'footer-text': 'MOROCCO LUXURY CAR | Private Mobility Services'
    },
    fr: {
        'hero-title': 'Mobilité Privée Redéfinie',
        'hero-text': 'Découvrez une discrétion et un luxe incomparables dans le service de voitures privées de premier plan au Maroc.',
        'cta-text': 'Demander via WhatsApp',
        'about-title': 'À Propos',
        'about-text': 'MOROCCO LUXURY CAR offre des solutions de mobilité privée d\'élite, garantissant discrétion et autorité à chaque trajet. Établi pour servir des clients exigeants, nous maintenons les normes les plus élevées de service.',
        'fleet-title': 'Flotte',
        'sedans-title': 'Berlines',
        'sedans-text': 'Véhicules élégants et raffinés pour les déplacements exécutifs.',
        'suvs-title': 'SUV',
        'suvs-text': 'Options spacieuses et puissantes pour divers terrains.',
        'sports-title': 'Voitures de Sport',
        'sports-text': 'Modèles haute performance pour les passionnés exigeants.',
        'services-title': 'Services',
        'service-1': 'Transport avec chauffeur',
        'service-2': 'Transferts aéroportuaires',
        'service-3': 'Services pour événements et occasions',
        'service-4': 'Itinéraires personnalisés',
        'contact-title': 'Contact',
        'contact-text': 'Pour toute demande, contactez-nous directement via WhatsApp.',
        'contact-cta': 'WhatsApp',
        'footer-text': 'MOROCCO LUXURY CAR | Services de Mobilité Privée'
    }
};

// Detect browser language and set default
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('fr') ? 'fr' : 'en');

// Function to update content
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    for (const [key, value] of Object.entries(translations[lang])) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
    // Update button styles
    document.getElementById('lang-en').style.fontWeight = lang === 'en' ? 'bold' : 'normal';
    document.getElementById('lang-fr').style.fontWeight = lang === 'fr' ? 'bold' : 'normal';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    // Event listeners for language switch
    document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
    document.getElementById('lang-fr').addEventListener('click', () => updateLanguage('fr'));
});