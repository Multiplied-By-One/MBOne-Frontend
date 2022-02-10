import client, {createEntity, deleteEntity, updateEntity} from "./client";

/**
 * The root API endpoint 
 */
const EYE_ACCOUNT_ENDPOINT = '/eyeAccountList'

export const getEyeAccountFetcher = () => {
  return [EYE_ACCOUNT_ENDPOINT, async () => { 
    const response = await client.get(EYE_ACCOUNT_ENDPOINT)
    return response.data
  }]
}

/**
 * Creates 
 */
export const createEyeAccount = async ({headmateId, name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, createPassword, password, connectImg, entry}) => {
  return createEntity(EYE_ACCOUNT_ENDPOINT, {headmateId, name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, createPassword, password, connectImg, entry})
}

/**
 * Updates 
 */
export const updateEyeAccount = async ({id, headmateId, name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, createPassword, password, connectImg, entry}) => {
  return updateEntity(EYE_ACCOUNT_ENDPOINT, {id, headmateId, name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, createPassword, password, connectImg, entry})
}

/**
 * Deletes 
 */
export const deleteEyeAccount = async (id) => {
  return deleteEntity(EYE_ACCOUNT_ENDPOINT, id)
}