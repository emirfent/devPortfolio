import VSCodeLayout from '@/components/layout/VSCodeLayout'
import { loadingFileTreeData } from '@/data/fileTreeData'

export default function LoadingPage() {
  const editorTab = { id: 'spinner', name: 'spinner.js', active: true }

  return (
    <VSCodeLayout 
      fileTreeData={loadingFileTreeData} 
      editorTab={editorTab}
      rightPanel={null}
    >
      <div className="flex items-center justify-center min-h-[400px] animate-fadeInUp">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto animate-spin">
            <div className="w-full h-full border-4 border-gray-600 border-t-orange-400 rounded-full"></div>
          </div>
          <div className="text-gray-400 font-mono text-sm">
            <p>{`// loading page content`}</p>
            <p>const <span className="text-cyan-400">loading</span> = <span className="text-orange-400">true</span>;</p>
          </div>
        </div>
      </div>
    </VSCodeLayout>
  )
}
