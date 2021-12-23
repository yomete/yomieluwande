import { Link } from 'gatsby'
import * as React from 'react'

import SEO from 'src/utils/seo'
import SiteFrame from 'src/components/SiteFrame'
import * as Styles from './styles'

export const Homepage = () => {
  return (
    <SiteFrame>
      <Styles.Root>
        <h1>Hello, I’m Yomi Eluwande</h1>

        <p>I'm a frontend engineer living in Berlin.</p>

        <p>
          I'm currently at{' '}
          <Styles.PolarSignals>Polar Signals</Styles.PolarSignals>; a continous
          profiling tool for applications and infrastructure.
        </p>

        <p>
          Previously, I worked at <Styles.Clue>Clue</Styles.Clue>; a period
          tracking app and{' '}
          <Styles.Flutterwave>
            Flutterwave
          </Styles.Flutterwave>
          , where I built and maintained the payment checkout form and the
          merchant dashboard.
        </p>

        <p>
          If you wanna chat about Attack on Titans, The Office, or literally any
          time travel movie, or you have any interesting project you wanna
          discuss, you can write me{' '}
          <a href="mailto:yomi@eluwande@gmail.com">here</a>.
        </p>

        <ul>
          <li>
            <Link to="/writing">Writing</Link>
          </li>
          <li>
            <a href="https://twitter.com/yomieluwande" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yomieluwande/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/yomete" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <Link to="/work">Resume</Link>
          </li>
        </ul>
      </Styles.Root>

      <SEO
        title="Hello 👋🏾"
        description="A frontend engineer and writer currently living in Berlin."
      />
    </SiteFrame>
  )
}

export default Homepage
