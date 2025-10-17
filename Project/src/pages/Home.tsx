import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout'
import {
  Search,
  Code,
  Lock,
  Hash,
  QrCode,
  Calendar,
  Link as LinkIcon,
  FileJson,
  Zap,
  ArrowRight,
} from 'lucide-react'

// 临时工具数据
const MOCK_TOOLS = [
  {
    id: 'json-formatter',
    icon: FileJson,
    color: 'from-blue-500 to-blue-600',
    category: 'formatter',
  },
  {
    id: 'base64-encoder',
    icon: Code,
    color: 'from-green-500 to-green-600',
    category: 'encoder',
  },
  {
    id: 'uuid-generator',
    icon: Hash,
    color: 'from-purple-500 to-purple-600',
    category: 'generator',
  },
  {
    id: 'qr-code',
    icon: QrCode,
    color: 'from-pink-500 to-pink-600',
    category: 'generator',
  },
  {
    id: 'timestamp',
    icon: Calendar,
    color: 'from-orange-500 to-orange-600',
    category: 'converter',
  },
  {
    id: 'url-encoder',
    icon: LinkIcon,
    color: 'from-cyan-500 to-cyan-600',
    category: 'encoder',
  },
  {
    id: 'hash-generator',
    icon: Lock,
    color: 'from-red-500 to-red-600',
    category: 'security',
  },
  {
    id: 'color-converter',
    icon: Zap,
    color: 'from-yellow-500 to-yellow-600',
    category: 'converter',
  },
]

const CATEGORIES = [
  { id: 'all', labelKey: 'categories.all' },
  { id: 'formatter', labelKey: 'categories.formatter' },
  { id: 'encoder', labelKey: 'categories.encoder' },
  { id: 'generator', labelKey: 'categories.generator' },
  { id: 'converter', labelKey: 'categories.converter' },
  { id: 'security', labelKey: 'categories.security' },
]

export function Home() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredTools = MOCK_TOOLS.filter((tool) => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      t(`tools.${tool.id}.name`).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(`tools.${tool.id}.description`).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {t('home.title')}
              <span className="block text-3xl mt-2 font-normal opacity-90">
                {t('home.subtitle')}
              </span>
            </h1>
            <p className="text-xl mb-8 opacity-90">{t('home.description')}</p>

            {/* Search Bar */}
            <div className="relative max-w-xs mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('common.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-lg text-sm transition-all"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Categories */}
        <div className="py-8 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid - 改为2列，大按钮样式 */}
        <div className="py-8 pb-16">
          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">{t('home.noResults')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <button
                    key={tool.id}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50/50 active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {t(`tools.${tool.id}.name`)}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {t(`tools.${tool.id}.description`)}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-blue-600 shrink-0 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
