import { Component, inject } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  http = inject(HttpClient);
  registerMode = false;
  users: any;

  ngOnInit(): void{
    this.getUsers();
    console.log(this.users);
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request completed')
    })
  }
}
