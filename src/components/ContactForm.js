import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Recaptcha from "react-recaptcha"
import { toast } from "react-toastify"
import emailjs, { init } from "@emailjs/browser"
import { ContactFormContainer } from "../css"

const ContactForm = () => {
  const [isSafeToReset, setIsSafeToReset] = useState(false)
  const [notARobot, setNotARobot] = useState(false)

  // Initiate react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // reset the form on submission
  useEffect(() => {
    if (isSafeToReset) {
      reset()
      setIsSafeToReset(false)
    } else return
    // eslint-disable-next-line
  }, [isSafeToReset])

  // Contact Form reCAPTCHA statuses
  // https://github.com/appleboy/react-recaptcha

  // specifying your onload callback function
  // Runs when the page has connected
  // to the recaptcha services
  const callback = function () {
    console.log("recaptcha is ready")
  }
  // specifying verify callback function
  // Runs when the recaptcha has been completed
  const verifyCallback = function (response) {
    setNotARobot(true)
  }
  // specifying expired callback function
  // Runs after a set time. Forces another completion
  const expiredCallback = function (response) {
    setNotARobot(false)
  }

  // What happens when we submit the form?
  const onSubmit = async data => {
    try {
      // Dont let the form submit if the recaptcha
      // hasn't been completed
      if (!notARobot) {
        toast.error(e => (
          <div>
            <h2>You must pass the reCAPTCHA</h2>
            <p>{e.message}</p>
          </div>
        ))
      } else {
        const { name, email, message } = data
        init(`${process.env.GATSBY_EMAILJS_PUBLIC_KEY}`)
        // These values can be used in the email template settings
        const templateParams = {
          name,
          email,
          message,
        }
        // Send the email
        await emailjs.send(
          `${process.env.GATSBY_EMAILJS_SERVICE_ID}`,
          `${process.env.GATSBY_EMAILJS_TEMPLATE_ID}`,
          templateParams,
          `${process.env.GATSBY_EMAILJS_PUBLIC_KEY}`
        )
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
            autoClose: false,
            position: "top-right",
          }
        )
        toast.success("Success!", { autoClose: 2000, position: "top-right" })
        setIsSafeToReset(true)
      }
    } catch (e) {
      console.log(e.message)
      toast.error(e.message)
    }
  }

  return (
    <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
      <h3>Send us an Email</h3>
      <label htmlFor="name">
        <span>*First and Last Name</span>
        <input
          id="name"
          name="name"
          placeholder="Bruce Wayne"
          type="text"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name?.type === "required" && (
          <span>Please provide your name.</span>
        )}
        {errors.name?.type === "minLength" && (
          <span>Minimum length is 3 characters</span>
        )}
      </label>
      <label htmlFor="email">
        <span>*Email</span>
        <input
          id="email"
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
          id="message"
          name="message"
          placeholder="Tell me about the project you would like completed."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span>Please tell me about the service you require.</span>
        )}
      </label>

      <Recaptcha
        sitekey={`${process.env.GATSBY_RECAPTCHA_SITE_KEY}`}
        render="explicit"
        theme="dark"
        onloadCallback={callback}
        verifyCallback={verifyCallback}
        expiredCallback={expiredCallback}
      />

      <input type="submit" value="Send Message" className="request-quote-btn" />
    </ContactFormContainer>
  )
}

export default ContactForm
