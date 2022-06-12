import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import team from "../data/team"
import { TeamPageContainer } from "../css"
import { StaticImage } from "gatsby-plugin-image"

const TeamPage = () => {
  return (
    <>
      <GatsbySeo title="Team | Carr Electrical" description="Meet the team." />
      <TeamPageContainer>
        <div className="team-hero">
          <h1>Our Team</h1>
          <StaticImage src="../images/team.jpg" alt="The Electrical family" />
        </div>
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
