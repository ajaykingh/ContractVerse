import React from 'react'
import { Formik } from 'formik'
import './contactform.css'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
  {/* Button trigger modal */}
  {/* <button
    type="button"
    className="btn btn-primary"
    data-mdb-toggle="modal"
    data-mdb-target="#staticBackdrop4"
  >
    Launch modal contact form
  </button> */}
  {/* Modal */}
  <div
    className="modal fade"
    id="staticBackdrop4"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel4"
    aria-hidden="true"
  >
    <div className="modal-dialog d-flex justify-content-center">
      <div className="modal-content w-75">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel4">
            Write to us
          </h5>
          <button
            type="button"
            className="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body p-4">
          <form>
            {/* Name input */}
            <div className="form-outline mb-4">
              <input type="text" id="name4" className="form-control" />
              <label className="form-label" htmlFor="name4">
                Name
              </label>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="email4" className="form-control" />
              <label className="form-label" htmlFor="email4">
                Email address
              </label>
            </div>
            {/* textarea input */}
            <div className="form-outline mb-4">
              <textarea
                id="textarea4"
                rows={4}
                className="form-control"
                defaultValue={""}
              />
              <label className="form-label" htmlFor="textarea4">
                Your message
              </label>
            </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue=""
                id="checkbox4"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="checkbox4">
                Send me a copy of this message
              </label>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
</>

  );
}
export default ContactForm;