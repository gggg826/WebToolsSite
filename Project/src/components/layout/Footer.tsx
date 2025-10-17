import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600 text-sm space-y-2">
          <p>{t('footer.copyright')}</p>
          <p className="text-gray-500">{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  )
}
