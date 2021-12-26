import axios from 'axios'

export const createCharacter = (character: Omit<Character, 'id'>) => {
  return axios.post('/characters', character)
}
