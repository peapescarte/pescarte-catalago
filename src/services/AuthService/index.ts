import axios from "axios"

type LoginProps = {
  cpf: string, 
  password: string,
}

export const AuthService = {
  login: async function ({cpf, password}: LoginProps): Promise<any | undefined> {
    try {
      //chamada de API
      console.log('AuthService.login', cpf, password)

      return {
        status: 200, 
        message: 'Login realizado com sucesso'
      }

    } catch (error) {
      if(axios.isAxiosError(error) && error.response) {
        throw new Error(`Status: ${error.response.status} - ${error.message}`)
      }
    }
  },

  logout: async function () {
    
  },

  session: async function () {
    return true
  }
}