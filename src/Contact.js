import { useRef } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_ou6hqut',
      'template_09h6ogv',
      form.current,
      'LmwU2eYIK78064eEP'
    )
    emailjs
      .sendForm('gmail', 'Paul_yashouh', form.current, 'user_LmwU2eYIK78064eEP')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label htmlFor='name' className='form-control'>
        Name:
      </label>
      <input type='text' name='user_name' />
      <label htmlFor='email' className='form-control'>
        Email:
      </label>
      <input type='text' name='user_email' />
      <label htmlFor='msg' className='form-control'>
        Message:
      </label>
      <textarea name='message' id='' cols='30' rows={10}></textarea>
      <div>
        <button className='btn' type='submit'>
          Send
        </button>
      </div>
    </form>
  )
}
export default Contact
