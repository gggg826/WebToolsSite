import { Container } from '@/components/layout'

export function About() {
  return (
    <div className="py-12">
      <Container>
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">关于 IT365 工具箱</h1>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>IT365 工具箱是一个为开发者提供各类实用在线工具的平台。</p>
            <p>我们致力于提供简单、高效、易用的在线工具，帮助开发者提升工作效率。</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
