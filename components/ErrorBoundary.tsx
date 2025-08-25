'use client'
import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // console.error('Error caught by boundary:', _error, _errorInfo)
    }
  }

  resetError = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent 
          error={this.state.error || new Error('Unknown error')} 
          resetError={this.resetError} 
        />
      )
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gray-900 text-center p-8">
      <div className="max-w-md mx-auto space-y-4">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-white font-mono">Bir şeyler yanlış gitti</h2>
        <p className="text-gray-400 font-mono text-sm">
          {process.env.NODE_ENV === 'development' 
            ? error.message 
            : 'Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin.'
          }
        </p>
        <div className="space-y-2">
          <button 
            onClick={resetError}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-mono font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-orange-400/50"
          >
            Tekrar Dene
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="block w-full text-gray-400 hover:text-white font-mono text-sm underline"
          >
            Sayfayı Yenile
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary
