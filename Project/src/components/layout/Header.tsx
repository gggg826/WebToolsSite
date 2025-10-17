import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { Globe, Wrench } from 'lucide-react'

export function Header() {
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'zh-CN' ? 'en-US' : 'zh-CN'
    changeLanguage(newLang)
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('common.appName')}
            </span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              {t('header.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              {t('header.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              aria-label={t('common.language')}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {currentLanguage === 'zh-CN' ? '中文' : 'EN'}
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
