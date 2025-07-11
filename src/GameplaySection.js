import React, { useState } from "react";

const GameplaySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const heroTypes = [
    {
      id: 28,
      name: "Đấu sĩ",
      icon: "https://lienquan.garena.vn/wp-content/uploads/2024/05/dau-si.png",
    },
    {
      id: 31,
      name: "Đỡ đòn",
      icon: "https://lienquan.garena.vn/wp-content/uploads/2024/05/do-don.png",
    },
    {
      id: 29,
      name: "Pháp sư",
      icon: "https://lienquan.garena.vn/wp-content/uploads/2024/05/phap-su.png",
    },
    {
      id: 32,
      name: "Sát thủ",
      icon: "https://lienquan.garena.vn/wp-content/uploads/2024/05/sat-thu.png",
    },
    {
      id: 30,
      name: "Trợ thủ",
      icon: "https://lienquan.garena.vn/wp-content/uploads/2024/05/tro-thu.png",
    },
    {
      id: 33,
      name: "Xạ thủ",
      icon: "https://lienquan.garena.vn/wp-content/uploads/2024/05/xa-thu.png",
    },
  ];

  const heroes = [
    {
      name: "Goverra",
      type: [29],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2025/07/goverra-1.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/goverra/",
    },
    {
      name: "Heino",
      type: [29],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2025/04/heino-2.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/heino/",
    },
    {
      name: "Billow",
      type: [32],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2025/01/59900-2.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/billow/",
    },
    {
      name: "Bolt Baron",
      type: [29],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/11/bolt-baron-225.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/bolt-baron/",
    },
    {
      name: "Biron",
      type: [28],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/10/biron-artwork-1.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/biron/",
    },
    {
      name: "Dolia",
      type: [30],
      image: "https://lienquan.garena.vn/wp-content/uploads/2024/07/15900s.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/dolia/",
    },
    {
      name: "Charlotte",
      type: [28],
      image: "https://lienquan.garena.vn/wp-content/uploads/2024/07/20600s.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/charlotte/",
    },
    {
      name: "Tachi",
      type: [28],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/05/ea94a6f76e867283974c8ced9d3aa2c5658d3150230cf1.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/tachi/",
    },
    {
      name: "Dirak",
      type: [29],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/05/ab0b68ebd2e8df3116d91231ec0e55fc5e16e1f05c8701-1.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/dirak/",
    },
    {
      name: "Qi",
      type: [28],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/05/6da178e8a2c2871aeb856bec0f669ccd5d5684e01acd31.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/qi/",
    },
    {
      name: "Erin",
      type: [33],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/05/a1d3b1c36a643cb6d58c704139a2c24d65af7afac34cb1.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/erin/",
    },
    {
      name: "Ming",
      type: [30],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/05/58ba051be8f5ab56c0ea840ceb29c489658d529e847cf1.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/ming/",
    },
    {
      name: "Valhein",
      type: [33],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/05/4b36c6e5e2d1ce9dd9e2841d2902043c5ee04efeb2f2d1.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/valhein/",
    },
    {
      name: "Arthur",
      type: [28],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/06/Honeyview_Arthur_111-e1718875297358.jpg",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/arthur/",
    },
    {
      name: "Krixi",
      type: [29],
      image:
        "https://lienquan.garena.vn/wp-content/uploads/2024/05/7f04b1fd7f0520dd1ccbd1caad6faf1a5847d3f72e85b1.png",
      link: "https://lienquan.garena.vn/hoc-vien/tuong-skin/d/krixi/",
    },
  ];

  const filteredHeroes = heroes.filter((hero) => {
    const matchesSearch = hero.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "all" || hero.type.includes(parseInt(activeFilter));
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="p-home__gameplay">
      <h2 className="p-home__gameplay--title">
        <span className="title">Gameplay</span>
      </h2>
      <div className="p-home__gameplay--main">
        <ul className="academy-menu">
          <li
            id="menu-item-1711"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1711"
          >
            <a href="https://lienquan.garena.vn/hoc-vien/tuong-skin/">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay-heroes.png"
                alt="Tướng/Skin"
              />
              <span>Tướng/Skin</span>
            </a>
          </li>
          <li
            id="menu-item-5233"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5233"
          >
            <a href="https://skin.lienquan.garena.vn/">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay-heroes.png"
                alt="Trang phục"
              />
              <span>Trang phục</span>
            </a>
          </li>
          <li
            id="menu-item-1712"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712"
          >
            <a href="https://lienquan.garena.vn/hoc-vien/trang-bi/">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay-items.png"
                alt="Trang Bị"
              />
              <span>Trang Bị</span>
            </a>
          </li>
          <li
            id="menu-item-1716"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1716"
          >
            <a href="https://lienquan.garena.vn/hoc-vien/bang-ngoc/">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay-runes.png"
                alt="Bảng ngọc"
              />
              <span>Bảng ngọc</span>
            </a>
          </li>
          <li
            id="menu-item-1713"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1713"
          >
            <a href="https://lienquan.garena.vn/hoc-vien/phu-tro/">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay-extra-skills.png"
                alt="Phụ Trợ"
              />
              <span>Phụ Trợ</span>
            </a>
          </li>
          <li
            id="menu-item-1714"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1714"
          >
            <a href="https://lienquan.garena.vn/hoc-vien/phu-hieu/">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay-badges.png"
                alt="Phù Hiệu"
              />
              <span>Phù Hiệu</span>
            </a>
          </li>
          <li
            id="menu-item-1715"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1715"
          >
            <a href="https://lienquan.garena.vn/hoc-vien/che-do-choi/">
              <img
                src="https://lienquan.garena.vn/wp-content/uploads/2024/07/icon-gameplay-modes.png"
                alt="Chế độ chơi"
              />
              <span>Chế độ chơi</span>
            </a>
          </li>
        </ul>

        <div className="p-home__gameplay--content">
          <section className="st-heroes">
            <div
              className="st-heroes__bar"
              style={{
                display: "flex !important",
                fontSize: "13.3917px",
                justifyContent: "space-between",
                lineHeight: "20.0875px",
                margin: "0px 0px 24.7746px",
                textAlign: "left",
                flexWrap: "nowrap !important",
                alignItems: "center",
                width: "100%",
                flexDirection: "row !important",
              }}
            >
              <div
                className="search"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="text"
                  placeholder="Tìm kiếm tướng"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>
                  <img
                    src="https://lienquan.garena.vn/wp-content/themes/aov-2024/assets/img/btn-search-1.png"
                    alt="Search"
                  />
                </button>
              </div>
              <ul
                className="st-heroes__types"
                style={{
                  display: "flex !important",
                  alignItems: "center",
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  flexWrap: "nowrap !important",
                  gap: "10px",
                  whiteSpace: "nowrap",
                  flexDirection: "row !important",
                }}
              >
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveFilter("all");
                    }}
                    className={activeFilter === "all" ? "active" : ""}
                  >
                    Tất cả
                  </a>
                </li>
                {heroTypes.map((type) => (
                  <li key={type.id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveFilter(type.id.toString());
                      }}
                      className={
                        activeFilter === type.id.toString() ? "active" : ""
                      }
                    >
                      <img src={type.icon} alt={type.name} />
                      {type.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="st-heroes__list">
              {filteredHeroes.map((hero, index) => (
                <a key={index} href={hero.link} className="st-heroes__item">
                  <div className="st-heroes__item--img">
                    <img src={hero.image} alt={hero.name} />
                  </div>
                  <h2 className="st-heroes__item--name">{hero.name}</h2>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
      <a
        href="https://lienquan.garena.vn/hoc-vien/tuong-skin/"
        className="p-home__gameplay--btn btn-more"
        title="Xem thêm"
      >
        Xem thêm
      </a>
    </section>
  );
};

export default GameplaySection;
