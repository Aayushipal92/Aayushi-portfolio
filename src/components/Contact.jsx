import { useState } from 'react'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { personal, getWhatsAppUrl } from '../data/portfolio'

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' }
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [ref] = useInView()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const sendViaMailto = () => {
    const subject = encodeURIComponent(form.subject || 'Portfolio inquiry')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm(initialForm)
    setTimeout(() => setStatus('idle'), 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (!accessKey) {
      sendViaMailto()
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          from_name: personal.name,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setForm(initialForm)
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const whatsappUrl = getWhatsAppUrl()

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__split">
        <div className="contact__info">
          <div className="contact__info-content">
            <h2 className="contact__info-title">Get In Touch</h2>
            <p className="contact__info-subtitle">We&apos;d love to hear from you</p>

            <div className="contact__items">
              <div className="contact__item">
                <span className="contact__icon" aria-hidden="true">
                  <HiOutlineLocationMarker size={22} />
                </span>
                <div>
                  <span className="contact__item-label">Address</span>
                  <p>{personal.location}, India</p>
                </div>
              </div>

              <div className="contact__item">
                <span className="contact__icon" aria-hidden="true">
                  <HiOutlinePhone size={22} />
                </span>
                <div>
                  <span className="contact__item-label">Let&apos;s Talk</span>
                  <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>{personal.phone}</a>
                </div>
              </div>

              <div className="contact__item">
                <span className="contact__icon" aria-hidden="true">
                  <HiOutlineMail size={22} />
                </span>
                <div>
                  <span className="contact__item-label">General Support</span>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
              </div>

              {whatsappUrl && (
                <div className="contact__item">
                  <span className="contact__icon" aria-hidden="true">
                    <FaWhatsapp size={22} />
                  </span>
                  <div>
                    <span className="contact__item-label">WhatsApp</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="contact__form-panel">
          <h2 className="contact__form-title">Contact Us</h2>

          {!accessKey && (
            <p className="contact__form-note">
              Add <code>VITE_WEB3FORMS_ACCESS_KEY</code> in <code>.env</code> for direct email
              delivery. Until then, the form opens your email app.
            </p>
          )}

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              <span>Name*</span>
              <input type="text" required value={form.name} onChange={handleChange('name')} />
            </label>

            <label className="contact__field">
              <span>Email*</span>
              <input type="email" required value={form.email} onChange={handleChange('email')} />
            </label>

            <label className="contact__field">
              <span>Phone*</span>
              <input type="tel" required value={form.phone} onChange={handleChange('phone')} />
            </label>

            <label className="contact__field">
              <span>Subject*</span>
              <input type="text" required value={form.subject} onChange={handleChange('subject')} />
            </label>

            <label className="contact__field">
              <span>Message*</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
              />
            </label>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' && 'Sending…'}
              {status === 'success' && 'Message Sent!'}
              {status === 'error' && 'Try Again'}
              {status === 'idle' && 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
