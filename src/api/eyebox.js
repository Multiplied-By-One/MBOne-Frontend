import client, { createEntity, deleteEntity, updateEntity } from "./client";

/**
 * The root API endpoint 
 */
const ENTRIES_ENDPOINT = '/eyebox'

export const getEyeBoxFetcher = () => {
  return [ENTRIES_ENDPOINT, async (url, receiverId) => {
    const response = await client.get(ENTRIES_ENDPOINT + "/?eyeAccountListId=" + receiverId);
    return response.data;
  }]
}

/**
 * Creates 
 */
export const createEyeBox = async ({ id, senderId, eyeAccountListId, subjectLine, time, messageBody, readStatu }) => {
  return createEntity(ENTRIES_ENDPOINT, { id, senderId, eyeAccountListId, subjectLine, time, messageBody, readStatu })
}

/**
 * Updates 
 */
export const updateEyeBox = async ({ id, senderId, eyeAccountListId, subjectLine, time, messageBody, readStatu }) => {
  return updateEntity(ENTRIES_ENDPOINT, { id, senderId, eyeAccountListId, subjectLine, time, messageBody, readStatu })
}

/**
 * Deletes 
 */
export const deleteEyeBox = async (id) => {
  return deleteEntity(ENTRIES_ENDPOINT, id)
}