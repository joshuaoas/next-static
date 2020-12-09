import Head from 'next/head'
import Layout from '../components/Layout'
import Pagehead from '../components/PageHead'


const About = () => (

    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <main>
        <Pagehead title="About"/>
      </main>
    </Layout>
);

export default About;