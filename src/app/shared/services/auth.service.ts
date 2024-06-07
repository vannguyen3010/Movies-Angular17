declare var google:any; //khai báo biến toàn cục
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
router = inject(Router);
constructor() { }
  signOut(){
    google.accounts.id.disableAutoSelect();//vô hiệu hóa việc tắt tự động chọn
    this.router.navigate(['/'])
  }
}
