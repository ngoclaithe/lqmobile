import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-800 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-white text-xl font-bold">
              <span className="text-yellow-400">◊</span> LIÊN QUÂN
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
            <a href="#" className="hover:text-yellow-400 transition">
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
            <div className="hidden md:flex items-center bg-white/10 rounded px-3 py-1">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
                className="bg-transparent text-white placeholder-gray-300 text-sm outline-none"
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

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-purple-800 via-blue-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Background character image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F81709d0769604a919ab5f926606b1868%2F4833f1f36d3d465bbff4b8816b227e42?format=webp&width=800"
            alt="Hero Character"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="relative container mx-auto px-4 py-16 flex items-center justify-between min-h-[500px]">
          {/* Hero Content */}
          <div className="flex-1 text-white z-10">
            <div className="text-center">
              <div className="mb-4">
                <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  PHIÊN BẢN MỚI
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-yellow-400">NGÀY HỘI</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  LIÊN QUÂN 09.07
                </span>
              </h1>
              <div className="text-xl text-yellow-300 italic">Kiệm</div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Download QR Code */}
          <div className="hidden lg:block absolute top-4 right-4 bg-white p-4 rounded-lg">
            <div className="text-center">
              <div className="text-black font-bold text-sm mb-2">TẢI GAME</div>
              <div className="w-24 h-24 bg-black mb-2">
                <div className="w-full h-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white text-xs">
                  QR
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="bg-black text-white text-xs px-2 py-1 rounded">
                  Google Play
                </div>
                <div className="bg-black text-white text-xs px-2 py-1 rounded">
                  App Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Cards Section */}
      <section className="bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-800 to-purple-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-32 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <div className="text-white text-lg font-bold">
                  CHI TIẾT ĐẦU CẬP NHẬT
                </div>
              </div>
              <div className="p-4">
                <div className="text-gray-300 text-xs mb-2">08.07.2025</div>
                <h3 className="text-white text-sm font-bold leading-tight">
                  CHI TIẾT BẢN CẬP NHẬT NGÀY HỘI LIÊN QUÂN 9.7.2025
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-32 bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center">
                <div className="text-white text-lg font-bold">
                  TỔNG HỢP SỰ KIỆN
                </div>
              </div>
              <div className="p-4">
                <div className="text-gray-300 text-xs mb-2">08.07.2025</div>
                <h3 className="text-white text-sm font-bold leading-tight">
                  TỔNG HỢP SỰ KIỆN - NGÀY HỘI LIÊN QUÂN - HỆ XẤP XINH - QUÀ HOT
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-yellow-600 to-orange-700 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-32 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <div className="text-white text-lg font-bold">THIỆN ĐÁNG</div>
                <div className="text-black text-lg font-bold ml-2">
                  SỰ MỆnh 79
                </div>
              </div>
              <div className="p-4">
                <div className="text-gray-300 text-xs mb-2">27.06.2025</div>
                <h3 className="text-white text-sm font-bold leading-tight">
                  SỚ SỤ MỆNH 79
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-blue-800 to-teal-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform">
              <div className="h-32 bg-gradient-to-br from-blue-600 to-teal-700 flex items-center justify-center">
                <div className="text-white text-lg font-bold">
                  QUY TRÌNH CẬP NHẬT
                </div>
              </div>
              <div className="p-4">
                <div className="text-gray-300 text-xs mb-2">07.07.2025</div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Champion Info */}
            <div className="text-white">
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">Krixi</h3>
              <h4 className="text-xl text-gray-300 mb-6">
                Tinh Linh Thiên Nhiên
              </h4>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-2">★</span>
                  <span className="text-gray-300">Vị trí:</span>
                </div>
                <div className="text-white">Pháp sư, Cầu đá</div>
              </div>

              {/* Video Player */}
              <div className="bg-black rounded-lg overflow-hidden mb-6">
                <div className="aspect-video bg-gradient-to-br from-purple-800 to-blue-800 flex items-center justify-center relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F81709d0769604a919ab5f926606b1868%2F40d9bf534d794cb8a2285bdf275b1a8b?format=webp&width=800"
                    alt="Krixi gameplay"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-colors">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Liên Quân Mobile - Tháng mười hai tỷ năng
                  </div>
                </div>
              </div>

              {/* Champion Avatar Row */}
              <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-0.5"
                  >
                    <div className="w-full h-full rounded-full bg-slate-700"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Champion Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F81709d0769604a919ab5f926606b1868%2F40d9bf534d794cb8a2285bdf275b1a8b?format=webp&width=800"
                  alt="Krixi Champion"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Download QR Code - Right side */}
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg">
                <div className="text-center">
                  <div className="text-black font-bold text-xs mb-2">
                    TẢI GAME
                  </div>
                  <div className="w-20 h-20 bg-black mb-2">
                    <div className="w-full h-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white text-xs">
                      QR
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="bg-black text-white text-xs px-2 py-0.5 rounded flex items-center">
                      <span className="mr-1">📱</span> Google Play
                    </div>
                    <div className="bg-black text-white text-xs px-2 py-0.5 rounded flex items-center">
                      <span className="mr-1">🍎</span> App Store
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
