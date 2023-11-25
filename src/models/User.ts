import GoogleBook from "./GoogleBook";

export default interface User {
  uid: string;
  displayName?: string;
  photoURL?: string;
  registeredAt?: Date;
  library: GoogleBook[];
}
