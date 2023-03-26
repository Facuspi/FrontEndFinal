import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
 urlPerfil:string = "";
 

constructor(private storage : Storage) { }

public subirFotoPerfil($event : any, name : string){
  const file = $event.target.files[0];
  const imgref = ref(this.storage, `imagenPerfil/` + name )
  uploadBytes(imgref, file)
  .then(response => {this.getImagesPerfil()})
  .catch(error => console.log(error))
}

getImagesPerfil(){
  const imagesRef= ref(this.storage, 'imagenPerfil')
  list(imagesRef)
  .then(async response =>{
    for(let item of response.items){
      this.urlPerfil = await getDownloadURL(item);
    }
  })
  .catch(error => console.log(error))
}


}
