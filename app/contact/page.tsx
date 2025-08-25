import VSCodeLayout from '@/components/layout/VSCodeLayout'
import ContactForm from '@/components/ContactForm'
import Icon from '@/components/Icon'
import { contactFileTreeData } from '@/data/fileTreeData'

export default function ContactPage() {
  const editorTab = { id: 'contacts', name: 'contacts', active: true }

  return (
    <VSCodeLayout 
      fileTreeData={contactFileTreeData} 
      editorTab={editorTab}
      rightPanel={null}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 animate-fadeInUp">
        {/* Left: Contact info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg md:text-2xl font-semibold text-white font-mono break-words">Birlikte çalışalım!</h2>
            <p className="text-gray-400 font-mono text-sm md:text-base">
              Yeni projeler, işbirlikleri veya herhangi bir sorunuz için 
              benimle iletişime geçmekten çekinmeyin.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-800 border border-gray-600 flex items-center justify-center">
                <Icon name="ri-mail-line" className="text-blue-400"/>
              </div>
              <div>
                <div className="font-medium text-white font-mono">E-posta</div>
                <a href="mailto:emir_fent@hotmail.com" className="text-gray-400 hover:text-white font-mono">
                  emir_fent@hotmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-800 border border-gray-600 flex items-center justify-center">
                <Icon name="ri-phone-line" className="text-green-400"/>
              </div>
              <div>
                <div className="font-medium text-white font-mono">Telefon</div>
                <a href="tel:+905071003292" className="text-gray-400 hover:text-white font-mono">
                  +90 507 100 32 92
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-800 border border-gray-600 flex items-center justify-center">
                <Icon name="ri-github-fill" className="text-gray-300"/>
              </div>
              <div>
                <div className="font-medium text-white font-mono">GitHub</div>
                <a href="https://github.com/emirfent" target="_blank" className="text-gray-400 hover:text-white font-mono">
                  @emirfent
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-600">
            <h3 className="font-medium text-white mb-3 font-mono">Çalışma Saatleri</h3>
            <div className="space-y-2 text-sm text-gray-400 font-mono">
              <div>Pazartesi - Cuma: 09:00 - 18:00</div>
              <div>Hafta Sonu: 10:00 - 16:00</div>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </VSCodeLayout>
  )
}