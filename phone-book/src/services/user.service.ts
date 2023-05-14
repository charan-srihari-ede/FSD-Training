import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetails(userId: number): Observable<IUser> {
    return this.http.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }

  createUser(userData: IUser): Observable<IUser> {
    return this.http.post<IUser>(
      'https://jsonplaceholder.typicode.com/users',
      userData
    );
  }

  updateUser(userId: number) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        name: 'test nme',
        username: 'testname',
        phone: 1234567,
        email: 'test@example.com',
      }
    );
  }

  deleteUserDetails(userId: number) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
