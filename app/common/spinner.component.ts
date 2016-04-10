import { Component, OnInit ,Input} from 'angular2/core';
import {getUrl} from '../cacheBuster';
@Component({
    selector: 'spinner',
    templateUrl: getUrl('/views/common/spinnerView.html')
})
export class SpinnerComponent implements OnInit {
    @Input() enabled:boolean

    ngOnInit() { }

}