import * as React from 'react'

import SEO from 'src/utils/seo'
import SiteFrame from 'src/components/SiteFrame'
import * as Styles from './styles'

import articles from './articles.json'

interface TechnicalArticlesProps {
  title: string
  publication: string
  link: string
  date: string
}

const OtherPublications = () => (
  <Styles.OtherPublications>
    <Styles.Category>Other Publications</Styles.Category>

    <Styles.ExternalLink
      href="https://www.academia.edu/26758619/Above-Ground_Pipeline_Monitoring_and_Surveillance_Drone_Reactive_To_Attacks?source=swp_share"
      target="_blank"
    >
      A published paper on monitoring above ground oil pipelines with
      surveillance drones
    </Styles.ExternalLink>

    <Styles.ExternalLink
      href="https://www.sitepoint.com/premium/books/creating-beautiful-charts-using-vue-js-wrappers-for-chart-js"
      target="_blank"
    >
      A book published by Sitepoint that shows how to create charts Using Vue.js
      Wrappers for Chart.js
    </Styles.ExternalLink>
  </Styles.OtherPublications>
)

const TechnicalArticles: React.FC<{ articles: TechnicalArticlesProps[] }> = ({
  articles,
}) => (
  <Styles.TechnicalArticles>
    <Styles.Category>Technical</Styles.Category>

    {articles.map((article, i) => (
      <div key={i}>
        <Styles.ExternalLink href={article.link} target="_blank">
          {article.title}
        </Styles.ExternalLink>
      </div>
    ))}
  </Styles.TechnicalArticles>
)

const Journal = () => (
  <Styles.TechnicalArticles>
    <Styles.InternalLink to="/achterbahn">Achterbahn</Styles.InternalLink>
  </Styles.TechnicalArticles>
)

export const Writing = () => {
  return (
    <SiteFrame>
      <Styles.Root>
        <h1>Writing</h1>
        <p>
          I’ve written a bunch of technical articles and I’m also trying to
          write more about my thoughts and ideas.
        </p>

        <Journal />

        <TechnicalArticles articles={articles} />

        <OtherPublications />
      </Styles.Root>

      <SEO
        title="Journal"
        description="The journal of Yomi Eluwande. A frontend engineer and writer currently living in Berlin."
      />
    </SiteFrame>
  )
}

export default Writing
