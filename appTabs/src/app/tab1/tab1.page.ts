import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  toastController: any;
  alertController: any;

  constructor(public router: Router) {}

listaFilmes: IFilme[] = [
 {
  nome: 'Mortal Kombat (2021)',
 lancamento: '15/04/2021',
 duracao: '1h50m',
 classificacao: 9,
 cartaz: 'https://img.odcdn.com.br/wp-content/uploads/2021/03/mortal-kombat-new-poster.jpg',
 generos:['Ação', 'Fantasia' , 'Aventura'],
 pagina: '/mortal-kombat',
 favorito: false

 },
{
nome:'Vingadores: Ultimato(2019)',
lancamento:'25/04/2019(BR)',
duracao:'3h01m',
classificacao:6,
cartaz:'https://m.media-amazon.com/images/I/91J7VHbAwBL._AC_UF894,1000_QL80_.jpg',
generos:['Aventura','FIcção cientifica','Ação'],
pagina:'/avengers',
favorito: false



},
];
exibirFilme(filme:IFilme){
const NavigationExtras: NavigationExtras = {state:{paramFilme:filme}};
this.router.navigate(['filme-detalhe'],NavigationExtras);
}

async exibirAlertaFavorito(filme: IFilme){

  const alert = await this.alertController.create({

    header: 'Mes Favoritos',
    message:' Deseja relamente favoritar o filme?',
    buttons:[
      {
        text:'Cancelar',
        role: 'cancel',
        handler: () =>{
          filme.favorito=false;
        }

      }, {
        text:'Sim, favoritar.',
        handler: () => {
          filme.favorito = true;
          this.apresentarToast();
        }
        }

      ]


  });
  await alert.present();
}
async apresentarToast(){
  const toast = await this.toastController.create({
    message: 'Filme adicionado aos favoritos...',
    duration: 2000,
    color: 'sucess'
  });
  toast.present();
}
}
