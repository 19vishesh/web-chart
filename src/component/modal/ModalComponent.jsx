import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalComponent = ({ value }) => {
  console.log(value);
  const [modalIsOpen, setModalIsOpen] = useState({value})
  return (
    <div>
      {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            width: "50%",
            height: "60%",
            position: "absolute",
            top: "18%",
            left: "24%",
            borderRadius: "20px",
            boxShadow: '0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)'
          }
        }}
      >
        <div className="container">
          hi ther
        </div>
      </Modal>
    </div >
  )
}

export default ModalComponent