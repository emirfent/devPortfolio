import Icon from '@/components/Icon'
import { EditorTabsProps } from '@/types'

export default function EditorTabs({ tabs, className = '' }: EditorTabsProps) {
  return (
    <div className={`hidden md:flex items-center border-b border-gray-600 bg-gray-800/30 h-12 ${className}`}>
      {tabs.map((tab) => (
        <div 
          key={tab.id}
          className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-r border-gray-600 text-gray-300 font-mono text-sm h-full"
        >
          {tab.name}
          <button className="ml-2 text-gray-500 hover:text-gray-300">
            <Icon name="ri-close-line" className="text-xs"/>
          </button>
        </div>
      ))}
    </div>
  )
}
