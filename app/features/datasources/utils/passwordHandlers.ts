export enum PasswordFieldEnum { Password = 'password', BasicAuthPassword = 'basicAuthPassword' }
export type Ctrl = {
  current: {
    secureJsonFields: {
      [key: string]: boolean;
    };
    secureJsonData?: {
      [key: string]: string;
    };
    password?: string;
    basicAuthPassword?: string;
  };
};
export const createResetHandler = (ctrl: Ctrl, field: PasswordFieldEnum) => (event: any) => {};
export const createChangeHandler = (ctrl: any, field: PasswordFieldEnum) => (event: any) => {};
