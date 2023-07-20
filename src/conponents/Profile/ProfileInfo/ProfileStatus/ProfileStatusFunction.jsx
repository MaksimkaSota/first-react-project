import { useEffect, useState } from 'react';

export const ProfileStatusFunction = ({status, updateStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const onActivateEditMode = () => {
    setEditMode(true);
  };

  const onDeactivateEditMode = () => {
    setEditMode(false);
    updateStatus(localStatus);
  };

  const onChangeLocalStatus = (event) => {
    setLocalStatus(event.target.value);
  }

  return (
    <div>
      {
        !editMode ?
          <div>
            <span onDoubleClick={onActivateEditMode}>{status || 'no status'}</span>
          </div> :
          <div>
            <input onChange={onChangeLocalStatus} autoFocus={true} onBlur={onDeactivateEditMode} value={localStatus} />
          </div>
      }
    </div>
  );
}
