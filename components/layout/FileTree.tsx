'use client'
import { useState } from 'react'
import Icon from '@/components/Icon'
import { FileTreeItem, FileTreeProps } from '@/types'

interface FileTreeItemProps {
  item: FileTreeItem
  level?: number
}

function FileTreeItemComponent({ item, level = 0 }: FileTreeItemProps) {
  const [expanded, setExpanded] = useState(item.expanded ?? false)
  
  const handleToggle = () => {
    if (item.type === 'folder' && item.children) {
      setExpanded(!expanded)
    }
  }

  const isActive = item.name === 'hello' || item.name === 'projects' || item.name === 'contacts'
  
  return (
    <div className="space-y-0">
      <div 
        className={`flex items-center gap-1.5 font-mono text-sm py-1.5 px-2 hover:bg-gray-800/50 cursor-pointer rounded-sm transition-colors ${
          isActive ? 'text-white bg-gray-800/50 border-l-2 border-orange-500' : 'text-gray-300 border-l-2 border-l-transparent'
        }`}
        style={{ marginLeft: `${level * 20}px` }}
        onClick={handleToggle}
      >
        {item.type === 'folder' && item.children ? (
          <Icon 
            name={expanded ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"} 
            className="text-sm w-3 h-3 flex-shrink-0"
          />
        ) : (
          <div className="w-3 h-3 flex-shrink-0"></div>
        )}
        
        <Icon 
          name={item.type === 'folder' ? (expanded ? "ri-folder-open-line" : "ri-folder-line") : item.icon} 
          className={`w-4 h-4 flex-shrink-0 ${item.iconColor || 'text-gray-300'}`}
        />
        
        <span className={item.name.includes('@') || item.name.includes('.') ? 'truncate' : ''}>
          {item.name}
        </span>
      </div>
      
      {item.type === 'folder' && item.children && expanded && (
        <div>
          {item.children.map((child) => (
            <FileTreeItemComponent 
              key={child.id} 
              item={child} 
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FileTree({ data, className = '' }: FileTreeProps) {
  return (
    <div className={`hidden md:flex w-80 bg-gray-900/95 border-r border-gray-600 flex-col ${className}`}>
      {/* Explorer header */}
      <div className="p-3 border-b border-gray-600 bg-gray-800/30 h-12 flex items-center">
        <div className="flex items-center gap-2 text-gray-300 font-mono text-sm font-medium">
          <Icon name="ri-folder-line" className="w-4 h-4"/>
          EXPLORER
        </div>
      </div>
      
      {/* File tree */}
      <div className="flex-1 p-3">
        {data.map((item) => (
          <FileTreeItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}