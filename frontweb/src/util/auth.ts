import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

export type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export const hasAnyRoles = (roles: Role[]): boolean => {
  if (roles.length === 0) {
    return true;
  }

  const tokenData = getTokenData();

  // FEITO COM FUNÇÃO DE ALTA ORDEM
  if (tokenData !== undefined) {
    return roles.some((role) => tokenData.authorities.includes(role));
  }

  // FEITO COM FOR();
  // if (tokenData !== undefined) {
  //   for (var i = 0; i < roles.length; i++) {
  //     if (tokenData.authorities.includes(roles[i])){
  //       return true;
  //     }
  //   }
  // }

  return false;
};

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthData().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
};
