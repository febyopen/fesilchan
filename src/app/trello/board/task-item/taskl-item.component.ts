import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TasktItemComponent implements OnInit {
  @Input() comment: any;

  @Output() emitTask: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTaskEmit(comment: Comment) {
    this.emitTask.emit(comment);
  }
}
