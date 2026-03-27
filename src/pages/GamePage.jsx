import React from "react";
import { chapterThemes } from "../data/themes";
import { getPageStyle, getStyles } from "../styles/gameStyles";
import GameUI from "../components/GameUI";
import { useGameState } from "../hooks/useGameState";
import { nodes } from "../data/nodes";

export default function GamePage() {
  const game = useGameState();
  const theme = chapterThemes[game.current.chapter] || ["#2f2620", "#c79f63"];
  const pageStyle = getPageStyle(game.started, theme);
  const styles = getStyles(theme);

  const historyWithTitles = game.history.map((item) => ({
    id: item.id,
    title: nodes[item.id]?.title || item.id,
    chapter: nodes[item.id]?.chapter || "",
    choiceLabel: item.choiceLabel || null,
  }));

  return (
    <GameUI
      {...game}
      history={historyWithTitles}
      pageStyle={pageStyle}
      styles={styles}
    />
  );
}