import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import team from "../data/team"
import { TeamPageContainer } from "../css"

const TeamPage = () => {
  return (
    <>
      <GatsbySeo title="Team | Carr Electrical" description="Meet the team." />
      <TeamPageContainer>
        <h1>Our Team</h1>
        <p>
          We are a small company that is able to provide solutions for all your
          electrical installations and service needs (commercial & residential).
          Fully licensed, bonded, and insured.
        </p>
        <ul>
          {team.map(member => (
            <li key={member.name}>
              <div className="member-image">
                {member.image}
                <h2>{member.name}</h2>
                <p>
                  <em>{member.position}</em>
                </p>
              </div>
              <p>{member.bio}</p>
            </li>
          ))}
        </ul>
      </TeamPageContainer>
    </>
  )
}

export default TeamPage
