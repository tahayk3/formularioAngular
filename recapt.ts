//declarar variables, puede ser o no tipado y puede ser de varios tipos
//const username:string|number = 'gato';
const username = 'gato';

//angular suele trabajar con arrow functions
const sum =(num1:number,num2:number) =>{
    return num1+num2;
};
sum(5,5);

//angular suele trabajar el patron orientado a objetos
//nos podemos ahorrar la declaracion y la asignacion
/*
class Person{
  //declaracion
  private age: number;
  lastname: string;

  constructor(age:number,lastname:string){
    //asignacion
    this.age = age;
    this.lastname = lastname;
  }
}
*/
class Person{
  constructor(public age:number,public lastname:string){
  }
}

//Crear un objeto a parti de una clase. Instanciar una clase y pasarle los parametros para que los pueda utilizar el constructor alojado en la clase.
const nico = new Person(23,'tahay');

//los atributos dentro de las clases pueden tener proteccion, por defecto es publico
//se podria con getter
nico.lastname;
nico.age;





