import { axiosInstance as axios } from '../plugins/axios-plugin'

export const logIn = async (payload: any): Promise<any> => {
    try {
        return await axios.post('/auth/login', payload)
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
