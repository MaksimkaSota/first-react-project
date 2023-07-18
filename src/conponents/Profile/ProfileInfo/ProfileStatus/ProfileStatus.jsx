import React from 'react';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  onActivateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  onDeactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode ?
            <div>
              <span onDoubleClick={this.onActivateEditMode}>{this.props.status}</span>
            </div> :
            <div>
              <input autoFocus={true} onBlur={this.onDeactivateEditMode} value={this.props.status} />
            </div>
        }
      </div>
    );
  }
}
