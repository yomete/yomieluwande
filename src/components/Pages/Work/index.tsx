import * as React from 'react'

import SEO from 'src/utils/seo'
import SiteFrame from 'src/components/SiteFrame'
import * as Styles from './styles'

export const Work = () => {
  return (
    <SiteFrame>
      <Styles.Root>
        <h1>Yomi Eluwande</h1>

        <Styles.Email>
          <a href="mailto:yomi.eluwande@gmail.com">yomi.eluwande@gmail.com</a>
        </Styles.Email>

        <Styles.Experiences>
          <Styles.Company>Polar Signals</Styles.Company>
          <Styles.Title>
            Senior Software Engineer <span>(Dec 2021 - Present)</span>
          </Styles.Title>
          <p>
            Working on all things frontend at Polar Signals; a continuous
            profiling tool for applications and infrastructure and creators of
            open source product, parca.dev
            <br />
            <br />
            Technologies: Next.js, React, TypeScript, gRPC-web.
          </p>
        </Styles.Experiences>

        <Styles.Experiences>
          <Styles.Company>Clue</Styles.Company>
          <Styles.Title>
            Frontend Engineer <span>(May 2019 - October 2021)</span>
          </Styles.Title>
          <p>
            Worked on helloclue.com; a Gatsby site which is an encyclopedia for
            women’s health. Responsible for adding/maintaining new components to
            serve content from a Contentful GraphQL server. Built a Jenkins CI
            process that uses Lighthouse to check if a PR build
            increases/decreases page speed and performance. I am also the
            Chapter lead for the Web team since Sept. 2020.
            <br />
            <br />
            Technologies: Gatsby, React, TypeScript, GraphQL, Docker.
          </p>
        </Styles.Experiences>

        <Styles.Experiences>
          <Styles.Company>Flutterwave</Styles.Company>
          <Styles.Title>
            Frontend Engineer <span>(Jan 2018 - May 2019)</span>
          </Styles.Title>
          <p>
            Built the V2 version of the payment checkout form which had
            improvements such as faster loading time (20x) and more payment
            channels. Worked on the merchants dashboard and was responsible for
            adding key features such as business analytics which provided an
            holistic overview for merchants. I also worked on a previous version
            of getbarter.co that was solely for virtual cards and corporates.
          </p>
        </Styles.Experiences>

        <Styles.Experiences>
          <Styles.Company>Anakle</Styles.Company>
          <Styles.Title>
            Web Developer <span>(May 2017 - Dec 2017)</span>
          </Styles.Title>
          <p>
            Worked on multiple landing pages for various clients. Built a
            lifestyle and youth centric magazine/blog for a top banking client.
            I also helped build a mobile app (using Ionic) for a FinTech Client.
          </p>
        </Styles.Experiences>

        <Styles.Experiences>
          <Styles.Company>Education</Styles.Company>
          <Styles.Title>
            Covenant University, Nigeria <span>B.Eng Computer Engineering</span>
          </Styles.Title>
        </Styles.Experiences>
      </Styles.Root>

      <SEO title="Work" />
    </SiteFrame>
  )
}

export default Work
