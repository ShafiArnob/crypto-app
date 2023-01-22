import Modal from 'react-modal'
import './Portfolio.css'
import {IoMdClose} from 'react-icons/io'
const AddAssetModal = ({openModal, setopenModal}) => {
  return (
    <Modal className="Modal" overlayClassName="Overlay" isOpen={openModal} onRequestClose ={()=>setopenModal(!openModal)} ariaHideApp={false}>
      {/* Modal Header */}
      <div className='modal-header'>
        <h2>Add Assets</h2>
        <div className='modal-close' onClick={()=>setopenModal(!openModal)}><IoMdClose/></div>
      </div>
      {/*Modal Body */}
      <div className='modal-body'>
        
      </div>
    </Modal>
  )
}

export default AddAssetModal