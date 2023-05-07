import { Button, Modal } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  open: boolean;
  title: string;
  onOk?: () => void;
  onCancel?: () => void;
  closable?: boolean;
}

const ModalComponent = ({
  children,
  open,
  title,
  onOk,
  onCancel,
  closable = false,
}: Props) => {
  return (
    <>
      <Modal
        open={open}
        className="max-w-screen-2xl"
        closable={closable}
        width="90vw"
        title={title}
        onCancel={onCancel}
        centered
        footer={[
          onCancel && (
            <Button
              key="modal-cancel-button"
              type="default"
              htmlType="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          ),
          onOk && (
            <Button
              key="modal-submit-button"
              type="primary"
              htmlType="submit"
              onClick={onOk}
              className="bg-main"
            >
              Submit
            </Button>
          ),
        ]}
      >
        <div className="max-h-[65vh] overflow-y-auto">{children}</div>
      </Modal>
    </>
  );
};

export default ModalComponent;
