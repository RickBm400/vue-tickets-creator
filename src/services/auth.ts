import { axiosInstance as axios } from '../plugins/axios-plugin'

export const login = async (payload: any): Promise<any> => {
    try {
        return await axios.post('/auth/login', payload)
    } catch (error) {
        console.log(error)
    }
}
