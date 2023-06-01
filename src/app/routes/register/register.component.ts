import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/api/users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(public userService: UserService){}
    ngOnInit(){
      this.getAllUsers()
    }

  

  createUser(form: NgForm){

    // revisar los campos
    let data = form.value

    this.userService.createUser(data).subscribe((data: any) => {
      console.log(data)
      alert(data.status > 399 ? data.error.msg : data.msg)
    })
  }
   
    getAllUsers(){
      this.userService.getAllUsers().subscribe((data:any)=>{
        this.userService.allUser= data.result || []
        console.log(data)
      })
    }

    deleteUser(_id: string) {
      this.userService.deleteUser(_id).subscribe((data) => {
        alert("Usuario Eliminado")
        this.getAllUsers()
      })
    }
    
  }


