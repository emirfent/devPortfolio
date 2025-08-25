import Nav from '@/components/Nav'
import FileTree from './FileTree'
import EditorTabs from './EditorTabs'
import ErrorBoundary from '@/components/ErrorBoundary'
import { VSCodeLayoutProps } from '@/types'

export default function VSCodeLayout({ 
  fileTreeData, 
  editorTab, 
  children, 
  rightPanel 
}: VSCodeLayoutProps) {
  const tabs = [editorTab]

  return (
    <>
      <Nav/>
      <main className="pt-14 pb-12 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row border-t border-gray-600">
          <FileTree data={fileTreeData} />
          
          <div className="flex-1 bg-gray-900 flex flex-col">
            <EditorTabs tabs={tabs} />
            
            <div className="flex-1 p-3 md:p-6 pb-6">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </div>
          </div>
          
          {rightPanel}
        </div>
      </main>
    </>
  )
}

