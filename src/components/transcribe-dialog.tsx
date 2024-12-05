import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

interface TranscribeDialogProps {
  startTranscribing: boolean;
  textToBeTranscribed: string;
  setTextToBeTranscribed: (text: string) => void;
  handleStartTranscribing: () => void;
}

export function TranscribeDialog(dialog: TranscribeDialogProps) {
  return (
    <Dialog open={!dialog.startTranscribing}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Texto à transcrever</DialogTitle>
          <DialogDescription>
            Coloque abaixo o texto que você deseja transcrever
          </DialogDescription>
        </DialogHeader>
        <div>
          <Input
            placeholder="Seu texto"
            value={dialog.textToBeTranscribed}
            maxLength={370}
            onChange={(e) => dialog.setTextToBeTranscribed(e.target.value)}
            className="bg-transparent"
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="secondary"
            disabled={!dialog.textToBeTranscribed}
            onClick={dialog.handleStartTranscribing}
          >
            Começar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
