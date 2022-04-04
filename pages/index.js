import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import cn from "classnames";
import Alert from "./alert";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>=
      </Head>
      <Alert type="error" />
      <Alert type="success" />

      <section className={utilStyles.headingMd}>
        <p>
          I'm The L D O, a developer first, an otaku before that, then a crypto
          enthusiast. While maintaining being a trader (Meme Trader)
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="http://nextjs.org/learn">Our Next.js Tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h3 className={utilStyles.headingLg}> Blog</h3>
        <ul className={utilStyles.list}>
          {data.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const data = getSortedPostsData();

  return {
    props: { data },
  };
}
