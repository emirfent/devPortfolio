'use client'
import { useState } from 'react'
import Icon from './Icon'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'İsim gerekli'
    if (!formData.email.trim()) newErrors.email = 'E-posta gerekli'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Konu gerekli'
    if (!formData.message.trim()) newErrors.message = 'Mesaj gerekli'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('loading')
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your API
      // console.log('Form submitted:', formData)
      
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (_error) {
      setStatus('error')
      // console.error('Form submission error:', error)
    }
  }

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-6 text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-success-500/20 rounded-full flex items-center justify-center">
          <Icon name="ri-check-line" className="text-2xl text-success-400"/>
        </div>
        <h3 className="text-step-4 font-semibold">Mesaj Gönderildi!</h3>
        <p className="text-muted">
          Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağım.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="btn-ghost"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div className="text-step-4 font-semibold mb-4">İletişime Geç</div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-step-2 font-medium mb-2">
            İsim *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            className={`input ${errors.name ? 'input-error' : ''}`}
            placeholder="Adınız Soyadınız"
            disabled={status === 'loading'}
          />
          {errors.name && <div className="help-error">{errors.name}</div>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-step-2 font-medium mb-2">
            E-posta *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            className={`input ${errors.email ? 'input-error' : ''}`}
            placeholder="ornek@email.com"
            disabled={status === 'loading'}
          />
          {errors.email && <div className="help-error">{errors.email}</div>}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-step-2 font-medium mb-2">
          Konu *
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange('subject')}
          className={`input ${errors.subject ? 'input-error' : ''}`}
          placeholder="Mesaj konusu"
          disabled={status === 'loading'}
        />
        {errors.subject && <div className="help-error">{errors.subject}</div>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-step-2 font-medium mb-2">
          Mesaj *
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange('message')}
          className={`input resize-none ${errors.message ? 'input-error' : ''}`}
          placeholder="Mesajınızı buraya yazın..."
          disabled={status === 'loading'}
        />
        {errors.message && <div className="help-error">{errors.message}</div>}
      </div>
      
      {status === 'error' && (
        <div className="p-4 bg-danger-500/10 border border-danger-500/20 rounded-r3 text-danger-400">
          <Icon name="ri-error-warning-line" className="inline mr-2"/>
          Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
        </div>
      )}
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-app border-t-transparent rounded-full animate-spin"/>
            Gönderiliyor...
          </>
        ) : (
          <>
            <Icon name="ri-send-plane-2-line"/>
            Mesaj Gönder
          </>
        )}
      </button>
      
      <p className="text-step-1 text-muted text-center">
        * işaretli alanlar zorunludur
      </p>
    </form>
  )
}
