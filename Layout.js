import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Button } from "@/components/ui/button";
import { Menu, X, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', page: 'Home' },
        { name: 'Products', page: 'Products' },
        { name: 'Support', page: 'Support' },
        { name: 'About', page: 'About' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white">
            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0f1a]/80 border-b border-gray-800/50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white text-xl">
                                EZ
                            </div>
                            <span className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                                Ez Studio
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    to={createPageUrl(link.page)}
                                    className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                                        currentPageName === link.page ? 'text-cyan-400' : 'text-gray-400'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Login Button */}
                        <div className="hidden md:block">
                            <Button 
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-6 transition-all duration-300 hover:scale-105"
                            >
                                <Gamepad2 className="w-4 h-4 mr-2" />
                                Login with Discord
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 text-gray-400 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-gray-800/50 bg-[#0a0f1a]/95 backdrop-blur-xl"
                        >
                            <div className="px-4 py-4 space-y-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.page}
                                        to={createPageUrl(link.page)}
                                        className={`block py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                                            currentPageName === link.page ? 'text-cyan-400' : 'text-gray-400'
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button 
                                    className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full"
                                >
                                    <Gamepad2 className="w-4 h-4 mr-2" />
                                    Login with Discord
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <main className="pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 mt-20">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white text-sm">
                                EZ
                            </div>
                            <span className="font-semibold text-gray-400">Ez Studio</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            © 2024 Ez Studio. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
