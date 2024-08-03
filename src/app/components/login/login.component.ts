import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { usuarioModel } from '../../models/usuarioModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  usuario!: usuarioModel;

  login: string = '';
  senha: string = '';
  
  formularioLogin!: FormGroup

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(){
    this.formularioLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  realizaLogin(){
    this.login = this.formularioLogin.get('login')?.value
    this.senha = this.formularioLogin.get('senha')?.value
    this.usuario = {login: this.login, senha: this.senha};
    this.authService.autentica(this.usuario).subscribe({
      next: (resposta) => {
        console.log(resposta);
        
        var login = {
          login: this.login,
          senha: this.senha
       };
        this.usuarioService.logar(login as usuarioModel);
      },error: (erro) => {
        console.log(erro);
        
      }
    })
  }
}
