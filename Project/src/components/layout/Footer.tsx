import { useTranslation } from 'react-i18next'
import { Heart } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-3">
          <p className="text-gray-600 text-sm">{t('footer.copyright')}</p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span>{t('footer.builtWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  )
}
