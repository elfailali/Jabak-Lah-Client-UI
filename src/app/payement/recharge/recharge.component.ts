import { Component } from '@angular/core';
import { Provider } from '../models/provider.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent {

  provider?: Provider =  new Provider(4, 'IAM', './../../assets/logos/maroc-telecom-blanc-ar-grande.jpg', 'Recharge', 'Maroc Telecom'); //FOR TEST
  // surname?: string;

  phone?: string;
  creancierCode?: string;
  amount?: string;
  date?: string;

  loading = false;
  submitted = false;

  
  // submitted1 = false;

  // closeResult?: string;

  // otpError: boolean = false;


  // constructor(private router: Router,
  //   private route: ActivatedRoute,
  //   private providerService: ProviderService,
  //   private alertService: AlertService,
  //   private modalService: NgbModal,
  //   private tokenStorageService: TokenStorageService) { }

  // ngOnInit(): void {
  //   this.surname = this.route.snapshot.params['surname'];
  //   this.provider = this.providerService.findBySurname(this.surname!, "recharge");
  //   if (!this.provider) {
  //     this.alertService.warn("Introuvable", { keepAfterRouteChange: true });
  //     this.router.navigate(['../../'], { relativeTo: this.route });
  //   }
  // }

  // rechargeForm = new FormGroup({
  //   phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
  //   creancierCode: new FormControl('', Validators.required),
  //   amount: new FormControl('', Validators.required),
  // });

  // otpForm = new FormGroup({
  //   otp: new FormControl('', Validators.required),
  // });


  // get f() { return this.rechargeForm.controls; }
  // get o() { return this.otpForm.controls; }


  // onSubmit() {

  //   this.providerService.recharge(this.rechargeForm.value).subscribe(
  //     {
  //       next: (v: any) => {
  //         this.loading = false;
  //       },
  //       error: (e: any) => {
  //         this.alertService.error(e.statusText);
  //         this.loading = false;
  //       },
  //       complete: () => {
  //         this.modalService.dismissAll();
  //         this.alertService.success("Operation effectuée avec succés");
  //       }
  //     }
  //   );


  // }

  // openDialog(content: any) {
  //   this.submitted = true;
  //   this.alertService.clear();
  //   if (this.rechargeForm.invalid) {
  //     return;
  //   }
  //   this.date = (new Date()).toLocaleDateString();
  //   this.phone = this.f['phoneNumber'].value;
  //   this.creancierCode = this.f['creancierCode'].value;
  //   this.amount = this.f['amount'].value;
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // openOTPDialog(content: any) {
  //   this.providerService.sendOTP(this.tokenStorageService.getPhoneNumber()).subscribe({
  //     next: (v: any) => {
  //     },
  //     error: (e: any) => {
  //       console.log(e)
  //     },
  //     complete: () => {
  //     }
  //   });
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // verifyOTP() {
  //   this.submitted1 = true;
  //   if (this.otpForm.invalid) {
  //     return;
  //   }
  //   this.providerService.verifyOTP({ ...this.otpForm.value, phone: this.rechargeForm.value.phoneNumber }).subscribe(
  //     {
  //       next: (v: any) => {
  //         this.otpError = false;
  //       },
  //       error: (e: any) => {
  //         this.otpError = true;
  //       },
  //       complete: () => {
  //         this.onSubmit();
  //       }
  //     }
  //   );
  // }


  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

}
