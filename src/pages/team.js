import React, { useEffect } from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import team from "../data/team"
import { TeamPageContainer } from "../css"
import { StaticImage } from "gatsby-plugin-image"

const TeamPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [])
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
            <div key={member.name} className="member-card">
              <li>
                <div className="under-path" />
                <div className="path" />
                <div className="member-image">
                  {member.image}
                  <div className="member-image__text">
                    <h2>{member.name}</h2>
                    <p>
                      <em>{member.position}</em>
                    </p>
                  </div>
                </div>
                <p className="bio">{member.bio}</p>
              </li>
            </div>
          ))}
        </ul>
      </TeamPageContainer>
    </>
  )
}

export default TeamPage
