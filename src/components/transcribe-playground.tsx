import { useSoundPlayer } from "@/hooks/use-sound-player";
import { ChangeEvent, RefObject } from "react";

interface TranscribePlaygroundProps {
  inputRef: RefObject<HTMLInputElement>;
  textToBeTranscribed: string;
  typedText: string;
  hasFinished: boolean;
  startTranscribing: boolean;
  getCharClass: (index: number) => string;
  textPlaceholder: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement>,
    playSound: (char: string) => void
  ) => void;
}

export function TranscribePlayground(playground: TranscribePlaygroundProps) {
  const { playSound } = useSoundPlayer();

  return (
    <div className="relative select-none text-primary/20">
      <input
        type="text"
        className="opacity-0 inset-0 absolute"
        ref={playground.inputRef}
        value={playground.typedText}
        onChange={(e) => playground.handleInputChange(e, playSound)}
        disabled={playground.hasFinished}
      />
      {playground.startTranscribing ? (
        playground.textToBeTranscribed.split("").map((char, index) => (
          <span
            key={index}
            className={`text-xl select-none cursor-text ${
              char === " " && "px-1"
            } ${playground.getCharClass(index)}`}
          >
            {char}
          </span>
        ))
      ) : (
        <span className="text-xl select-none cursor-text">
          {playground.textPlaceholder}
        </span>
      )}
    </div>
  );
}
