import React from 'react'

const ContactForm = () => {
  return (
    <form className="contact__form">
              <div className="form__row">
                <div className="form__column">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form__column">
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="form__row">
                <div className="form__column">
                  <label htmlFor="">Subject</label>
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form__column">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Email" />
                </div>
              </div>
              <div className="form__row">
                <div className="form__column">
                  <label htmlFor="">Message</label>
                  <textarea rows={4} placeholder="Message" />
                </div>
              </div>
              <button className="form__button" type="submit">
                Message
              </button>
            </form>
  )
}

export default ContactForm