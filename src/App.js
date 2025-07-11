import "./App.css";
import { useEffect } from "react";

// Download Widget Component
const DownloadWidget = () => {
  return (
    <div className="fixed top-4 right-4 z-50 hidden lg:block">
      {/* 18+ Warning */}
      <div className="mb-1">
        <img
          src="https://dl.ops.kgvn.garenanow.com/hok/DailyActivity/18%2B.png"
          alt="18+ Warning"
          className="w-20 h-auto"
        />
      </div>

      {/* Download Section */}
      <section
        className="download pc bg-red-600 rounded-lg p-2 shadow-lg"
        style={{ width: "90px" }}
      >
        <div className="text-center mb-2">
          <div className="text-white font-bold text-xs">TẢI GAME</div>
        </div>

        {/* QR Code */}
        <div className="download__qr mb-2 flex justify-center">
          <img
            src="https://lienquan.garena.vn/wp-content/uploads/2024/07/QRCode.png"
            alt="QR Code"
            className="w-14 h-14"
          />
        </div>

        {/* Google Play Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.garena.game.kgvn&hl=vi"
          className="download__google block mb-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://lienquan.garena.vn/wp-content/themes/aov-2024/assets/img/btn-google-play.png"
            alt="Google Play"
            className="w-full h-auto"
          />
        </a>

        {/* App Store Button */}
        <a
          href="https://apps.apple.com/vn/app/garena-li%C3%AAn-qu%C3%A2n-mobile/id1150288115"
          className="download__apple block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://lienquan.garena.vn/wp-content/themes/aov-2024/assets/img/btn-app-store.png"
            alt="App Store"
            className="w-full h-auto"
          />
        </a>
      </section>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-800 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://lienquan.garena.vn/wp-content/uploads/2024/02/logo.png"
            alt="Liên Quân Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {/* Trang chủ */}
            <li className="menu-item menu-item-home current-menu-item">
              <a
                href="https://lienquan.garena.vn/"
                className="flex items-center text-white hover:text-yellow-400 transition border-b-2 border-yellow-400 pb-1"
              >
                <img
                  src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay.png"
                  alt="Home"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-sm font-medium">Trang chủ</span>
              </a>
            </li>

            {/* Gameplay với dropdown */}
            <li className="menu-item menu-item-has-children relative group">
              <a
                href="https://lienquan.garena.vn/hoc-vien/tuong-skin/"
                className="flex items-center text-white hover:text-yellow-400 transition"
              >
                <img
                  src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay.png"
                  alt="Gameplay"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-sm font-medium">Gameplay</span>
              </a>
              <ul className="sub-menu absolute top-full left-0 bg-slate-800 rounded-lg shadow-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <a
                    href="https://lienquan.garena.vn/hoc-vien/tuong-skin/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Tướng/Skin
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/hoc-vien/trang-bi/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Trang Bị
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/hoc-vien/bang-ngoc/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Bảng ngọc
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/hoc-vien/phu-tro/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Phụ Trợ
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/hoc-vien/phu-hieu/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Phù Hiệu
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/hoc-vien/che-do-choi/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Chế độ chơi
                  </a>
                </li>
              </ul>
            </li>

            {/* Tin tức với dropdown */}
            <li className="menu-item menu-item-has-children relative group">
              <a
                href="https://lienquan.garena.vn/tin-tuc/"
                className="flex items-center text-white hover:text-yellow-400 transition"
              >
                <img
                  src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-news.png"
                  alt="News"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-sm font-medium">Tin tức</span>
              </a>
              <ul className="sub-menu absolute top-full left-0 bg-slate-800 rounded-lg shadow-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <a
                    href="https://lienquan.garena.vn/cap-nhat/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Cập nhật
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/tin-tuc/su-kien/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Sự kiện
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/tin-tuc/mo-ban/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Mở bán
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/tin-tuc/hop-tac/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Hợp tác
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/tin-tuc/giai-dau/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Giải đấu
                  </a>
                </li>
                <li>
                  <a
                    href="https://lienquan.garena.vn/tin-tuc/cam-nang/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Cẩm nang
                  </a>
                </li>
              </ul>
            </li>

            {/* Cập nhật */}
            <li className="menu-item">
              <a
                href="https://lienquan.garena.vn/cap-nhat/"
                className="flex items-center text-white hover:text-yellow-400 transition"
              >
                <img
                  src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-update.png"
                  alt="Updates"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-sm font-medium">Cập nhật</span>
              </a>
            </li>

            {/* Hợp tác */}
            <li className="menu-item">
              <a
                href="https://lienquan.garena.vn/hop-tac/"
                className="text-white hover:text-yellow-400 transition"
              >
                <span className="text-sm font-medium">Hợp tác</span>
              </a>
            </li>

            {/* Liên kết với dropdown */}
            <li className="menu-item menu-item-has-children relative group">
              <a
                href="#"
                className="flex items-center text-white hover:text-yellow-400 transition"
              >
                <img
                  src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-link.png"
                  alt="Links"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-sm font-medium">Liên kết</span>
              </a>
              <ul className="sub-menu absolute top-full left-0 bg-slate-800 rounded-lg shadow-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <a
                    href="https://giftcode.lienquan.garena.vn/"
                    target="_blank"
                    rel="noopener"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Giftcode
                  </a>
                </li>
                <li>
                  <a
                    href="https://congdong.lienquan.garena.vn/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Cộng đồng
                  </a>
                </li>
                <li>
                  <a
                    href="https://hocvien.lienquan.garena.vn/"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Học viện
                  </a>
                </li>
                <li>
                  <a
                    href="https://hotro.garena.vn/nguoi-dung/thong-tin"
                    target="_blank"
                    rel="noopener"
                    className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-yellow-400 text-sm"
                  >
                    Tài khoản
                  </a>
                </li>
              </ul>
            </li>
          </ul>
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
  );
};

// Hero Slider Component
const HeroSlider = () => {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".owl-dot");
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
        slide.classList.toggle("active", i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    // Auto-slide every 5 seconds
    const autoSlide = setInterval(nextSlide, 5000);

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Cleanup
    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <section className="relative">
      <div className="slider-container relative overflow-hidden">
        {/* Slide 1 */}
        <div className="slide active">
          <img
            src="https://lienquan.garena.vn/wp-content/uploads/2024/02/IMG-HOR-1920x0350-032070-cover-hp.jpg"
            alt="Liên Quân Slide 1"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Slide 2 */}
        <div className="slide hidden">
          <img
            src="https://lienquan.garena.vn/wp-content/uploads/2025/06/IMG-HOR-1920x0350-027303-cover-trang-chu.jpg"
            alt="Liên Quân Slide 2"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Slide 3 */}
        <div className="slide hidden">
          <img
            src="https://lienquan.garena.vn/wp-content/uploads/2024/02/Cover-homepage_1920x350-7.png"
            alt="Liên Quân Slide 3"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "350px" }}
          />
        </div>

        {/* Owl Dots Navigation */}
        <div className="owl-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex z-10">
          <button
            role="button"
            className="owl-dot active"
            style={{
              backgroundImage:
                "url(https://lienquan.garena.vn/wp-content/themes/aov-2024/assets/img/icon-dot-active.png)",
              backgroundPosition: "0px 0px",
              backgroundSize: "100% 100%",
              fontFamily: "UTM Helve",
              fontSize: "11.575px",
              lineHeight: "17.3625px",
              margin: "0px 0px 0px 17.3625px",
              textAlign: "center",
              width: "12px",
              height: "12px",
              border: "none",
              cursor: "pointer",
            }}
          ></button>
          <button
            role="button"
            className="owl-dot"
            style={{
              backgroundImage:
                "url(https://lienquan.garena.vn/wp-content/themes/aov-2024/assets/img/icon-dot.png)",
              backgroundPosition: "0px 0px",
              backgroundSize: "100% 100%",
              fontFamily: "UTM Helve",
              fontSize: "11.575px",
              lineHeight: "17.3625px",
              margin: "0px 0px 0px 17.3625px",
              textAlign: "center",
              width: "12px",
              height: "12px",
              border: "none",
              cursor: "pointer",
              opacity: "0.5",
            }}
          ></button>
          <button
            role="button"
            className="owl-dot"
            style={{
              backgroundImage:
                "url(https://lienquan.garena.vn/wp-content/themes/aov-2024/assets/img/icon-dot.png)",
              backgroundPosition: "0px 0px",
              backgroundSize: "100% 100%",
              fontFamily: "UTM Helve",
              fontSize: "11.575px",
              lineHeight: "17.3625px",
              margin: "0px 0px 0px 17.3625px",
              textAlign: "center",
              width: "12px",
              height: "12px",
              border: "none",
              cursor: "pointer",
              opacity: "0.5",
            }}
          ></button>
        </div>
      </div>
    </section>
  );
};

// Posts Section Component
const PostsSection = () => {
  return (
    <section className="p-home__posts bg-slate-900 py-12">
      <div className="container mx-auto px-4" style={{ maxWidth: "1180px" }}>
        <h2 className="p-home__posts--title title mo text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Tin tức nổi bật
        </h2>

        <div className="p-home__posts--list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Post 1 */}
          <a
            href="https://lienquan.garena.vn/chi-tiet-ban-cap-nhat-ngay-hoi-lien-quan-9-7-2025/"
            title="CHI TIẾT BẢN CẬP NHẬT NGÀY HỘI LIÊN QUÂN 9.7.2025"
            className="p-home__posts--item rounded-lg overflow-hidden hover:scale-105 transition-transform group"
            style={{ backgroundColor: "#0f172a" }}
          >
            <picture className="block overflow-hidden">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2025/07/IMG-HOR-0860x0400-032810-cover-post-428x199.jpg"
                alt="CHI TIẾT BẢN C���P NHẬT NGÀY HỘI LIÊN QUÂN 9.7.2025"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:rotate-3"
              />
            </picture>
            <div className="p-4">
              <p
                className="mb-2"
                style={{
                  width: "247.7px",
                  height: "15.61px",
                  color: "#B99562",
                  fontSize: "10.4175px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                08.07.2025
              </p>
              <h3
                className="font-bold leading-tight transition-all duration-300 group-hover:underline"
                style={{
                  width: "247.7px",
                  height: "33.33px",
                  color: "#FFFFFF",
                  fontSize: "13.89px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                CHI TIẾT BẢN CẬP NHẬT NGÀY HỘI LIÊN QUÂN 9.7.2025
              </h3>
            </div>
          </a>

          {/* Post 2 */}
          <a
            href="https://lienquan.garena.vn/tong-hop-su-kien-ngay-hoi-lien-quan/"
            title="TỔNG HỢP SỰ KIỆN – NGÀY HỘI LIÊN QUÂN – HÈ XẬP XÌNH – QUÀ SẬP SÀN"
            className="p-home__posts--item rounded-lg overflow-hidden hover:scale-105 transition-transform group"
            style={{ backgroundColor: "#0f172a" }}
          >
            <picture className="block overflow-hidden">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2025/07/SeaTalk_IMG_20250708_115413-1-428x199.jpg"
                alt="TỔNG HỢP SỰ KIỆN – NGÀY HỘI LIÊN QUÂN – HÈ XẬP XÌNH – QUÀ SẬP SÀN"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:rotate-3"
              />
            </picture>
            <div className="p-4" style={{ color: "#0f172a" }}>
              <p
                className="mb-2"
                style={{
                  width: "247.7px",
                  height: "15.61px",
                  color: "#B99562",
                  fontSize: "10.4175px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                08.07.2025
              </p>
              <h3
                className="font-bold leading-tight transition-all duration-300 group-hover:underline"
                style={{
                  width: "247.7px",
                  height: "33.33px",
                  color: "#FFFFFF",
                  fontSize: "13.89px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                TỔNG HỢP SỰ KIỆN – NGÀY HỘI LIÊN QUÂN – HÈ XẬP XÌNH – QUÀ SẬP
                SÀN
              </h3>
            </div>
          </a>

          {/* Post 3 */}
          <a
            href="https://lienquan.garena.vn/so-su-menh-79/"
            title="SỔ SỨ MỆNH 79"
            className="p-home__posts--item rounded-lg overflow-hidden hover:scale-105 transition-transform group"
            style={{ backgroundColor: "#0f172a" }}
          >
            <picture className="block overflow-hidden">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2025/06/IMG-HOR-0860x0400-030636-cover-post-428x199.jpg"
                alt="SỔ SỨ MỆNH 79"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:rotate-3"
              />
            </picture>
            <div className="p-4">
              <p
                className="mb-2"
                style={{
                  width: "247.7px",
                  height: "15.61px",
                  color: "#B99562",
                  fontSize: "10.4175px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                27.06.2025
              </p>
              <h3
                className="font-bold leading-tight transition-all duration-300 group-hover:underline"
                style={{
                  width: "247.7px",
                  height: "33.33px",
                  color: "#FFFFFF",
                  fontSize: "13.89px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                SỔ SỨ MỆNH 79
              </h3>
            </div>
          </a>

          {/* Post 4 */}
          <a
            href="https://lienquan.garena.vn/quy-trinh-cap-nhat-phien-ban-ngay-hoi-lien-quan-9-7-2025/"
            title="QUY TRÌNH CẬP NHẬT PHIÊN BẢN NGÀY HỘI LIÊN QUÂN – 9.7.2025"
            className="p-home__posts--item rounded-lg overflow-hidden hover:scale-105 transition-transform group"
            style={{ backgroundColor: "#0f172a" }}
          >
            <picture className="block overflow-hidden">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2025/07/IMG-HOR-0860x0400-032815-cv-post-428x199.jpg"
                alt="QUY TRÌNH CẬP NHẬT PHIÊN BẢN NGÀY HỘI LIÊN QUÂN – 9.7.2025"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:rotate-3"
              />
            </picture>
            <div className="p-4">
              <p
                className="mb-2"
                style={{
                  width: "247.7px",
                  height: "15.61px",
                  color: "#B99562",
                  fontSize: "10.4175px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                07.07.2025
              </p>
              <h3
                className="font-bold leading-tight transition-all duration-300 group-hover:underline"
                style={{
                  width: "247.7px",
                  height: "33.33px",
                  color: "#FFFFFF",
                  fontSize: "13.89px",
                  fontFamily: '"UTM Helve", sans-serif',
                }}
              >
                QUY TRÌNH CẬP NHẬT PHIÊN BẢN NGÀY HỘI LIÊN QUÂN – 9.7.2025
              </h3>
            </div>
          </a>
        </div>

        <div className="text-center">
          <a
            href="https://lienquan.garena.vn/tin-tuc/"
            className="p-home__posts--btn btn-more"
            title="Xem thêm"
            style={{
              width: "278px",
              height: "61px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(237, 190, 128)",
              fontSize: "21px",
              fontWeight: "700",
              lineHeight: "31px",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundImage:
                "url(https://lienquan.garena.vn/wp-content/themes/aov-2024/assets/img/btn-more.png)",
              backgroundPosition: "0px 0px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              fontFamily: '"UTM Helve", sans-serif',
              textDecoration: "none",
            }}
          >
            Xem thêm
          </a>
          <div
            style={{
              fontWeight: "400",
              textAlign: "center",
              pointerEvents: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

// Champion Section Component
const ChampionSection = () => {
  return (
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
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <DownloadWidget />
      <Header />
      <HeroSlider />
      <PostsSection />
      <ChampionSection />
    </div>
  );
}

export default App;
