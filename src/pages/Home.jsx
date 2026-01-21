import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import LuxuryCard from '../components/LuxuryCard';
import { inventory } from '../data/inventory';

export default function Home() {
    // Generate ItemList schema for SEO
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Exclusive Private Jet Collection",
        "description": "Curated selection of ultra-luxury private jets available for charter worldwide",
        "numberOfItems": inventory.length,
        "itemListElement": inventory.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": item.name,
                "description": item.description,
                "category": item.category,
                "image": `https://sky-sea-luxury.vercel.app${item.image}`,
                "brand": {
                    "@type": "Brand",
                    "name": item.name.split(" ")[0] // Extract manufacturer name
                },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": item.price.replace(/[^0-9]/g, ''),
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "url": `https://sky-sea-luxury.vercel.app/request-quote?interest=${encodeURIComponent(item.name)}`
                }
            }
        }))
    };

    return (
        <>
            {/* JSON-LD Schema for ItemList */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            <Hero />
            <TrustBar />

            <main className="max-w-7xl mx-auto px-4 py-24">
                <article>
                    <header className="mb-24 text-center">
                        <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-6 block">The Exclusive Jet Collection</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Curated Excellence</h2>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
                    </header>

                    <section className="grid grid-cols-1 gap-20" aria-label="Private jet fleet">
                        {inventory.map((item) => (
                            <LuxuryCard key={item.id} item={item} />
                        ))}
                    </section>
                </article>
            </main>
        </>
    );
}
