import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Fixed QR Code Download - Top Right Corner */}
      <div
        className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg overflow-hidden"
        style={{ width: "140px" }}
      >
        {/* 18+ Warning */}
        <div className="bg-white border border-gray-300 p-2 flex items-center">
          <div className="bg-white border-2 border-black rounded w-8 h-8 flex items-center justify-center mr-2">
            <span className="text-black font-bold text-xs">18+</span>
          </div>
          <div className="text-black text-xs leading-tight">
            Chơi quá 180 phút
            <br />
            một ngày sẽ ảnh
            <br />
            hưởng sức khỏe
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-red-600 text-center py-2">
          <div className="text-white font-bold text-sm">TẢI GAME</div>
        </div>

        {/* QR Code */}
        <div className="bg-white p-3 flex justify-center">
          <div className="w-20 h-20 bg-black flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F81709d0769604a919ab5f926606b1868%2Fd6a98e1250c5459fa5dad611cb05ee2c?format=webp&width=800"
              alt="QR Code"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="bg-white pb-3 px-3">
          <div className="flex flex-col space-y-2">
            {/* Google Play */}
            <div className="bg-green-600 text-white text-xs px-2 py-2 rounded flex items-center justify-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="font-medium">GET IT ON</span>
            </div>
            <div className="bg-green-600 text-white text-xs px-2 py-1 rounded text-center">
              <span className="font-bold">Google Play</span>
            </div>

            {/* App Store */}
            <div className="bg-black text-white text-xs px-2 py-2 rounded flex items-center justify-center">
              <span className="mr-1">🍎</span>
              <span className="font-medium">Download on the</span>
            </div>
            <div className="bg-black text-white text-xs px-2 py-1 rounded text-center">
              <span className="font-bold">App Store</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-800 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-white text-xl font-bold flex items-center">
              <svg
                className="w-6 h-6 text-yellow-400 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
              LIÊN QUÂN
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
            <a
              href="#"
              className="hover:text-yellow-400 transition border-b-2 border-yellow-400 pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              GAMEPLAY
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              TIN TỨC
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              CẬP NHẬT
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              HỢP TÁC
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              LIÊN KẾT
            </a>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-white/10 rounded px-3 py-2">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
                className="bg-transparent text-white placeholder-gray-300 text-sm outline-none w-48"
              />
              <svg
                className="w-4 h-4 text-gray-300 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner - Full Screen */}
      <section className="relative h-screen bg-gradient-to-br from-purple-800 via-blue-800 to-purple-900 overflow-hidden">
        {/* Background character image - Full screen */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F81709d0769604a919ab5f926606b1868%2F4833f1f36d3d465bbff4b8816b227e42?format=webp&width=800"
            alt="Hero Character"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-transparent to-blue-900/50"></div>
        </div>

        {/* Center Logo */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <div className="text-white text-3xl font-bold flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-yellow-400 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
            LIÊN QUÂN
          </div>
        </div>

        {/* Main Hero Content - Center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold">
                PHIÊN BẢN MỚI
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              <span className="text-yellow-400 block">NGÀY HỘI</span>
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent block">
                LIÊN QUÂN 09.07
              </span>
            </h1>
            <div className="text-3xl text-yellow-300 italic font-bold">
              Kiệm
            </div>
          </div>
        </div>

        {/* Pagination dots - Bottom center */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-white/40 rounded-full"></div>
          <div className="w-4 h-4 bg-white/40 rounded-full"></div>
        </div>
      </section>

      {/* News Cards Section */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-white text-center z-10">
                  <div className="text-lg font-bold">CHI TIẾT</div>
                  <div className="text-lg font-bold">BẢN CẬP NHẬT</div>
                </div>
              </div>
              <div className="p-4 bg-slate-800">
                <div className="text-gray-400 text-xs mb-2">08.07.2025</div>
                <h3 className="text-white text-sm font-bold leading-tight">
                  CHI TIẾT BẢN CẬP NHẬT NGÀY HỘI LIÊN QUÂN 9.7.2025
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-white text-center z-10">
                  <div className="text-lg font-bold">TỔNG HỢP SỰ KIỆN</div>
                  <div className="text-sm">NGÀY HỘI LIÊN QUÂN</div>
                </div>
              </div>
              <div className="p-4 bg-slate-800">
                <div className="text-gray-400 text-xs mb-2">08.07.2025</div>
                <h3 className="text-white text-sm font-bold leading-tight">
                  TỔNG HỢP SỰ KIỆN - NGÀY HỘI LIÊN QUÂN - HỆ XẤP XINH - QUÀ HOT
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-40 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-white text-center z-10">
                  <div className="text-2xl font-bold text-black">
                    THIỆN ĐÁNG
                  </div>
                  <div className="text-xl font-bold">SỨ MỆNH 79</div>
                </div>
              </div>
              <div className="p-4 bg-slate-800">
                <div className="text-gray-400 text-xs mb-2">27.06.2025</div>
                <h3 className="text-white text-sm font-bold leading-tight">
                  SỨ MỆNH 79
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-40 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-white text-center z-10">
                  <div className="text-lg font-bold">QUY TRÌNH</div>
                  <div className="text-lg font-bold">CẬP NHẬT PHIÊN BẢN</div>
                </div>
              </div>
              <div className="p-4 bg-slate-800">
                <div className="text-gray-400 text-xs mb-2">07.07.2025</div>
                <h3 className="text-white text-sm font-bold leading-tight">
                  QUY TRÌNH CẬP NHẬT PHIÊN BẢN NGÀY HỘI LIÊN QUÂN - 9.7.2025
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Champions & Skins Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-4">
              TƯỚNG & TRANG PHỤC ĐA DẠNG
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Champion Info & Video */}
            <div className="text-white order-2 lg:order-1">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">Krixi</h3>
              <h4 className="text-2xl text-gray-300 mb-8">
                Tinh Linh Thiên Nhiên
              </h4>

              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-5 h-5 text-yellow-400 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-yellow-400 font-bold">Vị trí:</span>
                </div>
                <div className="text-white text-lg">Pháp sư, Cầu đá</div>
              </div>

              {/* Video Player */}
              <div className="bg-black rounded-lg overflow-hidden mb-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-purple-800 to-blue-800 flex items-center justify-center relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F81709d0769604a919ab5f926606b1868%2F40d9bf534d794cb8a2285bdf275b1a8b?format=webp&width=800"
                    alt="Krixi gameplay"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all transform hover:scale-110">
                      <svg
                        className="w-12 h-12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white text-sm px-3 py-2 rounded">
                    Liên Quân Mobile - Tháng mười hai tỷ năng
                  </div>
                </div>
              </div>

              {/* Champion Avatar Row */}
              <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <div className="w-full h-full rounded-full bg-slate-700 border-2 border-slate-600"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Champion Image */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F81709d0769604a919ab5f926606b1868%2F40d9bf534d794cb8a2285bdf275b1a8b?format=webp&width=800"
                  alt="Krixi Champion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
