import {Component} from '@angular/core';

@Component({
    selector:"pform",
    templateUrl:"./pform.component.html",
    styleUrls:["./pform.component.css"]
})
export class PformComponent{
    pid:number=0;
    pname:string="";
    pdesg:string="";
    pdept:string="";
    displaydata()
    {
        console.log(this.pid+" ------ "+this.pname+" ------ "+this.pdesg+"----"+this.pdept);
    }

}