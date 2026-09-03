import { useEffect, useState } from 'react'
import { CheckCircle2, Sparkles, X } from 'lucide-react'
import './JoinModal.scss'

const interests = [
  'Design & Art',
  'Gaming',
  'Fitness & Health',
  'Music & Audio',
  'Tech & Startups',
  'Photography',
  'Writing & Books',
  'Food & Cooking',
]

const initialForm = {
  role: 'Member',
  name: '',
  email: '',
  interests: [],
}

export default function JoinModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    function handleJoin(event) {
      const trigger = event.target.closest('[data-join-orbit]')

      if (!trigger) {
        return
      }

      event.preventDefault()
      setOpen(true)
      setSubmitted(false)
    }

    document.addEventListener('click', handleJoin)

    return () => {
      document.removeEventListener('click', handleJoin)
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('join-modal-open', open)

    return () => {
      document.body.classList.remove('join-modal-open')
    }
  }, [open])

  function handleChange(event) {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function toggleInterest(interest) {
    setForm((current) => {
      const exists = current.interests.includes(interest)

      return {
        ...current,
        interests: exists
          ? current.interests.filter((item) => item !== interest)
          : [...current.interests, interest],
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim()) {
      return
    }

    setSubmitted(true)
  }

  function closeModal() {
    setOpen(false)

    window.setTimeout(() => {
      setSubmitted(false)
      setForm(initialForm)
    }, 200)
  }

  if (!open) {
    return null
  }

  return (
    <div className="join-modal" role="presentation">
      <button
        type="button"
        className="join-modal__backdrop"
        aria-label="Close join dialog"
        onClick={closeModal}
      />

      <div
        className="join-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
      >
        <button
          type="button"
          className="join-modal__close"
          aria-label="Close dialog"
          onClick={closeModal}
        >
          <X size={20} strokeWidth={1.8} />
        </button>

        {submitted ? (
          <div className="join-modal__success">
            <span className="join-modal__success-icon">
              <CheckCircle2 size={28} strokeWidth={1.8} />
            </span>

            <span className="join-modal__eyebrow">
              Welcome to Orbit
            </span>

            <h2 id="join-modal-title">
              You&apos;re ready to find your people.
            </h2>

            <p>
              Your profile details are ready for the next step. In a
              production version, this form can connect directly to the
              community platform.
            </p>

            <button
              type="button"
              className="join-modal__primary"
              onClick={closeModal}
            >
              Explore Orbit
            </button>
          </div>
        ) : (
          <>
            <div className="join-modal__head">
              <span className="join-modal__icon">
                <Sparkles size={18} strokeWidth={1.8} />
              </span>

              <span className="join-modal__eyebrow">
                Join Orbit
              </span>

              <h2 id="join-modal-title">
                Find your people.
              </h2>

              <p>
                Create your free Orbit profile and start discovering
                communities that match your interests.
              </p>
            </div>

            <form
              className="join-modal__form"
              onSubmit={handleSubmit}
            >
              <div className="join-modal__roles">
                {['Member', 'Creator', 'Organizer'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={
                      form.role === role
                        ? 'join-modal__role join-modal__role--active'
                        : 'join-modal__role'
                    }
                    onClick={() =>
                      setForm((current) => ({
                        ...current,
                        role,
                      }))
                    }
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div className="join-modal__row">
                <label className="join-modal__field">
                  <span>Full name</span>

                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="join-modal__field">
                  <span>Email address</span>

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="join-modal__field">
                <span>What are you into?</span>

                <div className="join-modal__interests">
                  {interests.map((interest) => {
                    const active = form.interests.includes(interest)

                    return (
                      <button
                        key={interest}
                        type="button"
                        className={
                          active
                            ? 'join-modal__interest join-modal__interest--active'
                            : 'join-modal__interest'
                        }
                        onClick={() => toggleInterest(interest)}
                      >
                        {interest}
                      </button>
                    )
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="join-modal__primary"
              >
                Join Orbit — it&apos;s free
              </button>

              <p className="join-modal__note">
                Free to join. Choose your communities, meet people,
                and start participating.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}