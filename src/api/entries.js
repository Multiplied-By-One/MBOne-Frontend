import client, { createEntity, deleteEntity, updateEntity } from "./client";

/**
 * The root API endpoint 
 */
const ENTRIES_ENDPOINT = '/entries'

export const getEntriesFetcher = () => {
  return [ENTRIES_ENDPOINT, async (url, journalId) => {
    const response = await client.get(ENTRIES_ENDPOINT + "/?journalId=" + journalId);
    return response.data;
  }]
}

/**
 * Creates 
 */
export const createEntries = async ({ id, journalId, date, year, title, content }) => {
  return createEntity(ENTRIES_ENDPOINT, { id, journalId, date, year, title, content })
}

/**
 * Updates 
 */
export const updateEntries = async ({ id, journalId, date, year, title, content }) => {
  return updateEntity(ENTRIES_ENDPOINT, { id, journalId, date, year, title, content })
}

/**
 * Deletes 
 */
export const deleteEntries = async (id) => {
  return deleteEntity(ENTRIES_ENDPOINT, id)
}