export interface User {
  uid: string;
  email: string;
  username: string;
}

export default () => {
  return useState<User>("user", () => null);
};
