import React from 'react';
import { Tooltip, Icon } from 'react-lu-design';

const branchUrl = 'https://github.com/zhulux/react-lu-design/blob/master/';

export default function EditButton({ title, filename }) {
  return (
    <Tooltip title={title}>
      <a className="edit-button" href={`${branchUrl}${filename}`}>
        <Icon type="edit" />
      </a>
    </Tooltip>
  );
}
