import client, { createEntity, deleteEntity, updateEntity } from "./client";

const JOURNAL_ENDPOINT = '/journals'

export const getJournalFetcher = () => {
  return [JOURNAL_ENDPOINT, async (url, eyeAccountListId) => {
    const response = await client.get(JOURNAL_ENDPOINT + '/?eyeAccountListId=' + eyeAccountListId);
    return response.data;
  }]
};

/**
 * Create 
 */
export const createJournal = async ({ id, eyeAccountListId, label }) => {
  return createEntity(JOURNAL_ENDPOINT, { id, eyeAccountListId, label })
}

/**
 * Update 
 */
export const updateJournal = async ({ id, eyeAccountListId, label }) => {
  return updateEntity(JOURNAL_ENDPOINT, { id, eyeAccountListId, label })
}

/**
 * Delete  
 */
export const deleteJournal = async (id) => {
  return deleteEntity(JOURNAL_ENDPOINT, id)
}