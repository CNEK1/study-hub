export default interface IUser {
  id?: string | null;
  name?: string;
  email: string;
  password: string;
  roles?: Array<string>;
}
