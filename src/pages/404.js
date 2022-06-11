import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const NotFoundPage = () => (
  <>
    <GatsbySeo
      title="oops! | Carr Electrical"
      description="This route doesn't exist..."
    />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
