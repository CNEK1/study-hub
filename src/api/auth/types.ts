export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IRegisterRequest {
  email: string;
  name: string;
  password: string;
  roles: string;
}
export interface IRegisterResponse {
  email: string;
  name: string;
  roles: string;
}
export interface ILoginResponse {
  accessToken: string;
}
