import { useState } from 'react';
import * as APIClient from '../../api_client';

export default function AddSSHKey() {
  const [sshKey, setSSHKey] = useState('');
  const [messageState, setMessageState] = useState({value: '', class: ''});
  const [buttonDisable, setButtonDisable] = useState(false);

  const onSSHKeyChange = e => {
    setSSHKey(e.target.value);
  };

  const onSSHKeyAdd = async () => {
    setButtonDisable(true);
    setMessageState({value: 'Adding Key...', class: 'info'});
    const res = await APIClient.addSSHKey(sshKey);
    setButtonDisable(false);
    if(res.error) {
      setMessageState({value: 'Could not add SSH key!', class: 'danger'});  
      return
    }
    setMessageState({value: 'Your SSH key has been added!', class: 'success'});
    setSSHKey('');
  };

  return (
    <div className='card mt-2'>
      <div className='card-body'>
        <h5 className='card-title'>Add SSH Key</h5>
        <p className='card-text text-muted'>
          Paste your public SSH key to access repositories.
        </p>
        <p className={`m-0 mb-1 text-${messageState.class}`} id="message">
          <small>{messageState.value}</small>
        </p>
        <div className='row no-gutters'>
          <div className='col-12 col-md-9 mb-2 mb-md-0'>
            <textarea
              className='form-control'
              placeholder='Paste you public key here'
              onChange={onSSHKeyChange}
              value={sshKey}
            />
          </div>
          <div className='col-12 col-md-3 align-self-end'>
            <button
              type='button'
              className='btn btn-success w-100 ml-md-2'
              onClick={onSSHKeyAdd}
              disabled={buttonDisable}
            >
              Add Key
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
