// src/types/RootStackParamList.ts

export type RootStackParamList = {
    Landing: undefined;
    LogIn: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    VerifyCode: { email: string };        // passa o email para validar o código
    Recovery: { email: string; code: string };  // email + token para resetar senha
};
