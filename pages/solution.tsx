export default function Solution() {
  return (
    <main className="bg-white min-h-screen px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          一站整合：AIgnition 智慧節能系統
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          結合 EC FanGrid 高效風機、智慧控制器與 AI 平台，提供從設備到雲端的全方位節能解決方案，協助企業實現能源管理與 ESG 目標。
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* 模組一 */}
          <div className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-blue-700 mb-2">EC FanGrid</h2>
            <p className="text-gray-700">
              模組化風機系統，靜音、高效率，降低能耗與維護成本，支援風量調控與備援機制。
            </p>
          </div>

          {/* 模組二 */}
          <div className="bg-green-50 p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-green-700 mb-2">智慧控制器</h2>
            <p className="text-gray-700">
              即時監控、資料採集與控制邏輯執行核心，支援遠端管理、群體協調與邊緣運算。
            </p>
          </div>

          {/* 模組三 */}
          <div className="bg-purple-50 p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-purple-700 mb-2">AIgnition 平台</h2>
            <p className="text-gray-700">
              AI 智能優化、故障預測、能耗分析、自動生成 ESG 報告，打造可持續營運管理中樞。
            </p>
          </div>
        </div>

        {/* 導入流程 */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">導入流程</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>設備盤點與現勘</li>
            <li>能源診斷與效益評估</li>
            <li>客製化解決方案設計</li>
            <li>施工、測試與教育訓練</li>
            <li>數據驗證與 ESG 成果追蹤</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="mailto:AIgnition.contact@gmail.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            聯絡我們，啟動永續方案
          </a>
        </div>
      </section>
    </main>
  );
}
