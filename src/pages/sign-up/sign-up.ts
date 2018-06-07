import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  
  
  user = new Usuario();
  senhasEstaoIguais=false;
  mensagemDeConfirmacao='';
  mensagem = ["Senhas ainda não conferem!","As senhas estão corretas! :D"];
  retornoDeVerificacao:string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.user.nome="";
    this.user.telefone="";
    this.user.email="";
    this.user.senha="";
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  mudarNome(nome:string){
    
  }

  verificarSenhas(){
    if(this.user.senha==this.user.confirmacaoSenha){
      this.mensagemDeConfirmacao=this.mensagem[1];
      this.senhasEstaoIguais=true;
    }
    else{
      this.mensagemDeConfirmacao=this.mensagem[0];
      this.senhasEstaoIguais=false;
    }
  }

  verificarDados(contador){
    this.retornoDeVerificacao.length=0;
    contador=0;
    if(this.verificarVazio(this.user.nome)){
      this.retornoDeVerificacao[contador]="O campo nome está vazio!";
      contador=contador+1;
    }
    if(this.verificarVazio(this.user.telefone)){
      this.retornoDeVerificacao[contador]="O campo telefone está vazio!";
      contador=contador+1;
    }
    if(this.verificarVazio(this.user.email)){
      this.retornoDeVerificacao[contador]="O campo e-mail está vazio!";
      contador=contador+1;
    }
    if(this.senhasEstaoIguais==true){
      this.retornoDeVerificacao[contador]="As senhas não conferem!";
      contador=contador+1;}
  }
  


  verificarVazio(campo:string){
    if(campo==""){
      return true;
    }
    else{
      return false;
    }
  }

}
class Usuario{
  nome:string;
  telefone:string;
  email:string;
  senha:string;
  confirmacaoSenha:string;
  pronto:boolean;
}

