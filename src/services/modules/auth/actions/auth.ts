import { createSessionToken } from '@/services/AuthService';
import { redirect } from 'next/navigation';

type LoginProps = {
  cpf: string, 
  password: string
}

async function login(formData: FormData) {
  const cpf = formData.get('cpf') as string;
  const password = formData.get('password') as string;

  if(cpf != "14496844168" || password != "2MFq'@Zlu;:M<rDD") {
    redirect('/');
  }
  console.log(cpf, password)

  await createSessionToken({
    sub: "a4d5adf5-a843-4b9a-a41c-cc2eb35ea0d3",
    cpf,
  });

  redirect('/dashboard');
}

const AuthActions = {
  login,
};

export default AuthActions;