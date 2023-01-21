import React, { useState } from 'react'
import Modal from 'react-modal'

const ReportModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [report, setReport] = useState({})

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleChange = (event) => {
    setReport({
      ...report,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Do something with the report, like sending it to an API
    setReport({})
    closeModal()
  }

  return (
    <>
      <button onClick={openModal}>Report Waste Management Issue</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <h2>Report a Waste Management Issue</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <textarea name="description" onChange={handleChange} value={report.description} />
          </label>
          <label>
            Location:
            <input type="text" name="location" onChange={handleChange} value={report.location} />
          </label>
          <label>
            Image:
            <input type="file" name="image" onChange={handleChange} />
          </label>
          <button type="submit">
            Submit Report
          </button>
        </form>
      </Modal>
    </>
  )
}

export default ReportModal
