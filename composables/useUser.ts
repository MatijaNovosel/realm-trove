interface User {
  uid: string;
  email: string;
}

export default () => {
  return useState<User>("user", () => null);
};
