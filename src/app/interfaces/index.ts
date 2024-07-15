export interface ILoginResponse {
  accessToken: string;
  expiresIn: number
}

export interface IResponse<T> {
  data: T;
}

export interface IUser {
  id?: number;
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  authorities?: IAuthority[];
  role?: IRole
}

export interface IAuthority {
  authority: string;
}

export interface IFeedBackMessage {
  type?: IFeedbackStatus;
  message?: string;
}

export enum IFeedbackStatus {
  success = "SUCCESS",
  error = "ERROR",
  default = ''
}

export enum IRoleType {
  admin = "ROLE_ADMIN",
  user = "ROLE_USER",
  superAdmin = 'ROLE_SUPER_ADMIN'
}

export interface IRole {
  createdAt: string,
  description: string,
  id: number
  name : string,
  updatedAt: string
}

export interface IGame {
  id?: number
  name?: string,
  imgURL?: string,
  status?: string,
  description?: string,
  createdAt?: string,
  updatedAt?: string
}
export interface IProducto {
  id?: number
  cantidadEnStock?: string,
  createdAt?: string,
  descripcion?: string,
  nombre?: string,
  precio?: string,
  updatedAt?: string,
  categoriaId?: number
}

export interface ICategoria {
  id?: number
  createdAt?: string,
  descripcion?: string,
  nombre?: string,
  updatedAt?: string,
}