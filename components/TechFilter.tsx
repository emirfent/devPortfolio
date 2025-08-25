'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import Icon from './Icon'

export type Project = { id:string; title:string; desc:string; tech:string[]; href:string; thumb:string }

const techList = [
  {key:'Python', icon:'ri-code-line'},
  {key:'React', icon:'ri-reactjs-line'},
  {key:'Next.js', icon:'ri-nextjs-line'},
  {key:'OpenCV', icon:'ri-eye-line'},
  {key:'SVM', icon:'ri-brain-line'},
  {key:'PyTorch', icon:'ri-robot-line'},
  {key:'AI/ML', icon:'ri-robot-2-line'},
  {key:'MongoDB', icon:'ri-database-2-line'},
  {key:'Network Security', icon:'ri-shield-line'},
  {key:'WEKA', icon:'ri-bar-chart-line'},
  {key:'Arduino', icon:'ri-cpu-line'},
  {key:'IoT', icon:'ri-wifi-line'},
  {key:'Mobile App', icon:'ri-smartphone-line'},
  {key:'Raspberry Pi', icon:'ri-device-line'},
  {key:'Sensors', icon:'ri-sensor-line'},
]

export default function TechFilter({items}:{items:Project[]}){
  const [active, setActive] = useState<string[]>([])
  const filtered = useMemo(
    ()=> items.filter(p=> active.length===0 || p.tech.some(t=>active.includes(t))),
    [items, active]
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
      {/* left sidebar */}
      <aside className="md:col-span-3 bg-gray-800/30 border border-gray-600 rounded p-3 md:p-4">
        <div className="text-lg md:text-xl mb-3 text-white font-mono">projects</div>
        <ul className="space-y-2">
          {techList.map(t=>{
            const checked = active.includes(t.key)
            return (
              <li key={t.key}>
                <button
                  onClick={()=> setActive(s=> checked ? s.filter(x=>x!==t.key) : [...s, t.key])}
                  className={`w-full flex items-center gap-2 md:gap-3 rounded border px-2 md:px-3 py-2 text-sm md:text-base font-mono transition-colors ${
                    checked
                      ? 'border-orange-500 bg-orange-500/10 text-orange-400' 
                      : 'border-gray-600 bg-gray-800/30 text-gray-300 hover:border-gray-500 hover:bg-gray-700/30'
                  }`}
                >
                  <Icon name={t.icon} className="w-4 h-4 flex-shrink-0"/> 
                  <span className="truncate">{t.key}</span>
                  <span className="ml-auto text-sm">{checked?'✓':''}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </aside>

      {/* cards */}
      <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {filtered.map(p=>(
          <div key={p.id} className="bg-gray-800/30 border border-gray-600 rounded overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image 
                src={p.thumb} 
                alt={p.title} 
                width={400}
                height={225}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-2 right-2 bg-gray-900/80 text-sm px-2 py-1 rounded text-gray-300 font-mono flex items-center gap-1">
                <Icon name="ri-code-line" className="w-3 h-3"/> {p.tech[0]}
              </div>
            </div>
            <div className="p-3 md:p-4">
              <div className="text-sm md:text-base font-medium text-white font-mono break-words">{p.title}</div>
              <p className="text-sm md:text-sm text-gray-400 mt-1 font-mono">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {p.tech.map((tech, index) => (
                  <span key={index} className="text-sm px-2 py-1 bg-gray-700/50 text-gray-300 rounded font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
