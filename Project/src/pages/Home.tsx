import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout'

export function Home() {
  const { t } = useTranslation()

  return (
    <div className="py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('home.title')}</h1>
          <p className="text-xl text-gray-600">{t('home.subtitle')}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">工具列表开发中...</p>
        </div>
      </Container>
    </div>
  )
}
