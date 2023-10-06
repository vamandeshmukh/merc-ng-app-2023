import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { WriterService } from 'src/app/services/writer.service';

@Component({
  selector: 'app-writer-details',
  templateUrl: './writer-details.component.html',
  styleUrls: ['./writer-details.component.css']
})
export class WriterDetailsComponent implements OnInit {

  @Input()
  writerId: any = '';

  writerData: any = '';

  constructor(private writerService: WriterService) { }

  ngOnInit(): void {
    console.log(this.writerId)
    this.writerService.getWriterById(this.writerId)
      // here 
      .pipe(map((w) => {
        console.log(w);
        return { name: w.name.toUpperCase(), email: w.email };
      }),
        map((w) => {
          console.log(w);
          return { name: w.name, email: w.email.toLowerCase() };
        }))
      .subscribe((resp) => {
        console.log(resp);
        this.writerData = resp;
      });
  }
}
