import client, {createEntity, deleteEntity, updateEntity} from "./client";

/**
 * Entity representation
 * {
 *      "id": 1,
 *      "age": "25",
 *      "name": "Maggie",
 *      "image": "https://i.pinimg.com/236x/35/7c/9e/357c9e6f9b84b147dc0316bc995dea57.jpg",
 *      "gender": "non-binary"
 * }
 */

/**
 * The root API endpoint for headmates
 */
const HEAD_MATE_ENDPOINT = '/headmates'

export const getHeadMateFetcher = () => {
  return [HEAD_MATE_ENDPOINT, async () => { 
    const response = await client.get(HEAD_MATE_ENDPOINT)
    return response.data
  }]
}

/**
 * Creates a headmate
 */
export const createHeadMate = async ({name, age, gender, image}) => {
  return createEntity(HEAD_MATE_ENDPOINT, {name, age, gender, image})
}

/**
 * Updates a headmate
 */
export const updateHeadMate = async ({id, name, age, gender, image}) => {
  return updateEntity(HEAD_MATE_ENDPOINT, {id, name, age, gender, image})
}

/**
 * Deletes a headmate
 */
export const deleteHeadMate = async (id) => {
  return deleteEntity(HEAD_MATE_ENDPOINT, id)
}