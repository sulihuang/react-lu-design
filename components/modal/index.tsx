import React from 'react';
import Modal from './Modal';
import confirm from './confirm';
import assign from 'object-assign';

export interface ModalFuncProps {
  visible?: boolean;
  title?: React.ReactNode | string;
  content?: React.ReactNode | string;
  onOk?: (func: Function) => any;
  onCancel?: (func: Function) => any;
  width?: string | number;
  iconClassName?: string;
  okText?: string;
  cancelText?: string;
  iconType?: string;
}
Modal.info = function (props: ModalFuncProps) {
  const config = assign({}, {
    type: 'info',
    iconType: 'infocirlce',
    okCancel: false,
  }, props);
  return confirm(config);
};

Modal.success = function (props: ModalFuncProps) {
  const config = assign({}, {
    type: 'success',
    iconType: 'checkcircle',
    okCancel: false,
  }, props);
  return confirm(config);
};

Modal.error = function (props: ModalFuncProps) {
  const config = assign({}, {
    type: 'error',
    iconType: 'closecircle',
    okCancel: false,
  }, props);
  return confirm(config);
};

Modal.warning = Modal.warn = function (props: ModalFuncProps) {
  const config = assign({}, {
    type: 'warning',
    iconType: 'exclamationcircle',
    okCancel: false,
  }, props);
  return confirm(config);
};

Modal.confirm = function (props: ModalFuncProps) {
  const config = assign({}, {
    type: 'confirm',
    okCancel: true,
  }, props);
  return confirm(config);
};

export default Modal;
