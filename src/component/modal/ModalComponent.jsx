import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content:{
            width: "580px",
            height: "320px",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            position: "absolute",
            top: "22%",
            left: "27%",
            // transform: "translate(-50 %, -50 %)",
            borderRadius: "20px",
            boxShadow:'0px 100px 80px rgba(108, 73, 172, 0.07), 0px 41.7776px 33.4221px rgba(108, 73, 172, 0.0503198), 0px 22.3363px 17.869px rgba(108, 73, 172, 0.0417275), 0px 12.5216px 10.0172px rgba(108, 73, 172, 0.035), 0px 6.6501px 5.32008px rgba(108, 73, 172, 0.0282725), 0px 2.76726px 2.21381px rgba(108, 73, 172, 0.0196802)'
            
          }
        }
        }
      >
        <h1>hi there</h1>
      </Modal>
    </div >
  )
}

export default ModalComponent