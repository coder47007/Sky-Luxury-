import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    const handleSearch = () => {
        // Redirect to request page
        navigate('/request-quote');
    };

    return (
        <div className="relative h-[80vh] flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Private Jet"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl px-4 text-center">
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
                    <span className="block">Private Jet</span>
                    <span className="block text-accent">Charters</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light tracking-wide">
                    Experience the ultimate freedom
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSearch}
                        className="px-12 py-5 bg-accent text-slate-900 font-bold rounded-sm hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center gap-3 uppercase tracking-[0.2em] text-sm"
                    >
                        Get Quote <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
