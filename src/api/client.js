// import axios and create pre-configured version of axios
import axios from 'axios'
import { mutate } from 'swr';

const client = axios.create({
  baseURL: 'http://localhost:3000'
})

export default client

/**
 * @typedef PayloadWithId
 * @type {object}
 * @property {string} id - The ID of the payload
 */

/**
 * Creates an entity associated with the current output
 * @param {string} endpoint the endpoint that handles the entity
 * @param {object} payload the payload for the object
 * @param {object} cfg The axios config object
 * @returns {Array} A list containing the response and error respectivly
 */
export async function createEntity(endpoint, payload, cfg = null) {
  let res = null
  let error = null

  try {
    res = await client.post(endpoint, payload, cfg)
  } catch (e) {
    error = e
  }

  if (!error) {
    // Dispatch mutate so we know to update the associated endpoint SWR cache
    mutate(endpoint, (current) => {
      return [
        ...current,
        { id: -1, ...payload }
      ]
    })
  }

  return [res, error]
}

/**
 * Update an entity based on a given endpoint
 * @param {String} endpoint 
 * @param {PayloadWithId} payload The payload to update
 * @param {object} cfg The axios config object
 * @returns {Array}
 */
export async function updateEntity(endpoint, payload, cfg = null) {
  if (!payload.hasOwnProperty('id')) {
    throw new Error("Cannot update entity for endpoint 'endpoint' an id MUST be supplied")
  }

  let res = null
  let error = null

  try {
    res = await client.put(`${endpoint}/${payload.id}`,)
  } catch (e) {
    error = e
  }

  if (!error) {
    // Dispatch and mutate exsisting state with what we posted
    mutate(endpoint, (current) => {
      return current.map(item => item.id === payload.id ? payload : item)
    })

    mutate(`${endpoint}/${payload.id}`, payload)
  }

  return [res, error]
}

/**
 * Deletes an entity based on a given endpoint
 * @param {string} endpoint The endpoint to delete from
 * @param {number} id The entity to delete  
 * @returns {Array} in the format [response, error]
 */
export async function deleteEntity(endpoint, id) {
  let res = null
  let error = null
  
  try{
    res = await client.delete(`${endpoint}/${id}`)
  } catch(e) {
    error = e
  }
  
  if(!error){
    // Dispatch mutate so we know to update
    mutate(endpoint, (current) => {
      return current.filter(current => current.id !== id)
    })
    mutate(`${endpoint}/${id}`, {})
  }
  
  return [res, error]
}