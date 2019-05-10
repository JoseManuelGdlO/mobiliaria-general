import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpProvider } from '../../providers/http/http';



/**
 * Generated class for the EditarnotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarnota',
  templateUrl: 'editarnota.html',
})
export class EditarnotaPage {
  id_nota: string;
  note: string;
  body: string;
  base64Image: string;
  base64Image2: string;

  constructor(public navCtrl: NavController, 
    public view:ViewController, 
    public navParams: NavParams, 
    public camera:Camera, 
    public http:HttpProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.id_nota = navParams.get('id_nota');
    this.note = navParams.get('note');
    this.body = navParams.get('body');
    this.base64Image2 = navParams.get('ruta');
    this.base64Image = "nohay";
    console.log(this.id_nota);
    console.log(this.note);
    console.log(this.body);
    console.log("Ruta imagen"+this.base64Image);
  }

  

  foto(){
    const options: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     console.log(err);
    });

  }
  galeria(){

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });

  }

  respuesta:any;
  actualizar(){


    let loading = this.loadingCtrl.create({
      content: 'Actualizando Nota..'
    });
    loading.present();

    console.log(this.base64Image);
    this.http.actualizarNotas(this.id_nota,this.note,this.body,this.base64Image).then(
      (res)=>{

        this.respuesta= res["registro"];
        console.log(this.respuesta);
        loading.dismiss();
        this.cerrarModal();

        

      },(error)=>{
      console.log("Error"+JSON.stringify(error));
      loading.dismiss();  
      alert("Verifica que cuentes con internet");
    })
  
  }

  cerrarModal(){
    this.view.dismiss();
  }

 

  presentConfirm() {
    console.log(this.id_nota);
    let alert = this.alertCtrl.create({
      title: 'Eliminar nota',
      message: 'Esta accion ya no se puede deshacer :C',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si, Acepto',
          handler: () => {
            this.loadingDeBorrar();
            console.log();
          }
        }
      ]
    });
    alert.present();
  }

  loadingDeBorrar() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  

    loading.onDidDismiss(() => {

this.confirmar();

      
    });
    
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  confirmar(){
    this.http.borrarNota(this.id_nota).then(
        (res)=>{
  
          
          this.cerrarModal();
  
        },(error)=>{
        console.log("Error"+JSON.stringify(error));
          alert("Verifica que cuentes con internet");
      })
      
    }

}
