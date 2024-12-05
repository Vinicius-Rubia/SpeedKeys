import { Button } from "./ui/button";

interface TranscribeActionsProps {
  timeLeft: number;
  mistakes: number;
  WPM: number;
  CPM: number;
  reset: () => void;
}

export function TranscribeActions(actions: TranscribeActionsProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between mt-3.5 pt-2.5 border-t">
      <p>
        Tempo restante: <strong>{actions.timeLeft}s</strong>
      </p>
      <p>
        Erros: <strong>{actions.mistakes}</strong>
      </p>
      <p>
        WPM: <strong>{actions.WPM}</strong>
      </p>
      <p>
        CPM: <strong>{actions.CPM}</strong>
      </p>
      <Button onClick={actions.reset} variant="secondary">
        Recomeçar
      </Button>
    </div>
  );
}
