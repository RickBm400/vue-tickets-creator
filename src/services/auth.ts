import { axiosInstance as axios } from '../plugins/axios-plugin'
import { userStore } from '../store/user'

const { saveUserToken } = userStore()

export const logIn = async (payload: any): Promise<any> => {
    try {
        const response = await axios.post('/auth/login', payload)
        saveUserToken(response.data.access_token)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async (payload: any): Promise<any> => {
    try {
        return await axios.post('/auth/sign-up', payload)
    } catch (error) {
        console.log(error)
    }
}
