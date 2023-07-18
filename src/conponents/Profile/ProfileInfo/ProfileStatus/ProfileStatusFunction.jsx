import { useState } from 'react';

export const ProfileStatusFunction = ({status}) => {
  const [state, setState] = useState({
    editMode: false
  });

  const onActivateEditMode = () => {
    console.log(state.editMode);
    setState({
      editMode: true
    });
    console.log(state.editMode);
  };

  const onDeactivateEditMode = () => {
    setState({
      editMode: false
    });
  };

  return (
    <div>
      {
        !state.editMode ?
          <div>
            <span onDoubleClick={onActivateEditMode}>{status}</span>
          </div> :
          <div>
            <input autoFocus={true} onBlur={onDeactivateEditMode} value={status} />
          </div>
      }
    </div>
  );
}
