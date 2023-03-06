import { Component } from '@angular/core';

import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  register = {
    name: '',
    email:'',
    password:'',
  }
  widthImg=10;
  name = 'Cristian';
  edad = 23;
  imagen = "https://source.unsplash.com/random";
  btnDisabled = true;
  person = {
    name: 'Ivan',
    edad:23,
    avatar: "https://source.unsplash.com/random"
  }
  //names=['Batman', 'Superwoman', 'Flash'];
  names:string[]=['Batman', 'Superwoman', 'Flash'];
  newName = '';
  box={
    width:100,
    height:100,
    background: 'red'
  };
  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ];

  togglButton(){
    //this.btnDisabled = false;
    this.btnDisabled = !this.btnDisabled;
  }
  increseAge(){
    //this.person.edad += 1;
    this.person.edad++;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName='';
  }
  deleteName(index: number){
    this.names.splice(index,1);
  }
  onRegister(){
    console.log(this.register);

  }
}
