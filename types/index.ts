// Layout Types
export interface FileTreeItem {
  id: string
  name: string
  type: 'folder' | 'file'
  icon: string
  iconColor?: string
  children?: FileTreeItem[]
  expanded?: boolean
  active?: boolean
}

export interface EditorTab {
  id: string
  name: string
  active?: boolean
}

// Game Types
export interface Position {
  x: number
  y: number
}

export interface GameState {
  snake: Position[]
  food: Position
  direction: Position
  gameRunning: boolean
  gameOver: boolean
  gameWon: boolean
  score: number
  foodCount: number
  gameSpeed: number
}

export interface GameConfig {
  GRID_SIZE: number
  INITIAL_SNAKE: Position[]
  INITIAL_FOOD: Position
  INITIAL_DIRECTION: Position
  MAX_FOOD: number
  MIN_SPEED: number
  SPEED_DECREASE: number
}

// Project Types (from TechFilter)
export interface Project {
  id: string
  title: string
  desc: string
  tech: string[]
  href: string
  thumb: string
}

// Component Props
export interface VSCodeLayoutProps {
  fileTreeData: FileTreeItem[]
  editorTab: EditorTab
  children: React.ReactNode
  rightPanel?: React.ReactNode
}

export interface FileTreeProps {
  data: FileTreeItem[]
  className?: string
}

export interface EditorTabsProps {
  tabs: EditorTab[]
  className?: string
}
