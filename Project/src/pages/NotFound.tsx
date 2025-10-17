import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{t('notFound.title')}</h2>
          <p className="text-gray-600 mb-8">{t('notFound.message')}</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('notFound.backHome')}
          </Link>
        </div>
      </Container>
    </div>
  )
}
