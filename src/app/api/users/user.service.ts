import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user.models';
import { environment } from 'src/environments/environment.development';
 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = `${environment.API_URI}/user`
  userToCreate: User = new User()
  allUser: User [] =[]
  constructor(private http: HttpClient) { 

  }
  //metodos q van a consumir el api
  getAllUsers(){
    return this.http.get(`${this.urlApi}/getAll`) // lo q haces consumir la api
  }
  createUser(data:User){
    return this.http.post(`${this.urlApi}/create`, data)
  }

  deleteUser(id:string){
    return this.http.delete(`${this.urlApi}/delete/${id}`)
  }
}
