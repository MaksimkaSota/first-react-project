import React from 'react';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  onActivateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  onDeactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.editMode ?
            <div>
              <b>Status</b> <span onDoubleClick={this.onActivateEditMode}>{this.props.status || 'no status'}</span>
            </div> :
            <div>
              <b>Status</b> <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.onDeactivateEditMode} value={this.state.status} />
            </div>
        }
      </div>
    );
  }
}
