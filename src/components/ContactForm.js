import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Recaptcha from "react-recaptcha"
import { toast } from "react-toastify"
import emailjs, { init } from "@emailjs/browser"
import { ContactFormContainer } from "../css"

const ContactForm = () => {
  const [isSafeToReset, setIsSafeToReset] = useState(false)
  const [notARobot, setNotARobot] = useState(false)

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

  // https://github.com/appleboy/react-recaptcha
  // specifying your onload callback function
  const callback = function () {
    console.log("recaptcha is ready")
  }
  // specifying verify callback function
  const verifyCallback = function (response) {
    setNotARobot(true)
    console.log(response)
  }
  // specifying expired callback function
  const expiredCallback = function (response) {
    setNotARobot(false)
    console.log(response)
  }

  const onSubmit = async data => {
    try {
      if (!notARobot) {
        toast.error(e => (
          <div>
            <h2>You must pass the reCAPTCHA</h2>
            <p>{e.message}</p>
          </div>
        ))
      } else {
        const { name, email, message } = data
        toast(
          () => (
            <div className="fake-email">
              <h1>Email preview</h1>
              <p>From: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Message: {data.message}</p>
              <span>(tap to close)</span>
            </div>
          ),
          {
            position: "top-center",
            autoClose: false,
            draggable: false,
          }
        )
        init(process.env.EMAILJS_USER_ID)
        const templateParams = {
          name,
          email,
          message,
        }
        await emailjs.send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          templateParams
        )
        setIsSafeToReset(true)
      }
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
        sitekey={process.env.RECAPTCHA_SITE_KEY}
        render="explicit"
        theme="dark"
        onloadCallback={callback}
        verifyCallback={verifyCallback}
        expiredCallback={expiredCallback}
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
