'use client'
import VSCodeLayout from '@/components/layout/VSCodeLayout'
import Icon from '@/components/Icon'
import { aboutFileTreeData } from '@/data/fileTreeData'
import { useState } from 'react'

export default function Page(){
  const [codeSnippetsExpanded, setCodeSnippetsExpanded] = useState(true)
  const editorTab = { id: 'education', name: 'education', active: true }

  const rightPanel = (
    <div className="hidden xl:flex w-[600px] bg-gray-900/95 border-l border-gray-600 flex-col">
      {/* Snippets header */}
      <div className="p-3 border-b border-gray-600 bg-gray-800/30 h-12 flex items-center">
        <div 
          className="flex items-center gap-2 text-gray-300 font-mono text-sm font-medium cursor-pointer hover:bg-gray-800/50 px-2 py-1 rounded-sm transition-colors"
          onClick={() => setCodeSnippetsExpanded(!codeSnippetsExpanded)}
        >
          <Icon name={codeSnippetsExpanded ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"} className="w-3 h-3 flex-shrink-0"/>
          <span>CODE SNIPPETS</span>
        </div>
      </div>
      
      {/* Snippets content */}
      {codeSnippetsExpanded && (
        <div className="flex-1 p-4 space-y-4">
          {/* Plant Disease Detection */}
          <div className="bg-gray-800/50 border border-gray-600 rounded p-3">
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                🌱
              </div>
              <span className="text-green-400">@plant-disease</span>
              <span className="ml-auto">python</span>
            </div>
            <div className="bg-gray-900 rounded p-2 font-mono text-sm">
              <div className="text-purple-400">def <span className="text-cyan-400">detect_plant_disease</span><span className="text-gray-300">(image_path): </span></div>
              <div className="text-gray-300 ml-2">img = cv2.imread(image_path)</div>
              <div className="text-gray-300 ml-2">features = extract_features(img)</div>
              <div className="text-cyan-400 ml-2">prediction = svm_model.predict([features])</div>
              <div className="text-purple-400 ml-2">return <span className="text-gray-300">disease_classes[prediction[0]]</span></div>
            </div>
          </div>

          {/* Arduino Smart Waste System */}
          <div className="bg-gray-800/50 border border-gray-600 rounded p-3">
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm">
                🔧
              </div>
              <span className="text-orange-400">@smart-waste</span>
              <span className="ml-auto">arduino</span>
            </div>
            <div className="bg-gray-900 rounded p-2 font-mono text-sm">
              <div className="text-purple-400">void <span className="text-cyan-400">setup</span><span className="text-gray-300">() </span>{"{"}</div>
              <div className="text-gray-300 ml-2">Serial.begin(9600);</div>
              <div className="text-gray-300 ml-2">pinMode(TRIG_PIN, OUTPUT);</div>
              <div className="text-cyan-400 ml-2">pinMode(ECHO_PIN, INPUT);</div>
              <div className="text-gray-300 ml-2">initializeGPS();</div>
              <div className="text-purple-400">{"}"}</div>
            </div>
          </div>

          {/* Next.js Appointment System */}
          <div className="bg-gray-800/50 border border-gray-600 rounded p-3">
            <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm">
                ⚛️
              </div>
              <span className="text-cyan-400">@appointment-sys</span>
              <span className="ml-auto">next.js</span>
            </div>
            <div className="bg-gray-900 rounded p-2 font-mono text-sm">
              <div className="text-purple-400">export <span className="text-cyan-400">async function</span> <span className="text-yellow-400">createAppointment</span><span className="text-gray-300">(data) </span>{"{"}</div>
              <div className="text-cyan-400 ml-2">await connectDB();</div>
              <div className="text-gray-300 ml-2">const appointment = new Appointment(data);</div>
              <div className="text-purple-400 ml-2">return <span className="text-cyan-400">await</span> <span className="text-gray-300">appointment.save();</span></div>
              <div className="text-purple-400">{"}"}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <VSCodeLayout 
      fileTreeData={aboutFileTreeData} 
      editorTab={editorTab}
      rightPanel={rightPanel}
    >
      <div className="font-mono text-sm space-y-1 overflow-x-auto animate-fadeInUp">
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">1</span>
          <span className="text-gray-500">{"/**"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">2</span>
          <span className="text-gray-500">{" * Hakkımda"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">3</span>
          <span className="text-gray-500">{" * Bilgisayar mühendisliği alanında deneyimli ve teknik becerilere sahip biriyim."}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">4</span>
          <span className="text-gray-500">{" * C#, C++, Python ve JavaScript programlama dillerinde bilgi sahibiyim."}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">5</span>
          <span className="text-gray-500">{" * Üniversite eğitimim süresince hem donanım hem de yazılım odaklı projeler geliştirdim."}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">6</span>
          <span className="text-gray-500">{" * Görüntü işleme, makine öğrenmesi ve derin öğrenme konularında projeler yaparak;"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">7</span>
          <span className="text-gray-500">{" * Support Vector Machine (SVM), Transformer mimarileri ve Vision-Language Models (VLM) üzerine yetkinliğimi artırdım."}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">8</span>
          <span className="text-gray-500">{" * Amacım; sahip olduğum bilgi ve deneyimi kullanarak yenilikçi ve sürdürülebilir çözümler üretmek,"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">9</span>
          <span className="text-gray-500">{" * sektöre değer katmak ve sürekli gelişim sağlamaktır."}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">10</span>
          <span className="text-gray-500">{" */"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">11</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">12</span>
          <span className="text-purple-400">class</span> <span className="text-cyan-400">EmirFent</span> {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">13</span>
          <span className="text-purple-400 ml-4">constructor</span>() {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">14</span>
          <span className="text-cyan-400 ml-8">this</span>.<span className="text-yellow-400">name</span> = <span className="text-green-400">"EMİR FENT"</span>;
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">15</span>
          <span className="text-cyan-400 ml-8">this</span>.<span className="text-yellow-400">phone</span> = <span className="text-green-400">"+90 507 100 32 92"</span>;
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">16</span>
          <span className="text-cyan-400 ml-8">this</span>.<span className="text-yellow-400">email</span> = <span className="text-green-400">"emir_fent@hotmail.com"</span>;
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">17</span>
          <span className="text-cyan-400 ml-8">this</span>.<span className="text-yellow-400">github</span> = <span className="text-green-400">"https://github.com/emirfent"</span>;
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">18</span>
          <span className="ml-4">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">19</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">20</span>
          <span className="text-purple-400 ml-4">education</span>() {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">21</span>
          <span className="text-purple-400 ml-8">return</span> {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">22</span>
          <span className="text-yellow-400 ml-12">university</span>: <span className="text-green-400">"Mehmet Akif Ersoy Üniversitesi"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">23</span>
          <span className="text-yellow-400 ml-12">degree</span>: <span className="text-green-400">"Bilgisayar Mühendisliği Lisans"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">24</span>
          <span className="text-yellow-400 ml-12">period</span>: <span className="text-green-400">"2021-2025"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">25</span>
          <span className="text-yellow-400 ml-12">highSchool</span>: <span className="text-green-400">"Keşan Fen Lisesi"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">26</span>
          <span className="text-yellow-400 ml-12">highSchoolPeriod</span>: <span className="text-green-400">"2016-2020"</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">27</span>
          <span className="ml-8">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">28</span>
          <span className="ml-4">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">29</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">30</span>
          <span className="text-purple-400 ml-4">workExperience</span>() {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">31</span>
          <span className="text-purple-400 ml-8">return</span> [
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">29</span>
          <span className="ml-12">{"{"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">30</span>
          <span className="text-yellow-400 ml-16">year</span>: <span className="text-green-400">"2024"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">31</span>
          <span className="text-yellow-400 ml-16">role</span>: <span className="text-green-400">"Bilgisayar Mühendisliği Stajı"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">32</span>
          <span className="text-yellow-400 ml-16">company</span>: <span className="text-green-400">"Trakya Elektrik Dağıtım A.Ş. | Tekirdağ"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">33</span>
          <span className="text-yellow-400 ml-16">description</span>: <span className="text-green-400">"Bilgisayar sistemleri üzerinde MVC projesi ve veri tabanı çalışmaları."</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">34</span>
          <span className="ml-12">{"}"},</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">35</span>
          <span className="ml-12">{"{"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">36</span>
          <span className="text-yellow-400 ml-16">year</span>: <span className="text-green-400">"2023"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">37</span>
          <span className="text-yellow-400 ml-16">role</span>: <span className="text-green-400">"Teknik Destek"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">38</span>
          <span className="text-yellow-400 ml-16">company</span>: <span className="text-green-400">"Haytek | Burdur"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">39</span>
          <span className="text-yellow-400 ml-16">description</span>: <span className="text-green-400">"Yazılım geliştirme ve teknik destek süreçlerinde görev aldım."</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">40</span>
          <span className="ml-12">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">41</span>
          <span className="ml-8">]</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">42</span>
          <span className="ml-4">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">43</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">44</span>
          <span className="text-purple-400 ml-4">technicalSkills</span>() {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">45</span>
          <span className="text-purple-400 ml-8">return</span> {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">46</span>
          <span className="text-yellow-400 ml-12">programmingLanguages</span>: [<span className="text-green-400">"C#"</span>, <span className="text-green-400">"C++"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"JavaScript"</span>],
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">47</span>
          <span className="text-yellow-400 ml-12">webDevelopment</span>: [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"MongoDB"</span>],
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">48</span>
          <span className="text-yellow-400 ml-12">aiMl</span>: [<span className="text-green-400">"OpenCV"</span>, <span className="text-green-400">"SVM"</span>, <span className="text-green-400">"PyTorch"</span>, <span className="text-green-400">"LEVIT"</span>, <span className="text-green-400">"VIT"</span>],
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">49</span>
          <span className="text-yellow-400 ml-12">hardware</span>: [<span className="text-green-400">"Arduino"</span>, <span className="text-green-400">"Raspberry Pi"</span>, <span className="text-green-400">"IoT"</span>],
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">50</span>
          <span className="text-yellow-400 ml-12">dataAnalysis</span>: [<span className="text-green-400">"WEKA"</span>, <span className="text-green-400">"Network Security"</span>]
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">51</span>
          <span className="ml-8">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">52</span>
          <span className="ml-4">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">53</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">54</span>
          <span className="text-purple-400 ml-4">languages</span>() {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">55</span>
          <span className="text-purple-400 ml-8">return</span> {"{"}
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">56</span>
          <span className="text-yellow-400 ml-12">turkish</span>: <span className="text-green-400">"Ana dil"</span>,
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">57</span>
          <span className="text-yellow-400 ml-12">english</span>: <span className="text-green-400">"B1+"</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">58</span>
          <span className="ml-8">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">59</span>
          <span className="ml-4">{"}"}</span>
        </div>
        <div className="flex">
          <span className="text-gray-500 w-8 text-right mr-4">60</span>
          <span>{"}"}</span>
        </div>
      </div>
    </VSCodeLayout>
  )
}