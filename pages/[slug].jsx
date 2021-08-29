import React from 'react'
import Page from '@components/page'
import Image from 'next/image'
import styles from '@styles/pokemon.module.css'

const Pokemon = (props) => {
    const { id, name, abilities, base_experience, types, height, weight } = props
    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(('00' + id)).slice(-3)}.png`

    return (
        <Page title={name} description={`${name} pokemon`} image={imgSrc}>
            <div className={styles.main}>
                <Image src={imgSrc}
                    width="215px"
                    height="215px"
                    alt={`${name}`}
                />
                <h1>{name}</h1>
                <h2>Abilities</h2>

                {abilities.map((ability) => (
                    <p key={ability.ability.name}>
                        {ability.ability.name}
                    </p>
                ))}

                <h2>Base experience</h2>
                <p>{base_experience}</p>

                <h2>Height</h2>
                <p>{height}</p>

                <h2>Weight</h2>
                <p>{weight}</p>


                <h2>Types</h2>
                {types.map((type) => (
                    <p key={type.type.name}>
                        {type.type.name}
                    </p>
                ))}


            </div>
        </Page>
    )
}


export async function getServerSideProps(context) {
    const { slug } = context.query

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
    const data = await res.json()


    return {
        props: data,
    }
}

export default Pokemon
