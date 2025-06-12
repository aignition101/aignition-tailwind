export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-24">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          AIgnition：企業節能數位轉型的引擎
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          整合 EC FanGrid、智慧控制器與 AI 平台，讓您的設備即刻升級，實現高效節能與 ESG 永續目標。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/solution"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            查看解決方案
          </a>
          <a
            href="/dashboard"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition"
          >
            接入您的設備資料
          </a>
        </div>
      </section>

      {/* 補充價值主張 */}
      <section className="mt-16 text-center text-gray-500 text-sm">
        <p>AI 控制 · 自動化群控 · 碳管理 · ESG 數據報告</p>
      </section>
    </main>
  );
}

<section className="mt-16 text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">聯絡我們，啟動永續方案</h2>
  <p className="text-gray-600 mb-6">
    AIgnition 專業團隊協助您從評估、設計到節能執行，快速導入 ESG 與數位轉型。
  </p>
  <a
    href="mailto:AIgnition.contact@gmail.com"
    className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
  >
    聯絡我們
  </a>
</section>
