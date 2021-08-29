import React, { useState } from 'react'
import Page from '@components/page'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import { useQuery } from 'react-query'
import { ArrowRight, ArrowLeft } from '@components/icons'
import Link from 'next/link'


const Home = (props) => {
  const initialPokemons = props.data
  const [page, setPage] = useState(0)
  const [pokeImage, setPokeImage] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  const pokemonReq = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
    return res.json()
  }


  const { data, status, refetch } = useQuery('req', pokemonReq, {
    initialData: initialPokemons,
    staleTime: false,
    cachetime: false,
  })

  const decrement = async (e) => {
    e.preventDefault()
    try {
      if (page > 0) {
        setPokeImage(Number(pokeImage - 2))
        setPage(page - 19)
        setPageCount(pageCount - 1)
      }
      refetch()
    } catch (error) {
      console.error(error)
    }
  }

  const increment = async (e) => {
    e.preventDefault()
    try {
      setPage(Number(page + 19))
      setPokeImage(Number(pokeImage + 2))
      setPageCount(pageCount + 1)
      refetch()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Page title="Home" description="PokeDex Home Page">
      <div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.menu}>
              <button
                type="button"
                aria-label="Previous Page"
                onClick={decrement}
                disabled={page ===  0}
              >
                <span aria-hidden="true" >
                  <ArrowLeft />
                </span>
              </button>
              <button
                type="button"
                aria-label="Next Page"
                onClick={increment}

              >
                <span aria-hidden="true" >
                  <ArrowRight />
                </span>
              </button>
            </div>
          </div>

          <main className={styles.main}>
            <h1 className={styles.title}>
              PokèDex
            </h1>

            <p className={styles.description}>
              page: {pageCount}
            </p>

            <div className={styles.grid}>
              {status === 'success' && data.results.map((pokemon, i) => (
                <Link href={`/${pokemon.name}`} key={pokemon.name}>
                  <a className={styles.card}  >
                    <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(('00' + pokeImage + ++i)).slice(-3)}.png`}
                      width="215px"
                      height="215px"
                      alt={`${pokemon.name}`}
                    />
                    <h2>{pokemon.name} &rarr;</h2>
                  </a>
                </Link>
              ))}
            </div>
          </main>

          <footer className={styles.footer}>
            <p>
              Powered by{' '}
              <a
                href="https://xis.li"
                target="_blank"
                rel="noopener noreferrer"
              >
                ξ
              </a>
            </p>
          </footer>
        </div>
      </div>
    </Page>
  );
}

export default Home;

export const getStaticProps = async () => {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  const pokeMons = await res.json()

  return {
    props: {
      data: pokeMons
    }
  }
}
