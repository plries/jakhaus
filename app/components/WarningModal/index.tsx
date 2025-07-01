import { Modal } from "../Modal";
import { WarningModalPropTypes } from "./types";

export const WarningModal = ({
  children,
  showModal,
}: WarningModalPropTypes) => {
  return (
    <Modal showModal={showModal}>
      {children}
    </Modal>
  );
};
