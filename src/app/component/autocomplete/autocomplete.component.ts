import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { colorenity } from 'src/app/Entity/colorrnity';
import { MasterService } from 'src/app/service/master.service';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  colorarray = ['Red', 'Green', 'Yellow']
  filteroptions!: Observable<string[]>
  formcontrol = new FormControl('');
colorarraylist!:colorenity[];
filteroptionlist!:Observable<colorenity[]>

  constructor(private service:MasterService){
    this.colorarraylist= this.service.GetColorlist();
  } 
  ngOnInit(): void {
    // this.filteroptions = this.formcontrol.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )
        this.filteroptionlist = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._LISTFILTER(value || ''))
    )
  }
  private _FILTER(value: string): string[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarray.filter(option => option.toLocaleLowerCase().includes(searchvalue));
  }
  private _LISTFILTER(value: string): colorenity[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarraylist.filter(option => option.name.toLocaleLowerCase().includes(searchvalue) ||
    option.code.toLocaleUpperCase().includes(searchvalue)
    );
  }
}
