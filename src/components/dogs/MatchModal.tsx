import { Modal, ModalClose, ModalDialog, ModalOverflow, Sheet } from "@mui/joy";
import { Dog } from "../../models/dog";

interface MatchModalProps {
  open: boolean;
  onClose: () => void;
  match: Dog | null;
}

const MatchModal = ({ open, onClose, match }: MatchModalProps) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
      className="flex items-center justify-center"
    >
      <ModalOverflow>
        <ModalDialog>
          <ModalClose className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" aria-label="Close" />
          <Sheet className="relative max-w-lg w-full rounded-lg p-0 sm:p-5">
            {match && (
              <div className="flex flex-col gap-y-4">
                <h1 className="text-4xl font-bold">It's a match!</h1>
                <p>
                  Great news! You've successfully matched with {match.name}. Learn more about your new companion below.
                </p>
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <img src={match.img} alt={match.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <p>
                    <span className="font-semibold">Age:</span> {match.age}
                  </p>
                  <p>
                    <span className="font-semibold">Breed:</span> {match.breed}
                  </p>
                  <p>
                    <span className="font-semibold">Zip Code:</span> {match.zip_code}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">About {match.name}</h2>
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient nec ultrices iaculis consequat
                    inceptos quam risus himenaeos. Tincidunt per arcu congue vulputate fusce torquent tristique
                    interdum. Dui massa lectus molestie facilisi hac nulla. Ac penatibus habitasse tempor purus
                    dignissim dolor platea consequat curabitur. Risus blandit bibendum eleifend faucibus sociosqu.
                    Torquent tincidunt nunc montes nisi curae elementum mus sem aliquam. Augue volutpat tellus interdum
                    ad dapibus lacus hac a urna. Aliquet euismod suspendisse ullamcorper mollis phasellus consequat
                    maximus.
                  </p>
                </div>
              </div>
            )}
          </Sheet>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};

export default MatchModal;
