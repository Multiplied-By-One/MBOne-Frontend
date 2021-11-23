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
export const createEyeAccount = async ({name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, changePassword, password, connectImg, entry}) => {
  return createEntity(EYE_ACCOUNT_ENDPOINT, {name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, changePassword, password, connectImg, entry})
}

/**
 * Updates 
 */
export const updateEyeAccount = async ({id, name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, changePassword, password, connectImg, entry}) => {
  return updateEntity(EYE_ACCOUNT_ENDPOINT, {id, name, spaceTitle, changeTheme, headingFont, headingFontSize, mainFont, mainFontSize, changePassword, password, connectImg, entry})
}

/**
 * Deletes 
 */
export const deleteEyeAccount = async (id) => {
  return deleteEntity(EYE_ACCOUNT_ENDPOINT, id)
}