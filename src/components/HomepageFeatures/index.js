import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Computer Survival Guide",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The High Energy Physics (HEP) work demands intensive computer and coding
        tasks. This guide is designed to help you survive the computer jungle.
      </>
    ),
    link: "/docs",
  },
  {
    title: "Blogs",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Blogs can share your experience and knowledge with others.</>
    ),
    link: "/blog",
  },
  {
    title: "...",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <></>,
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={link}>
            {title}
          </Link>
        </div>
        <br />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
