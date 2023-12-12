import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../model/User';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  users:User[] = []
   username:string=''
   password:string=''
   message:string=''
   answer:boolean=false
   constructor(private service:UserService,private r:Router){
      
   }
   PerformLogin(){
    this.service.PerformLogin(this.username,this.password).subscribe(
      res=>{ if(this.username==res[0].name && this.password==res[0].password )
        {
          this.service.isUserLoggedIn=true;
          this.message='Login Successful'
          this.r.navigate(['students'])
        }
        else
        {
          this.message = 'Login Failed'
        }

        
        
    

      }
    )
      
   
   }
   
}