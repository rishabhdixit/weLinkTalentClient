import { Component, OnInit, Input } from '@angular/core';
import {ShareButtonsModule} from 'ng2-sharebuttons';
import { Job } from '../models/job.model';

@Component({
    selector: 'app-job-full-side',
    template: `
	<div>
        <div>
            <p class="slotsLeft">?</p>
            <h1>5</h1>
            <h5 class="slots">Application Slots Left</h5>
        </div>
        <hr>
	    <div>
            <hr>
            <h4> Share This Page </h4>
            <hr>
            <div>
                <a class="btn btn-social-icon btn-twitter btn-lg">
                    <span class="fa fa-twitter generalColor"></span>
                </a>
                <a class="btn btn-social-icon btn-twitter btn-lg">
                    <span class="fa fa-facebook generalColor"></span>
                </a>                
                <a class="btn btn-social-icon btn-twitter btn-lg">
                    <span class="fa fa-linkedin generalColor"></span>
                </a>  
                <a class="btn btn-social-icon btn-twitter btn-lg">
                    <span class="fa fa-google-plus generalColor"></span>
                </a>
                <a class="btn btn-social-icon btn-twitter btn-lg">
                    <img src="./assets/images/emailSquareIcon.png" />
                </a>
            </div>
		</div><br><br>
        <div>
            <h3> Similar Jobs</h3>
            <hr>
            <h5 class="jobTitle">{{job.title}}</h5>
            <div>
                <table class="table table-condensed tableBorder">
                    <tbody>
                        <tr>
                            <td class="labelType">Location:<td>
                            <td>{{job.location}}</td>
                        </tr >
                        <tr>
                            <td class="labelType">Job Type:<td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="labelType">Emp Type:<td>
                            <td>{{job.employmentType}}</td>
                        </tr>
                        <tr>
                            <td class="labelType">Salary:<td>
                            <td>Negotiable</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
            <h5 class="jobTitle">{{job.title}}</h5>
            <div>
                <table class="table tableBorder">
                    <tbody>
                        <tr>
                            <td class="labelType">Location:<td>
                            <td>{{job.location}}</td>
                        </tr>
                        <tr>
                            <td class="labelType">Job Type:<td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="labelType">Emp Type:<td>
                            <td>{{job.employmentType}}</td>
                        </tr>
                        <tr>
                            <td class="labelType">Salary:<td>
                            <td>Negotiable</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
        </div>
	</div>
	`,

   styles: [`
   h4{
       color: #4D308E
    }
    .tableBorder td{
        border: none;
        line-height: 2;
    }
    .labelType{
        font-weight: 700;
        line-height: 2;
    }
    h1{
        font-size: 115px;
        text-align: center;
        color: #4D308E;
        margin:  auto;
    }
    .slots{
        text-align: center;
        color: #4D308E;
    }
    h3{
        font-size: x-large;
        color: #4D308E;
    }
    h5{
        text-align: center;
        font-weight: 700;
    }
    .slotsLeft{
        float: right;
        font-size: xx-large;
        font-weight: 700;
        margin: 0 auto;
    }
    .generalColor{
        color: #FFFFFF;
        font-size: 1.2em;
    }
    .fa-google-plus{
        background-color: #DD4B39;
    }
    .fa-facebook{
        background-color: #3B5998;
    }
    .fa-linkedin{
        background-color: #007BB6;
    }
    .fa-twitter{
        background-color: #55ACEE;
    }
   `],
})

export class JobFullSideComponent {
    @Input() job: Job;
    constructor(){}
}