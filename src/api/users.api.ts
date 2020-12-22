import Axios from 'axios-observable';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { map } from 'rxjs/operators';

// colocar en un ambiente dev
const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com';

// axios devuelve un valor observable en este caso un arreglo de usuarios
// se usa pipe para manipular el response del servicio
export const getUsersAPI = (): Observable<User[]> => {
  return Axios.get<User[]>(`${USERS_ENDPOINT}/users`).pipe(
    map(({ data }) => data),
  );
};
