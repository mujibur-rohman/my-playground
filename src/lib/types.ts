declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      username: string;
      role: string;
      profilePicture?: string;
    };
  }
  interface User {
    name: string;
    username: string;
    role: string;
    profilePicture?: string | null;
    token: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    name: string;
    username: string;
    role: string;
    profilePicture?: string | null;
    token: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

export type LoginResponse = {
  data: {
    name: string;
    username: string;
    role: string;
    token: {
      accessToken: string;
      refreshToken: string;
    };
  };
  message: string;
};
