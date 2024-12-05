import { calculateCPM, calculateWPM } from "@/utils/calculate-metrics";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function useTranscriptionLogic(initialText: string, maxTime: number) {
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [typedText, setTypedText] = useState("");
  const [textToBeTranscribed, setTextToBeTranscribed] = useState(initialText);
  const [mistakes, setMistakes] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [startTranscribing, setStartTranscribing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const correctChars = typedText.split("").filter((char, idx) => char === textToBeTranscribed[idx]).length;
  const WPM = calculateWPM(correctChars, maxTime - timeLeft);
  const CPM = calculateCPM(correctChars, maxTime - timeLeft);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, playSound: (key: string) => void) => {
    if (timeLeft === 0 || hasFinished) return;

    const inputText = event.target.value;
    setTypedText(inputText);

    if (!isTyping) setIsTyping(true);

    const currentChar = textToBeTranscribed[inputText.length - 1];
    const typedChar = inputText.slice(-1);

    playSound(typedChar);

    if (typedChar !== currentChar && inputText.length <= textToBeTranscribed.length) {
      setMistakes((prev) => prev + 1);
    }

    if (inputText.length === textToBeTranscribed.length) {
      setIsTyping(false);
      setHasFinished(true);
    }
  };

  const reset = () => {
    setTimeLeft(maxTime);
    setTypedText("");
    setStartTranscribing(false);
    setTextToBeTranscribed(initialText);
    setMistakes(0);
    setIsTyping(false);
    setHasFinished(false);
    inputRef.current?.focus();
  };

  const handleStartTranscribing = () => {
    setStartTranscribing(true);
  }

  function getCharClass(index: number) {
    if (index < typedText.length) {
      const typedChar = typedText[index];
      return textToBeTranscribed[index] === typedChar
        ? "text-purple-400"
        : `text-pink-600 ${textToBeTranscribed[index] === " " && "bg-pink-600/30"}`;
    }
    return index === typedText.length ? "border-l-2 border-primary/40 animate-[pulse_1s_ease-in-out_infinite]" : "";
  }

  useEffect(() => {
    if (!isTyping || timeLeft <= 0 || hasFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isTyping, timeLeft, hasFinished]);

  useEffect(() => {
    if (startTranscribing) {
      inputRef.current?.focus();
    }
  }, [startTranscribing]);

  return {
    typedText,
    textToBeTranscribed,
    setTextToBeTranscribed,
    mistakes,
    hasFinished,
    handleInputChange,
    reset,
    WPM,
    CPM,
    getCharClass,
    handleStartTranscribing,
    inputRef,
    timeLeft,
    startTranscribing
  };
}