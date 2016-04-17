import {Component,Input,Output,EventEmitter} from "angular2/core";
import {Song} from "./song";
import {getUrl} from "../cacheBuster";
@Component({
    selector:'song-detail',
    templateUrl:getUrl('/views/songs/detail.html')
})
export class SongDetailsComponent{
    @Input() song:Song;
    @Output() closeMe= new EventEmitter<Song>();
    
    
    close(){
        this.closeMe.emit(this.song);
    }
}