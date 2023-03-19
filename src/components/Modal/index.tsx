import { Button, Modal } from "antd";
import { ReactNode } from "react";
import "components/Modal/index.css";

interface Props {
  children: ReactNode;
  open: boolean;
  title: string;
  onOk: () => void;
  onCancel: () => void;
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
        className="custom-modal"
        closable={closable}
        width="90vw"
        title={title}
        onCancel={onCancel}
        footer={[
          <Button
            key="modal-cancel-button"
            type="default"
            htmlType="button"
            onClick={onCancel}
          >
            Cancel
          </Button>,
          <Button
            key="modal-submit-button"
            type="primary"
            htmlType="submit"
            onClick={onOk}
            style={{ background: "#030852" }}
          >
            Submit
          </Button>,
        ]}
      >
        <div className="custom-modal-wrapper">{children}</div>
      </Modal>
    </>
  );
};

export default ModalComponent;
