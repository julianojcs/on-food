import type { NextPage } from 'next'
import Head from 'next/head'
import { Character, PageTemplate, Search } from '@/components'
import Styles from '../styles/internals.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageTemplate>
        <div className={Styles.content}>
          <h1>Encontre opções de Delivery próximos a você.</h1>
          <Search />
          <h2>
            Descubra seu novo Delivery favorito. Milhares de opções a um click.
          </h2>
          <Character />
        </div>
      </PageTemplate>
    </>
  )
}

export default Home
