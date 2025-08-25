import VSCodeLayout from '@/components/layout/VSCodeLayout'
import TechFilter from '@/components/TechFilter'
import { projectsFileTreeData } from '@/data/fileTreeData'
import { projectsData } from '@/data/projectsData'

export default function Page(){
  const editorTab = { id: 'react', name: 'React', active: true }

  return (
    <VSCodeLayout 
      fileTreeData={projectsFileTreeData} 
      editorTab={editorTab}
      rightPanel={null}
    >
      <div className="animate-fadeInUp">
        <TechFilter items={projectsData}/>
      </div>
    </VSCodeLayout>
  )
}