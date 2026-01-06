import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LuxuryCard({ item }) {
    return (
        <div className="group relative bg-slate-900 shadow-2xl overflow-hidden transition-all duration-700 hover:-translate-y-2">
            {/* Border Gradient Line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Image Container */}
            <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-90"></div>

                <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                    <span className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-accent px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                        {item.category}
                    </span>
                </div>
            </div>

            {/* Content Content - Overlapping Image */}
            <div className="relative z-20 px-8 pb-10 -mt-20">
                <div className="bg-slate-950/80 backdrop-blur-xl border border-white/5 p-8 shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                        <h3 className="text-3xl font-serif text-white leading-tight">
                            {item.name}
                        </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-8 font-light text-sm md:text-base border-l-2 border-accent/20 pl-4">
                        {item.description}
                    </p>

                    <div className="flex flex-col gap-6">
                        {/* Features */}
                        <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                            {item.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-xs text-gray-400 uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Action Component */}
                        <div className="pt-6 border-t border-white/5 flex justify-end">
                            <Link
                                to={`/request-quote?interest=${encodeURIComponent(item.name)}`}
                                className="inline-flex items-center gap-2 text-white hover:text-accent font-bold uppercase tracking-[0.15em] text-xs group-hover:translate-x-1 transition-all duration-300"
                            >
                                Inquire Availability <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
