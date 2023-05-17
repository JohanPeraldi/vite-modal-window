import PropTypes from 'prop-types'
import toggleModal from './modalUtils.js'
import './App.css'

function App(props) {
  return (
    <>
      <button onClick={toggleModal}>Open</button>
      <dialog data-modal>
        <p>{props.modalText}</p>
        <button data-close-modal className='btn-close' onClick={toggleModal}>{props.btnCloseText}</button>
      </dialog>
    </>
  )
}

App.propTypes = {
  modalText: PropTypes.string.isRequired,
  btnCloseText: PropTypes.string.isRequired,
}

export default App
