
import {Component} from '@angular/core';
@Component({
    selector:"ptab",
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']
})
export class PtabComponent{
    name:string="Boss";
    sal=10000
    flag=false;
    parr=[{id:10 ,name:"Kishori" ,desg:"teach" ,dept:"It"},
    {id:10 ,name:"Akash" ,desg:"st1" ,dept:"It"},
    {id:10 ,name:"Ash" ,desg:"st2" ,dept:"It"}
    ]
    flag1=false;
    p={id:10 ,name:"Kishori" ,desg:"teach" ,dept:"It"};
    
    changeFlag(){
        this.flag=!this.flag;
    }
}  