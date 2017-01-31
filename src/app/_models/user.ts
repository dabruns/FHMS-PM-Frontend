export class User {
  public _id: string;
  public email: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public birthdate: Date;

  public displayName() {
    return this.firstname + ", " + this.lastname;
  }
  displayNameWithMail() {
    return this.firstname + ", " + this.lastname + " (" + this.email + ")";
  }
}
