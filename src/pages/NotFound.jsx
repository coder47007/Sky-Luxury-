import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center text-center">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-9xl font-serif text-slate-800 font-bold mb-4 opacity-50">404</h1>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Destination Not Found</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
                    The route you are looking for does not exist on our flight map. Let's get you back on course.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-8 py-3 bg-accent text-slate-900 font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        <Home className="w-4 h-4" /> Return Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 border border-slate-700 text-gray-300 font-bold uppercase tracking-widest rounded-sm hover:border-white hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
