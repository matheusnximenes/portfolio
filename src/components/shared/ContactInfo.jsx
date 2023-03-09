import React from 'react'

const ContactInfo = () => {
  return (
    <ul className="contact__list">
              <li>
                If you wanna email me:{" "}
                <span className="list__bold"><a href="mailto:mattximca@gmail.com" target='_blank'>mattximca@gmail.com</a></span>
              </li>
              <li>
                If you wanna to hear my voice:{" "}
                <span className="list__bold">+ 1 226 977 0251</span>
              </li>
              <li>
                If you wanna to be influenced:{" "}
                <span className="list__bold"><a href="https://www.instagram.com/matheusnximenes/" target='_blank'>@matheusnximenes</a></span>
              </li>
              <li>
                If you wanna to see me:{" "}
                <span className="list__bold">
                  I' ll be at Huron Lake eating sandwich over the sun.
                </span>
              </li>
            </ul>
  )
}

export default ContactInfo