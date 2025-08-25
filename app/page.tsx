import VSCodeLayout from '@/components/layout/VSCodeLayout'
import SnakeGame from '@/components/game/SnakeGame'
import { homeFileTreeData } from '@/data/fileTreeData'

export default function Page(){
  const editorTab = { id: 'intro', name: 'intro.js', active: true }

  return (
    <VSCodeLayout 
      fileTreeData={homeFileTreeData} 
      editorTab={editorTab}
      rightPanel={null}
    >
      <div className="flex flex-col xl:flex-row items-start pt-4 md:pt-12 gap-6 md:gap-8 xl:gap-[400px] pl-0 md:pl-8">
        {/* Sol taraf - Ana içerik */}
        <div className="w-full xl:w-auto xl:max-w-2xl space-y-6 md:space-y-8 animate-fadeInUp">
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm md:text-lg text-gray-300 font-mono">Merhaba, ben</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-mono leading-tight break-words">
              EMİR FENT
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-blue-400 font-mono">
              &gt; Bilgisayar Mühendisi
            </p>
          </div>

          {/* Kısa Tanıtım */}
          <div className="bg-gray-800/30 border border-gray-600 rounded-lg p-4 md:p-6 space-y-3">
            <div className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-mono text-sm">Active Developer</span>
            </div>
            <p className="text-gray-300 font-mono text-sm md:text-base">
              AI/ML, IoT ve Full Stack geliştirme alanlarında projeler üzerinde çalışan bilgisayar mühendisi. 
              Yeni teknolojilerle çözümler geliştirmeyi seviyorum.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-mono">Machine Learning</span>
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-mono">IoT Systems</span>
              <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm font-mono">Full Stack Development</span>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-sm font-mono">Computer Vision</span>
            </div>
          </div>

          <div className="space-y-2 md:space-y-3 text-gray-400 font-mono text-sm sm:text-sm md:text-base">
            <p className="hidden xl:block">{`// Sağdaki Snake oyununu oynayabilirsiniz 🐍`}</p>
            <p className="xl:hidden">{`// Projelerimi ve deneyimlerimi keşfedin`}</p>
            <p>{`// İletişim için:`}</p>
            <p className="flex flex-wrap items-center gap-1">
              <span className="text-purple-400">const</span>
              <span className="text-cyan-400">email</span>
              <span className="text-white">=</span>
              <a 
                className="text-green-400 hover:text-green-300 transition-colors underline decoration-green-400/50 hover:decoration-green-300 break-all" 
                href="mailto:emir_fent@hotmail.com"
              >
&quot;emir_fent@hotmail.com&quot;
              </a>
            </p>
            <p className="flex flex-wrap items-center gap-1">
              <span className="text-purple-400">const</span>
              <span className="text-cyan-400">phone</span>
              <span className="text-white">=</span>
              <a 
                className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/50 hover:decoration-blue-300 break-all" 
                href="tel:+905071003292"
              >
&quot;+90 507 100 32 92&quot;
              </a>
            </p>
          </div>
        </div>

        {/* Sağ taraf - Snake Game (Desktop only) */}
        <SnakeGame />
      </div>
    </VSCodeLayout>
  )
}