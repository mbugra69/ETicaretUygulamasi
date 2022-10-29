import { Component } from '@angular/core';
import { NewToastrService, ToastrMessageType, ToastrPosition } from './services/ui/new-toastr.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
constructor(private toastrService : NewToastrService)
{
  toastrService.message("Siparişiniz onaylandı.","Başarılı",
  {
    messageType : ToastrMessageType.Success,
    position :ToastrPosition.TopCenter,
  });


}
}

