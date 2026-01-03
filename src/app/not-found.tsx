import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-400 mb-4">404</div>
        <h1 className="text-2xl text-gray-700 mb-8">我是自定义的全局not found页面</h1>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        >
          回到首页
        </Link>
      </div>
    </div>
  )
}
