'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Icon from './Icon'

const tabs = [
  { href:'/', label:'_hello' },
  { href:'/about', label:'_about-me' },
  { href:'/projects', label:'_projects' },
  { href:'/contact', label:'_contact' },
]

export default function Nav(){
  const path = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  
  const handleMenuClose = () => {
    setIsClosing(true)
  }

  const handleAnimationEnd = () => {
    if (isClosing) {
      setMobileOpen(false)
      setIsClosing(false)
    }
  }

  const handleMenuToggle = () => {
    if (mobileOpen) {
      handleMenuClose()
    } else {
      setMobileOpen(true)
    }
  }
  
  // Tüm sayfalar için VS Code header
  if (true) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-600 h-14">
          <div className="flex items-stretch h-full">
            {/* Sol üst - İsim kutusu */}
            <div className="bg-gray-900/95 border-r border-gray-600 px-3 flex items-center">
              <span className="text-gray-300 font-mono text-sm">emir-fent</span>
            </div>

            {/* Sol - VS Code benzeri tabs (sadece desktop) */}
            <div className="hidden md:flex items-stretch flex-1">
              {tabs.map(t=>{
                const active = (t.href === '/' ? path==='/' : path.startsWith(t.href))
                return (
                  <Link key={t.href} href={t.href}
                    className={`flex items-center px-4 font-mono text-sm border-r border-gray-600 last:border-r-0 transition-all duration-200 ${
                      active 
                        ? 'bg-gray-900 text-orange-400 border-b-2 border-b-orange-500' 
                        : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}>
                    {t.label}
                  </Link>
                )
              })}
            </div>

            {/* Mobil - Boş alan (flex-1 için) */}
            <div className="md:hidden flex-1"></div>

            {/* Sağ - Contact ve GitHub */}
            <div className="hidden md:flex items-stretch">
              <a href="mailto:emir_fent@hotmail.com" className="bg-gray-900/95 border-l border-gray-600 px-3 flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 font-mono text-sm">
                _contact-me
              </a>
              <a href="https://github.com/emirfent" target="_blank" className="flex items-center gap-1 bg-gray-900/95 border-l border-gray-600 px-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 font-mono text-sm">
                @emirfent <Icon name="ri-github-fill" className="w-4 h-4"/>
              </a>
            </div>
              
            {/* Mobile menu button */}
            <button 
              className="md:hidden bg-gray-900/95 border-l border-gray-600 px-3 flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <Icon 
                name={mobileOpen ? "ri-close-line" : "ri-menu-line"} 
                className={`w-4 h-4 transition-transform duration-300 ${mobileOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        {(mobileOpen || isClosing) && (
          <div 
            className={`fixed top-14 left-4 right-4 bg-gray-900/95 border border-gray-600 backdrop-blur shadow-lg z-40 ${
              isClosing ? 'animate-fadeOutUp' : 'animate-fadeInDown'
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            <nav className="px-3 py-3 space-y-1">
              {tabs.map(t=>{
                const active = (t.href === '/' ? path==='/' : path.startsWith(t.href))
                return (
                  <Link 
                    key={t.href} 
                    href={t.href}
                    onClick={handleMenuClose}
                    className={`block px-3 py-2 transition-all duration-200 font-mono text-sm border-l-2 ${
                      active 
                        ? 'border-l-orange-500 text-orange-400 bg-gray-800/50' 
                        : 'border-l-transparent text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {t.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}

        {/* Sol alt - Find me in */}
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-900 border-t border-gray-600 flex items-stretch">
          <div className="px-4 border-r border-gray-600 flex items-center bg-gray-900/95">
            <span className="text-gray-300 font-mono text-sm font-medium">find me in:</span>
          </div>
          <a href="https://instagram.com/emirfent" target="_blank" className="w-12 flex justify-center border-r border-gray-600 bg-gray-900/95 hover:bg-gray-800/50 text-gray-300 hover:text-orange-400 transition-all duration-200 pt-3" aria-label="Instagram">
            <Icon name="ri-instagram-line" className="w-4 h-4"/>
          </a>
          <a href="https://linkedin.com/in/emirfent" target="_blank" className="w-12 flex justify-center border-r border-gray-600 bg-gray-900/95 hover:bg-gray-800/50 text-gray-300 hover:text-orange-400 transition-all duration-200 pt-3" aria-label="LinkedIn">
            <Icon name="ri-linkedin-fill" className="w-4 h-4"/>
          </a>
        </div>
      </>
    )
  }
}
