import React from "react";
import { PREFACE } from "../data/preface";
import { endingToEpilogue } from "../data/themes";

export default function GameUI({
  started,
  setStarted,
  current,
  currentId,
  history,
  visitedEndings,
  endingModalOpen,
  setEndingModalOpen,
  skipAnimation,
  setSkipAnimation,
  displayedText,
  progress,
  goTo,
  goBack,
  restart,
  pageStyle,
  styles,
}) {
  if (!started) {
    return (
      <div style={pageStyle}>
        <div
          style={{
            minHeight: "calc(100vh - 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: 980,
              width: "100%",
              background: "rgba(255,255,255,0.84)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(104,76,49,0.12)",
              boxShadow: "0 24px 60px rgba(64,44,22,0.12)",
              borderRadius: 32,
              padding: 36,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "7px 13px",
                  borderRadius: 999,
                  background: "#efe2c8",
                  color: "#5c4633",
                  fontSize: 13,
                }}
              >
                历史模拟小游戏
              </span>
              <span
                style={{
                  display: "inline-block",
                  padding: "7px 13px",
                  borderRadius: 999,
                  background: "#efe2c8",
                  color: "#5c4633",
                  fontSize: 13,
                }}
              >
                佛教思想分叉树
              </span>
            </div>

            <h1
              style={{
                fontSize: 52,
                margin: "8px 0 18px",
                lineHeight: 1.12,
                color: "#2f241a",
              }}
            >
              佛教历史模拟器
            </h1>

            <div
              style={{
                whiteSpace: "pre-line",
                lineHeight: 2.05,
                fontSize: 17,
                color: "#4d3d2d",
              }}
            >
              {PREFACE}
            </div>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setStarted(true)}
                style={{
                  padding: "15px 30px",
                  fontSize: 18,
                  borderRadius: 16,
                  background: "#3a2a1c",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 12px 24px rgba(40,28,18,0.18)",
                }}
              >
                开始游戏
              </button>

              <div style={{ color: "#6d5845", fontSize: 15 }}>作者：何恩豪</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={styles.shell}>
        <div style={styles.heroGrid}>
          <div style={styles.card}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
              <div style={styles.badge}>历史模拟小游戏</div>
              <div style={styles.badge}>佛教思想分叉树</div>
            </div>

            <h1 style={styles.heroTitle}>佛教历史模拟器</h1>

            <p style={styles.heroSub}>
              进入游戏后，前言不再重复出现。你接下来看到的每一次分岔，都是一次从具体历史情境出发的思想选择。
            </p>
          </div>

          <div style={styles.card}>
            <div style={{ fontSize: 14, color: "#816e5b" }}>已解锁结局</div>
            <div style={{ fontSize: 44, fontWeight: 700, marginTop: 8 }}>
              {visitedEndings.length}
            </div>
            <div style={{ marginTop: 6, color: "#655242" }}>探索进度 {progress}%</div>
            <div style={styles.progressTrack}>
              <div style={{ ...styles.progressBar, width: `${progress}%` }} />
            </div>
            <div style={styles.actionRow}>
              <button style={styles.button} onClick={restart}>
                重新开始
              </button>
              <button style={styles.lightButton} onClick={goBack} disabled={history.length <= 1}>
                返回上一步
              </button>
              <button style={styles.lightButton} onClick={() => setSkipAnimation((v) => !v)}>
                {skipAnimation ? "开启打字效果" : "跳过打字效果"}
              </button>
            </div>
          </div>
        </div>

        <div style={styles.mainGrid}>
          <div style={styles.sceneCard}>
            <div style={styles.glow} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={styles.badge}>{current.chapter}</div>
              <div style={styles.badge}>
                {current.type === "ending" ? "结局节点" : "剧情节点"}
              </div>
              <h2 style={styles.sceneTitle}>{current.title}</h2>
            </div>

            <div style={styles.scrollBox}>
              <div style={styles.storyText}>{displayedText}</div>
              {current.flavor ? <div style={styles.flavor}>{current.flavor}</div> : null}
            </div>

            {current.type !== "ending" && current.choices ? (
              <div style={styles.choices}>
                {current.choices.map((choice) => (
                  <button
                    key={choice.label}
                    style={styles.choiceBtn}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 14px 28px rgba(64,44,22,0.10)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 24px rgba(64,44,22,0.08)";
                    }}
                    onClick={() => goTo(choice.next, choice.label)}
                  >
                    <div style={styles.hint}>做出选择</div>
                    <div>{choice.label}</div>
                  </button>
                ))}
              </div>
            ) : null}

            {current.type === "ending" ? (
              <div style={styles.actionRow}>
                {current.allowBacktrack ? (
                  <button style={styles.button} onClick={goBack}>
                    返回上一节点
                  </button>
                ) : null}

                {current.nextStage ? (
                  <button style={styles.button} onClick={() => goTo(current.nextStage)}>
                    {current.nextStageLabel || "继续"}
                  </button>
                ) : null}

                {endingToEpilogue.has(currentId) ? (
                  <button
                    style={styles.lightButton}
                    onClick={() => goTo("final_epilogue")}
                  >
                    阅读终章
                  </button>
                ) : null}

                <button
                  style={styles.lightButton}
                  onClick={() => setEndingModalOpen(true)}
                >
                  再次查看结局窗口
                </button>
                <button style={styles.lightButton} onClick={restart}>
                  再开一局
                </button>
              </div>
            ) : null}
          </div>

          <div>
            <div style={styles.card}>
              <h3 style={styles.sideTitle}>本局路径</h3>
              <div style={styles.pathWrap}>
                {history.map((item, idx) => {
                const nextItem = history[idx + 1];
                const choiceMadeHere = nextItem?.choiceLabel || null;

                return (
                  <div
                    key={`${item.id}-${idx}`}
                    style={{
                      ...styles.pathItem,
                      textAlign: "left",
                    }}
                  >
                    <div style={{ fontSize: 12, color: "#8c745f" }}>
                      第 {idx + 1} 步
                    </div>

                    <div
                      style={{
                        marginTop: 6,
                        fontWeight: 700,
                        fontSize: 16,
                        lineHeight: 1.5,
                        color: "#2f241a",
                      }}
                    >
                      {item.title}
                    </div>

                    <div
                      style={{
                        marginTop: 4,
                        fontSize: 12,
                        color: "#8c745f",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.chapter}
                    </div>

                    {choiceMadeHere ? (
                      <div
                        style={{
                          marginTop: 10,
                          padding: "8px 10px",
                          borderRadius: "12px",
                          background: "rgba(239, 226, 200, 0.6)",
                          color: "#5c4633",
                          fontSize: 13,
                          lineHeight: 1.6,
                        }}
                      >
                        你的选择：{choiceMadeHere}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              </div>
            </div>

            <div style={{ ...styles.card, marginTop: 20 }}>
              <h3 style={styles.sideTitle}>已解锁结局</h3>
              {visitedEndings.length === 0 ? (
                <div style={{ color: "#7d6755", lineHeight: 1.9 }}>
                  还没有解锁结局。先走完一条路线试试看。
                </div>
              ) : (
                <div>
                  {visitedEndings.map((ending) => (
                    <span key={ending} style={styles.badge}>
                      {ending}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div style={{ ...styles.card, marginTop: 20 }}>
              <h3 style={styles.sideTitle}>游戏说明</h3>
              <div style={{ color: "#6f5b49", lineHeight: 1.95, fontSize: 14 }}>
                <div>1. 阅读当前剧情，再点击下方分支选项。</div>
                <div>2. 你的每一次点击，都会进入一条真实存在过的思想路线或宗派分支。</div>
                <div>3. 彩蛋作为前面结局之后的继续分支保留，不会消失。</div>
                <div>4. 结局会弹出独立窗口，你可以继续进入彩蛋或终章。</div>
                <div>5. 右侧“本局路径”会记录你经过的节点，以及你当时的选择。</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>作者：何恩豪</div>
      </div>

      {current.type === "ending" && endingModalOpen ? (
        <div
          style={styles.modalOverlay}
          onClick={() => setEndingModalOpen(false)}
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalRibbon}>{current.chapter}</div>
            <h2 style={{ margin: "0 0 14px", fontSize: 34, lineHeight: 1.25 }}>
              {current.title}
            </h2>
            <div
              style={{
                whiteSpace: "pre-line",
                lineHeight: 2,
                fontSize: 16,
                color: "#31261d",
              }}
            >
              {current.text}
            </div>
            {current.flavor ? <div style={styles.flavor}>{current.flavor}</div> : null}
            <div style={styles.actionRow}>
              <button
                style={styles.lightButton}
                onClick={() => setEndingModalOpen(false)}
              >
                关闭窗口
              </button>

              {current.nextStage ? (
                <button
                  style={styles.button}
                  onClick={() => goTo(current.nextStage)}
                >
                  {current.nextStageLabel || "继续"}
                </button>
              ) : null}

              {endingToEpilogue.has(currentId) ? (
                <button
                  style={styles.lightButton}
                  onClick={() => goTo("final_epilogue")}
                >
                  阅读终章
                </button>
              ) : null}

              <button style={styles.lightButton} onClick={restart}>
                再开一局
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}