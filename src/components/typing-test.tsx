import { useTranscriptionLogic } from "@/hooks/use-transcription-logic";
import { TranscribeActions } from "./transcribe-actions";
import { TranscribeDialog } from "./transcribe-dialog";
import { TranscribePlayground } from "./transcribe-playground";

const PARAGRAPH = `A linguagem de programação é um método padronizado, formado por um conjunto de regras sintáticas e semânticas, de implementação de um código fonte que pode ser compilado e transformado em um programa de computador.`;
const MAX_TIME = 60;

export function TypingTest() {
  const {
    CPM,
    WPM,
    getCharClass,
    handleInputChange,
    handleStartTranscribing,
    hasFinished,
    inputRef,
    mistakes,
    reset,
    setTextToBeTranscribed,
    textToBeTranscribed,
    timeLeft,
    typedText,
    startTranscribing,
  } = useTranscriptionLogic(PARAGRAPH, MAX_TIME);

  return (
    <div className="relative max-w-[850px] m-1 w-[calc(100%-10px)] p-7 rounded-lg border bg-primary-foreground shadow-[0_0_40px_rgba(144,19,179,0.40)]">
      <TranscribePlayground
        hasFinished={hasFinished}
        inputRef={inputRef}
        startTranscribing={startTranscribing}
        textToBeTranscribed={textToBeTranscribed}
        typedText={typedText}
        textPlaceholder={PARAGRAPH}
        getCharClass={getCharClass}
        handleInputChange={handleInputChange}
      />
      <TranscribeActions
        CPM={CPM}
        WPM={WPM}
        mistakes={mistakes}
        timeLeft={timeLeft}
        reset={reset}
      />
      <TranscribeDialog
        textToBeTranscribed={textToBeTranscribed}
        startTranscribing={startTranscribing}
        setTextToBeTranscribed={setTextToBeTranscribed}
        handleStartTranscribing={handleStartTranscribing}
      />
    </div>
  );
}
