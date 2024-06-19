export namespace Signup {
  export interface In {
    email: string;
    password: string;
  }

  export interface Out {
    token: string;
  }
}
