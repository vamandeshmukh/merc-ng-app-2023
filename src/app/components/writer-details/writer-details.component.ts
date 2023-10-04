import { Component, Input, OnInit } from '@angular/core';
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
      .subscribe((resp) => {
        console.log(resp);
        this.writerData = resp;
      });
  }



}
