import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../users/interface/usuarios';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  userId: any;
  user:Usuario[]=[];
  constructor(private route:ActivatedRoute, private ApiService:ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('uid');
    });

    this.ApiService.getUserById(this.userId).subscribe({
      next:(response)=>{
        console.log(response)
        this.user = response.usuario;
      },
      error:(response)=>{
        console.log('Error al obtener el usuario')
      }
    })
  
    console.log(this.user)
  }


}
