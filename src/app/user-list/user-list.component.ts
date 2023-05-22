import { Component, OnInit } from '@angular/core';
import { Usuario } from '../users/interface/usuarios';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users:Usuario[]=[]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  getUsers():void{
    
    this.apiService.getUsers().subscribe({
      next:(response)=>{
        this.users =response.usuarios;
      },
      error:(response)=>{
        console.log('Error al obtener los usuarios:');

      }
    }
    )
  }

  deleteUser(userId: string): void {
    this.apiService.deleteUser(userId)
    .subscribe({
      next:(response)=>{
        console.log('Usuario eliminado:', response);
        this.getUsers();
      },
      error:()=>{
        console.log('Error al eliminar el usuario:');

      }
    }
    )
  }

  updateUser(userId: string): void {
    const updatedUser = {
      'nombre':"mod",
      "role": "ADMIN_ROLE",
      "email": "Mod@iesjacaranda.es",
    };

    this.apiService.updateUser(userId, updatedUser)
    .subscribe({
      next:(response)=>{
        console.log(updatedUser)
        console.log('Usuario actualizado:', response);
        // Actualiza la lista de usuarios después de actualizar uno
        this.getUsers();
      },
      error:()=>{
        console.log('Error al actualizar el usuario:');

      }
    }
    )
  }
  

}
