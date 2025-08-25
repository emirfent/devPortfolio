import { Project } from '@/components/TechFilter'

export const projectsData: Project[] = [
  { 
    id: 'p1', 
    title: 'Bitki Hastalıkları Tespiti // _plant-disease-detection', 
    desc: 'Mısır, Patates ve Buğday bitkilerinde hastalıkların görüntü işleme yöntemi ile tespiti ve SVM algoritması kullanılarak analizi.', 
    tech: ['Python', 'OpenCV', 'SVM'], 
    href: '', 
    thumb: '/images/plant-disease.jpg' 
  },
  { 
    id: 'p2', 
    title: 'Tür İçi Sınıflandırma AI // _species-classification', 
    desc: 'LEVIT, VIT, CLIP, FLORENCE, BLIP, GIT modellerinin CUB-200-2011 ve BUTTERFLY veri tabanında performans analizleri.', 
    tech: ['Python', 'PyTorch', 'AI/ML'], 
    href: '', 
    thumb: '/images/species-classification.jpg' 
  },
  { 
    id: 'p3', 
    title: 'Randevu Sistemi // _appointment-system', 
    desc: 'Next.js ve React kullanılarak MongoDB bağlantılı web tabanlı randevu sistemi geliştirilmesi.', 
    tech: ['Next.js', 'React', 'MongoDB'], 
    href: '', 
    thumb: '/images/appointment-system.jpg' 
  },
  { 
    id: 'p4', 
    title: 'Ağ İzleme ve Saldırı Tespiti // _network-security', 
    desc: 'Python kullanılarak yerel ağ trafiğinin izlenmesi, saldırı tespit edilmesi ve verilerin WEKA ile analizi.', 
    tech: ['Python', 'Network Security', 'WEKA'], 
    href: '', 
    thumb: '/images/network-security.jpg' 
  },
  { 
    id: 'p5', 
    title: 'Akıllı Atık Sistemi // _smart-waste', 
    desc: 'Arduino tabanlı; koku, doluluk, konum takibi yapan ve mobil uygulama ile kontrol edilen akıllı atık yönetim sistemi.', 
    tech: ['Arduino', 'IoT', 'Mobile App'], 
    href: '', 
    thumb: '/images/smart-waste.jpg' 
  },
  { 
    id: 'p6', 
    title: 'Akıllı Sera Sistemi // _smart-greenhouse', 
    desc: 'Raspberry Pi tabanlı; nem, sıcaklık, gaz derişimi ölçen, havalandırma kontrolü sağlayan akıllı sera sistemi.', 
    tech: ['Raspberry Pi', 'IoT', 'Sensors'], 
    href: '', 
    thumb: '/images/greenhouse.jpg' 
  },
]

