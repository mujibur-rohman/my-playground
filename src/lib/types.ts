declare module "next-auth" {
  interface Session {
    user: {
      id: number | string;
      name: string;
      username: string;
      role: string;
      profilePicture?: string | null | undefined;
      token: {
        accessToken: string;
        refreshToken: string;
      };
    };
  }
  interface User {
    id: number | string;
    name: string;
    username: string;
    role: string;
    profilePicture: string | null | undefined;
    token: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: number | string;
    name: string;
    username: string;
    role: string;
    profilePicture?: string | null | undefined;
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
