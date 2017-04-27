import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';

@Component({
    selector: 'app-profile-basic-info',
    template: `
    <div class="container div-padding">
        <div class="row col-md-12">
            <div class="col-md-6">
                <form role="form" class="form-inline">
                    <div class="form-group">
                        <label for="dateBirth" class="labelweight">Date of Birth: </label>
                        <input type="date" class="form-control formSpace" id="dateBirth" style="margin-left: 68px; padding-right: 46px;"/>
                    </div>
                    <div class="form-group">
                        <label for="email" class="labelweight">Email:</label>
                        <input type="email" value="{{profile.emailAddress}}" class="form-control formSpace" id="email" style="margin-left:125px;"/>
                    </div>
                    <div class="form-group">
                        <label for="FINNumber" class="labelweight">NRIC / FIN Number: </label>
                        <input type="text" class="form-control formSpace" id="FINNumber" style="margin-left: 19px;"/>
                    </div>
                    <div class="form-group">
                        <label for="SingaporeVisa" class="labelweight">Visa for Singapore: </label>
                        <input type="dropdown" class="form-control formSpace" id="SingaporeVisa" style="margin-left: 28px;"/>
                    </div>
                    <div class="form-group">
                        <label for="noticePeriod" class="labelweight">Notice Period: </label>
                        <input type="date" class="form-control" id="noticePeriod" style="margin-left: 63px; padding-right: 46px;"/>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <form role="form" class="form-inline">
                    <div class="form-group">
                        <label for="maritalStatus" class="labelweight">Marital Status: </label>
                        <input type="dropdown" class="form-control formSpace" id="maritalStatus" style="margin-left: 100px;"/>
                    </div>
                    <div class="form-group">
                        <label for="mobileNumber" class="labelweight">Mobile:  </label>
                        <input type="text" class="form-control formSpace" id="mobileNumber" style="margin-left: 153px;"/>
                    </div>
                    <div class="form-group">
                        <label for="numberOfChildren" class="labelweight">Number of Children: </label>
                        <input type="dropdown" class="form-control formSpace" id="numberOfChildren" style="margin-left: 56px;"/>
                    </div>
                    <div class="form-group">
                        <label for="validityEnd" class="labelweight">End of validity: </label>
                        <input type="date" class="form-control formSpace" id="validityEnd" style="margin-left:96px; padding-right:46px;"/>
                    </div>
                    <div class="form-group">
                        <label for="canNegotiate" class="labelweight">Negotiable? </label>
                        &emsp;<p class="pWeight p1">Yes&emsp;</p><input type="checkbox" id="canNegotiate" class="labelweight cb"/>
                        &emsp;<p class="pWeight p2">No&emsp;</p><input type="checkbox" id="canNegotiate" class="labelweight cb"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `,

    styles: [`
        .div-padding{
            padding-right: 0px;
            padding-left: 0;
        }
        .formSpace{
            margin-bottom: 5px;
        }
        .labelweight{
            font-weight: bolder;
        }
        .pWeight{
            font-weight: bolder;
            margin-bottom: 0;
        }
        .cb{            
            border-radius: 0.25em;
            width: 1.7em;
            height: 1.7em;
        }
        .p1{
            margin-left: 110px;
        }
        .p2{
            margin-left: 45px;
        }
    `],
})

export class ProfileBasicInfoComponent{
    constructor (){

    }
}