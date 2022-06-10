import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Recaptcha from "react-recaptcha"
import { toast } from "react-toastify"
import { ContactFormContainer } from "../css"

// https://github.com/appleboy/react-recaptcha
// specifying your onload callback function
var callback = function () {
  console.log("recaptcha is ready")
}

// specifying verify callback function
var verifyCallback = function (response) {
  console.log(response)
}

const ContactForm = () => {
  const [isSafeToReset, setIsSafeToReset] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (isSafeToReset) {
      reset()
      setIsSafeToReset(false)
    } else return
    // eslint-disable-next-line
  }, [isSafeToReset])

  const onSubmit = data => {
    try {
      console.log(data)
      toast(
        () => (
          <div className="fake-email">
            <h1>Email preview</h1>
            <p>From: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Message: {data.message}</p>
            <span>(tap to close)</span>
            <span>(no email has actually been sent yet)</span>
          </div>
        ),
        {
          position: "top-center",
          autoClose: false,
          draggable: false,
        }
      )
      setIsSafeToReset(true)
    } catch (e) {
      console.log(e.message)
      toast.error(e.message)
    }
  }

  return (
    <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <span>*Full Name</span>
        <input
          name="name"
          placeholder="Bruce Wayne"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Please provide your name.</span>}
      </label>
      <label htmlFor="email">
        <span>*Email</span>
        <input
          name="email"
          placeholder="your@email.com"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Your email is required.</span>}
      </label>
      <label htmlFor="message">
        <span>*Message</span>
        <textarea
          name="message"
          placeholder="Tell me about the project you would like completed."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span>Please tell me about the service you require.</span>
        )}
      </label>

      <Recaptcha
        sitekey="6LeSdFsgAAAAAC-FL5e0t7w0nXNZs-CgcCga56if"
        render="explicit"
        theme="dark"
        onloadCallback={callback}
        verifyCallback={verifyCallback}
      />

      <input
        type="submit"
        value="Request Quote"
        className="request-quote-btn"
      />
    </ContactFormContainer>
  )
}

export default ContactForm
