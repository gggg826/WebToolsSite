import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { Globe } from 'lucide-react'

export function Header() {
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'zh-CN' ? 'en-US' : 'zh-CN'
    changeLanguage(newLang)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">{t('common.appName')}</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('header.home')}
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('header.about')}
            </Link>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={t('common.language')}
            >
              <Globe className="w-5 h-5" />
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
