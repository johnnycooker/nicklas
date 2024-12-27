
import React from "react";
import Link from "next/link";

const GeneratedPage: React.FC = () => {

  
function GeneratedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // alignment w stringu
  const alignment: string = "left";
  let finalOffset = 5;
  if (alignment === "right") {
    finalOffset = -finalOffset;
  }

  const bgColor = "#333333";
  const navClass = "flex items-center justify-between p-4 h-[16.74251497005988%]"; // tailwind klasy do nav
  const linkColor = "#fff";
  const linkFontSize = 16;
  const navLinks = [{"name":"main","path":"/","isFromDB":true},{"name":"tits","path":"/tits","isFromDB":true}];

  const mobileMenuBg = "#222";
  const mobileMenuWidth = 75;
  const mobileMenuPosition = "left";
  const mobileMenuTextAlign = "left";

  const logoClasses = "w-[200px] h-[100px]";
  const logoUrl = "https://9.allegroimg.com/s1024/0cbde8/0f4e067c4432bfe3642da1782279";

  const linkStyle: React.CSSProperties = {
    color: linkColor,
    fontSize: linkFontSize + "px",
    textDecoration: "none",
  };

  // Mobile menu style
  const mobileMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    [mobileMenuPosition]: 0,
    width: mobileMenuWidth + "%",
    height: "calc(100vh)",
    backgroundColor: mobileMenuBg,
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem",
    overflowY: "auto",
    textAlign: mobileMenuTextAlign,
  };

  const navStyle: React.CSSProperties = {
    position: "relative",
    backgroundColor: bgColor,
  };

  // Linki desktop/tablet
  const deskLinks = navLinks.map((lnk, idx) => (
    <Link key={idx} href={lnk.path} style={linkStyle}>
      {lnk.name}
    </Link>
  ));

  // Linki mobilne
  const mobLinks = navLinks.map((lnk, idx) => (
    <Link key={idx} href={lnk.path} style={linkStyle}>
      {lnk.name}
    </Link>
  ));

  return (
    <nav style={navStyle} className={`${navClass}`}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logoUrl}
          alt="logo"
          className={`${logoClasses} object-fill`}
          style={{
            marginLeft: `${finalOffset}%`,
          }}
        />
      </div>

      {/* Burger – widoczny tylko na mobile (md:hidden) */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        {isMobileMenuOpen ? (
          <><svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg></>
        ) : (
          <><svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg></>
        )}
      </button>

      {/* Linki desktop/tablet – hidden na mobile */}
      <div className="hidden md:flex gap-4" style={{ alignItems: "center" }}>
        {deskLinks}
      </div>

      {/* Menu mobilne */}
      {isMobileMenuOpen && (
        <div style={mobileMenuStyle}>
          {mobLinks}
        </div>
      )}
    </nav>
  );
}


  return (
    <div>
      <section className="h-[90.9vh]" style={{ position: "relative", backgroundColor: "#ae2d2d" }}>
      <img src="https://czat.ai/img/avatars/full-og/kotek.jpg" alt="" className="w-[89.07582364341084%] md:w-[47.447916666666664%] h-[21.377245508982035%] md:h-[37.90419161676647%] left-[5.513565891472872%] md:left-[4.583333333333336%] top-[20.71856287425152%] md:top-[32.57485029940123%]" style={{ position: "absolute" }} />
<div className="w-[80.51841085271317%] md:w-[43.541666666666664%] h-[35.92814371257485%] md:h-[38.44311377245509%] left-[8.837209302325585%] md:left-[53.22916666666669%] top-[47.904191616766504%] md:top-[32.45508982035931%]" style={{ position: "absolute", backgroundColor: "#f0f0f0" }}>
      <p className="text-[29px] text-right w-[51.196172248803826%] h-[75.7632398753894%] top-[7.414330218068564%] left-[44.61722488038271%]" style={{ color: "#158613", position: "absolute" }}>ahsiudgsiagd
sadkosakdaskdas asdksadksa</p>
    </div>
<GeneratedNavbar />
    </section>
    </div>
  );
};

export default GeneratedPage;
    