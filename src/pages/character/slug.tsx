import React from 'react'
import { useParams } from 'react-router'
import useSWR from 'swr'

import { getCharacterText, getCurrency } from 'utils/helpers'
import logo from 'assets/images/logo.png'

const CharacterDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>()

  const { data } = useSWR<Character>(`/characters/${slug}`)

  return (
    <div>
      <section>
        <div className="primary-container py-12">
          <div className="flex flex-col sm:flex-row justify-evenly gap-8">
            <div className="w-full">
              <img className="mx-auto" src={data?.pictureUrl || logo} />
            </div>

            <div className="rounded-lg bg-gradient-to-br from-darkBlue-900 to-transparent w-full p-8 h-fit">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{data?.name}</h1>
                {data?.characterCode && (
                  <p className="text-lightMuted">
                    @{getCharacterText(data?.characterCode)}
                  </p>
                )}
                <h4 className="backgroundGradientPrimary text-transparent bg-clip-text text-xl font-bold">
                  {getCurrency(data?.wealth || 0)}
                </h4>

                <p>Power: {data?.power}</p>

                <p>
                  Categories:{' '}
                  <span className="uppercase">
                    {data?.categories.join(',')}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CharacterDetailsPage
