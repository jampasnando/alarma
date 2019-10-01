import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  clasealarma:string="";
  clasefuego:string="";
  claseapagar:string="";
  claseemergencia:string="";
  btnalarma:string="true";
  btnfuego:string="true";
  telf:string;
  telfext:string;
  telefono:string;
  bandera:boolean=false;
  constructor(private call:CallNumber,private memoria:Storage) {}
  ngOnInit(){
    this.memoria.get("telefono").then((valor)=>{
      this.telf=valor;
      this.telefono=valor;
      console.log("el telf: ",valor);
    
    });
  }

  
  guardatelf(){
    this.memoria.set("telefono",this.telefono);
    this.recuperatelf();
    alert("Guardado: "+this.telefono);
    this.bandera=false;
  }
  recuperatelf(){
    this.memoria.get("telefono").then((valor)=>{
      console.log(valor);
      this.telefono=valor;
      this.telf=valor;
    });
  }

  llamar(nro){
    console.log("llamara a: ",nro);
    this.call.callNumber(nro, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  alarma(){
    // this.clasealarma="btn rojo parpadea1";
    this.clasealarma="oscurecex";
    this.telfext=this.telf + ";5";
    setTimeout(()=>{
      this.clasealarma="";
    },3000);
    this.call.callNumber(this.telfext, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  fuego(){
    this.clasefuego="oscurecex";
    this.telfext=this.telf + ";8";
    setTimeout(()=>{
      this.clasefuego="";
    },3000);
    this.call.callNumber(this.telfext, true)
    .then(res => console.log('llamando', res))
    .catch(err => console.log('error llamando', err));
    
  }
  emergencia(){
    this.claseemergencia="oscurecex";
    this.telfext=this.telf + ";0";
     setTimeout(()=>{
      this.claseemergencia="";
    },3000);
    this.call.callNumber(this.telfext, true)
    .then(res => console.log('llamando', res))
    .catch(err => console.log('error llamando', err));
  }
  megafono(){
    this.telfext=this.telf;
    this.call.callNumber(this.telfext, true)
    .then(res => console.log('llamando', res))
    .catch(err => console.log('error llamando', err));
  }
  apagar(){
    this.claseapagar="oscurece";
    setTimeout(()=>{
      this.claseapagar="";
    },3000);
    this.telfext=this.telf + ";6";
    this.call.callNumber(this.telfext, true)
    .then(res => console.log('llamando', res))
    .catch(err => console.log('error llamando', err));
  }
  abreConfig(){
    this.bandera=!this.bandera;
  }
}