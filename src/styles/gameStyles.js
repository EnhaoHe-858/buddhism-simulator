export function getPageStyle(started, theme) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 900;

  return {
    minHeight: "100vh",
    background: started
      ? `radial-gradient(circle at top, ${theme[1]}22 0%, transparent 32%), linear-gradient(135deg, #f7efe1 0%, #efe4d2 45%, #e6d8c4 100%)`
      : "linear-gradient(135deg, #f6efe3 0%, #efe5d2 50%, #e8dcc7 100%)",
    color: "#2b2118",
    fontFamily: '"Noto Serif SC","Songti SC","STSong","SimSun",serif',
    padding: started
      ? (isMobile ? "12px 8px 20px" : "28px 18px 42px")
      : "20px",
    boxSizing: "border-box",
  };
}

export function getStyles(theme) {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return {
    shell: {
      maxWidth: "1280px",
      margin: "0 auto",
      width: "100%",
    },

    heroGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "minmax(0, 1fr)"
        : "minmax(0, 1.45fr) minmax(300px, 0.8fr)",
      gap: isMobile ? "12px" : "20px",
      marginBottom: isMobile ? "12px" : "20px",
    },

    card: {
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(104,76,49,0.12)",
      boxShadow: "0 16px 40px rgba(64,44,22,0.10)",
      borderRadius: isMobile ? "18px" : "28px",
      padding: isMobile ? "14px" : "24px",
      boxSizing: "border-box",
      width: "100%",
    },

    heroTitle: {
      fontSize: isMobile ? "28px" : "46px",
      lineHeight: 1.15,
      margin: "8px 0 12px",
      letterSpacing: "0.02em",
      wordBreak: "break-word",
    },

    heroSub: {
      margin: 0,
      fontSize: isMobile ? "14px" : "17px",
      lineHeight: isMobile ? 1.8 : 1.95,
      color: "#5d4b3b",
      whiteSpace: "pre-line",
      wordBreak: "break-word",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: isMobile ? "6px 10px" : "7px 13px",
      borderRadius: "999px",
      background: `${theme[1]}18`,
      color: theme[0],
      fontSize: isMobile ? "11px" : "13px",
      marginRight: "8px",
      marginBottom: "8px",
      border: `1px solid ${theme[1]}33`,
      maxWidth: "100%",
      boxSizing: "border-box",
    },

    mainGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "minmax(0, 1fr)" : "minmax(0, 1fr) 340px",
      gap: isMobile ? "12px" : "20px",
      alignItems: "start",
    },

    sceneCard: {
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(180deg, ${theme[1]}14 0%, rgba(255,255,255,0.84) 16%, rgba(255,255,255,0.82) 100%)`,
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(104,76,49,0.12)",
      borderRadius: isMobile ? "20px" : "32px",
      boxShadow: "0 20px 48px rgba(64,44,22,0.12)",
      padding: isMobile ? "14px" : "28px",
      boxSizing: "border-box",
      width: "100%",
    },

    glow: {
      position: "absolute",
      top: -80,
      right: -50,
      width: isMobile ? 140 : 240,
      height: isMobile ? 140 : 240,
      borderRadius: "999px",
      background: `radial-gradient(circle, ${theme[1]}44 0%, ${theme[1]}00 72%)`,
      pointerEvents: "none",
    },

    sceneTitle: {
      fontSize: isMobile ? "24px" : "36px",
      lineHeight: 1.25,
      margin: "8px 0 18px",
      position: "relative",
      zIndex: 1,
      wordBreak: "break-word",
    },

    scrollBox: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,251,245,0.92) 100%)",
      border: "1px solid rgba(122,95,67,0.12)",
      borderRadius: isMobile ? "16px" : "24px",
      padding: isMobile ? "14px" : "24px 24px 22px",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
      position: "relative",
      zIndex: 1,
      boxSizing: "border-box",
    },

    storyText: {
      whiteSpace: "pre-line",
      lineHeight: isMobile ? 1.9 : 2.02,
      fontSize: isMobile ? "15px" : "16px",
      color: "#34291f",
      minHeight: isMobile ? "160px" : "340px",
      wordBreak: "break-word",
      overflowWrap: "break-word",
    },

    flavor: {
      marginTop: "18px",
      borderRadius: "16px",
      padding: isMobile ? "12px" : "14px 16px",
      background: `linear-gradient(135deg, ${theme[0]} 0%, #4b3929 100%)`,
      color: "#fff8f0",
      fontSize: isMobile ? "13px" : "14px",
      lineHeight: 1.8,
      boxShadow: "0 12px 28px rgba(45,29,14,0.16)",
      whiteSpace: "pre-line",
      wordBreak: "break-word",
    },

    choices: {
      display: "grid",
      gridTemplateColumns: isMobile ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))",
      gap: "14px",
      marginTop: "18px",
    },

    choiceBtn: {
      border: `1px solid ${theme[1]}3a`,
      background: "linear-gradient(180deg, #fffefd 0%, #fff8ef 100%)",
      borderRadius: isMobile ? "16px" : "22px",
      padding: isMobile ? "14px" : "18px 18px 16px",
      textAlign: "left",
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(64,44,22,0.08)",
      transition:
        "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
      fontSize: isMobile ? "15px" : "16px",
      lineHeight: 1.8,
      width: "100%",
      boxSizing: "border-box",
      wordBreak: "break-word",
    },

    hint: {
      fontSize: "12px",
      color: "#8c7258",
      marginBottom: "6px",
      letterSpacing: "0.04em",
    },

    actionRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "18px",
    },

    button: {
      padding: isMobile ? "10px 14px" : "11px 16px",
      borderRadius: "14px",
      border: `1px solid ${theme[0]}`,
      background: theme[0],
      color: "#fff8f0",
      cursor: "pointer",
      fontSize: isMobile ? "13px" : "14px",
      boxShadow: "0 10px 20px rgba(40,28,18,0.16)",
    },

    lightButton: {
      padding: isMobile ? "10px 14px" : "11px 16px",
      borderRadius: "14px",
      border: `1px solid ${theme[1]}55`,
      background: "rgba(255,251,245,0.95)",
      color: theme[0],
      cursor: "pointer",
      fontSize: isMobile ? "13px" : "14px",
    },

    sideTitle: {
      margin: 0,
      marginBottom: "14px",
      fontSize: isMobile ? "17px" : "20px",
      color: "#382d23",
    },

    pathWrap: {
      maxHeight: isMobile ? "220px" : "340px",
      overflowY: "auto",
      paddingRight: "4px",
    },

    pathItem: {
      padding: isMobile ? "10px" : "12px",
      borderRadius: "16px",
      background: "rgba(255,250,243,0.96)",
      border: "1px solid rgba(122,95,67,0.10)",
      boxShadow: "0 6px 16px rgba(64,44,22,0.05)",
      marginBottom: "10px",
      boxSizing: "border-box",
      wordBreak: "break-word",
    },

    progressTrack: {
      marginTop: "14px",
      width: "100%",
      height: "10px",
      borderRadius: "999px",
      background: "#eadbc8",
      overflow: "hidden",
    },

    progressBar: {
      height: "100%",
      borderRadius: "999px",
      background: `linear-gradient(90deg, ${theme[0]} 0%, ${theme[1]} 100%)`,
      transition: "width 0.35s ease",
    },

    footer: {
      marginTop: "24px",
      textAlign: "center",
      color: "#7b6654",
      fontSize: isMobile ? "12px" : "14px",
    },

    modalOverlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(24,18,12,0.56)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: isMobile ? "12px" : "20px",
      zIndex: 50,
    },

    modal: {
      width: "min(900px, 100%)",
      maxHeight: "86vh",
      overflowY: "auto",
      borderRadius: isMobile ? "18px" : "28px",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,248,238,0.96) 100%)",
      border: `1px solid ${theme[1]}40`,
      boxShadow: "0 24px 60px rgba(24,18,12,0.28)",
      position: "relative",
      padding: isMobile ? "16px" : "28px",
      boxSizing: "border-box",
    },

    modalRibbon: {
      display: "inline-flex",
      padding: "7px 14px",
      borderRadius: "999px",
      background: `linear-gradient(90deg, ${theme[0]} 0%, ${theme[1]} 100%)`,
      color: "#fffaf4",
      fontSize: isMobile ? "11px" : "13px",
      marginBottom: "10px",
      boxShadow: "0 10px 22px rgba(35,23,12,0.16)",
    },
  };
}