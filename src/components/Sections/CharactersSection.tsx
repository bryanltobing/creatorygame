import React, { useState } from 'react'
import useSWR from 'swr'

import Button from 'components/base/Button'
import EmptyState from 'components/EmptyState'

import { getCharacterText, getCurrency } from 'utils/helpers'
import { characterCategories, CharacterCategoriesType } from 'data/character'
import { useCharacterStore } from 'store/CharacterStore'
import useDebounce from 'hooks/useDebounce'

const CharactersSection = () => {
  const { query } = useCharacterStore()

  const debouncedQuery = useDebounce(query, 500)

  const [categorySelected, setCategorySelected] =
    useState<CharacterCategoriesType>('all')

  const { data: characters, error } = useSWR<Character[]>(
    `/characters?category=${categorySelected}${
      debouncedQuery && `&query=${debouncedQuery}`
    }`
  )
  const isLoading = !characters && !error

  return (
    <section>
      <div className="primary-container py-12 space-y-4">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-lightMuted text-center">
          {characterCategories.map((char, index) => {
            const isActive = char === categorySelected
            const character = char.toUpperCase()

            if (isActive) {
              return (
                <li
                  className="backgroundGradientPrimary w-full shadow-md p-2 rounded-md cursor-pointer text-lightActive"
                  key={index}
                  onClick={() => {
                    setCategorySelected(char)
                  }}
                >
                  {character}
                </li>
              )
            }
            return (
              <li
                className="w-full bg-gradient-to-br from-darkBlue-900 to-transparent shadow-md p-2 rounded-md cursor-pointer"
                key={index}
                onClick={() => {
                  setCategorySelected(char)
                }}
              >
                {character}
              </li>
            )
          })}
        </ul>

        {isLoading && (
          <div className="py-8">
            <div className="flex justify-center items-center">
              Fetching Data....
            </div>
          </div>
        )}

        {characters && characters?.length < 1 && (
          <div className="w-full flex justify-center">
            <EmptyState />
          </div>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {characters?.map((char) => {
            return (
              <li
                key={char.id}
                className="p-4 rounded-md bg-gradient-to-br from-darkBlue-900 to-transparent shadow-md space-y-3 flex flex-col"
              >
                <img
                  className="w-full max-h-96 object-contain flex-1"
                  src={char.pictureUrl}
                />
                <div className="space-y-3">
                  <p className="text-lightMuted">
                    @{getCharacterText(char.characterCode)}
                  </p>
                  <div className="flex justify-between">
                    <h3>{char.name}</h3>
                    <span className="backgroundGradientPrimary text-transparent bg-clip-text">
                      {getCurrency(char.wealth)}
                    </span>
                  </div>
                  <Button className="w-full">Details</Button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default CharactersSection
