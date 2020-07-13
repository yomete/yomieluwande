import * as React from "react"

import SiteFrame from "src/components/SiteFrame"
import * as Styles from "./styles"

export const Projects = () => {
  return (
    <SiteFrame>
      <Styles.Root>
        <h1>Projects</h1>

        <Styles.Projects>
          <Styles.Title>Govote</Styles.Title>

          <p>
            A fun take on encouraging young voters to vote in the general 2019
            Nigerian elections. The web app helps first time voters find the
            nearest location to register for the general elections.
            <br />
            <br />
            The app was designed by me and built with Preact, and it's also open
            sourced on GitHub.
            <br />
            <br />
            Link -{" "}
            <a href="https://govote.org.ng" target="_blank">
              https://govote.org.ng
            </a>
            <br />
            GitHub -{" "}
            <a href="https://github.com/ErxiaHQ/govote-app" target="_blank">
              https://github.com/ErxiaHQ/govote-app
            </a>
          </p>
        </Styles.Projects>

        <Styles.Projects>
          <Styles.Title>Worklogs</Styles.Title>

          <p>
            A tool that helps users track the working hours for collaborators in
            remote teams. Users can post clock ins directly to Slack and alert
            teammates when active. We've had over 7000 logs posted from over a
            100+ teams.
            <br />
            <br />
            The app was designed by me and built with Vue.js.
            <br />
            <br />
            Link -{" "}
            <a href="https://worklogs.co" target="_blank">
              https://worklogs.co
            </a>
          </p>
        </Styles.Projects>

        <Styles.Projects>
          <Styles.Title>Selar</Styles.Title>

          <p>
            Selar is a platform that allows African businesses or individuals
            make sales and collect payments online easily. It enables social
            commerce as all you have to do create a profile, add a product and
            you get a unique link that you can send to your customers, in which
            you can easily get paid.
            <br />
            <br />
            It also has features like inventory management, affliate marketing,
            CRM e.t.c
            <br />
            <br />
            Link -{" "}
            <a href="https://selar.co" target="_blank">
              https://selar.co
            </a>
          </p>
        </Styles.Projects>

        <Styles.FooterText>
          <span>More to come...</span>😉
        </Styles.FooterText>
      </Styles.Root>
    </SiteFrame>
  )
}

export default Projects
