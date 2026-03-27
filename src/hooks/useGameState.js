import { useEffect, useMemo, useState } from "react";
import { nodes } from "../data/nodes";

function useTypewriter(text, enabled = true) {
  const [displayed, setDisplayed] = useState(enabled ? "" : text);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      i += Math.max(1, Math.ceil(text.length / 160));
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 18);

    return () => clearInterval(timer);
  }, [text, enabled]);

  return displayed;
}

export function useGameState() {
  const [started, setStarted] = useState(false);
  const [currentId, setCurrentId] = useState("intro");
  const [history, setHistory] = useState([
    {
      id: "intro",
      choiceLabel: null,
    },
  ]);
  const [visitedEndings, setVisitedEndings] = useState([]);
  const [endingModalOpen, setEndingModalOpen] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const current = nodes[currentId];
  const displayedText = useTypewriter(current.text, !skipAnimation);

  useEffect(() => {
    setEndingModalOpen(current.type === "ending");
  }, [currentId, current.type]);

  const progress = useMemo(() => {
    const total = Object.values(nodes).filter(
      (n) => n.type === "ending" && n.endingLabel !== "未延续路线"
    ).length;
    return Math.round((visitedEndings.length / total) * 100);
  }, [visitedEndings]);

  const goTo = (id, choiceLabel = null) => {
    setCurrentId(id);
    setHistory((prev) => [
      ...prev,
      {
        id,
        choiceLabel,
      },
    ]);

    const node = nodes[id];
    if (
      node?.type === "ending" &&
      node.endingLabel &&
      node.endingLabel !== "未延续路线"
    ) {
      setVisitedEndings((prev) =>
        prev.includes(node.endingLabel) ? prev : [...prev, node.endingLabel]
      );
    }
  };

  const goBack = () => {
    if (history.length <= 1) return;

    const newHistory = history.slice(0, -1);
    const last = newHistory[newHistory.length - 1];

    setHistory(newHistory);
    setCurrentId(last.id);
  };

  const restart = () => {
    setCurrentId("intro");
    setHistory([
      {
        id: "intro",
        choiceLabel: null,
      },
    ]);
    setEndingModalOpen(false);
  };

  return {
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
  };
}