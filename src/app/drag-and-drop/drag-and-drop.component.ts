import { CdkDrag, CdkDragDrop, CdkDragEnd, CdkDragMove, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  providers:[]
})

export class DragAndDropComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}
public threshold = 250;
public dragValue=0;
public todoValue = '';
public isDrag?:boolean;
public todolist = new FormControl();
  public list: ListItem[] = [
    { id: 1, name: 'Neil Sims ',email:'email@fl.com',price:300 ,image:'https://img.freepik.com/free-photo/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually_273609-16228.jpg?size=626&ext=jpg&ga=GA1.2.103982033.1681988351&semt=sph' },
    { id: 2, name: 'Bonnie Green ',email:'email@fl.com',price:400 ,image:'https://img.freepik.com/free-photo/portrait-good-looking-smiling-arabic-man-suit-attractive-young-businessman-with-beard-moustache-looking-camera-portrait-international-beauty-concept_74855-21597.jpg?size=626&ext=jpg&ga=GA1.1.103982033.1681988351&semt=sph'},
    { id: 3, name: 'Michael Gough ',email:'email@fl.com',price: 300,image:'https://img.freepik.com/free-photo/happy-good-looking-man-glasses-pointing-finger-left_176420-21192.jpg?size=626&ext=jpg&ga=GA1.1.103982033.1681988351&semt=sph'},
    { id: 4, name: 'Thomas Lean ' ,email:'email@fl.com',price:399,image:'https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?size=626&ext=jpg&ga=GA1.1.103982033.1681988351&semt=sph'},
    { id: 5, name: 'Lana Byrd ' ,email:'email@fl.com',price:499,image:'https://img.freepik.com/free-photo/lady-with-brown-eyes-is-smiling-red-wall_197531-16958.jpg?size=626&ext=jpg&ga=GA1.1.103982033.1681988351&semt=sph'},
  ];

  todo :string[]= [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done:string[]= [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  review :string[] = [
    'Take bath',
    'Wash car',
  ];

  ngOnInit(): void {
    
  }

  drop(event: CdkDragDrop<ListItem[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    this.isDrag =false;
  }

  delete(item: ListItem) {
    const index = this.list.indexOf(item);
    if (index >= 0) {
      this.list.splice(index, 1);
      this.snackBar.open('Item deleted', 'Undo', { duration: 3000 })
        .onAction().subscribe(() => {
          this.list.splice(index, 0, item);
        });
    }
  }
  onDragEnded(item: any, event: CdkDragEnd) {
 this.dragValue = event.distance.x;
    if ( this.dragValue > this.threshold) {
      const index = this.list.indexOf(item);
      this.list.splice(index, 1);
      this.snackBar.open('Item deleted', 'Undo', { duration: 3000 })
      .onAction().subscribe(() => {
        this.list.splice(index, 0, item);
      });
      this.dragValue=0;
    }
  }

  onDragMove(event: CdkDragMove) {
    this.dragValue = event.pointerPosition.x
    this.isDrag =true
     }
     
     dropList(event: CdkDragDrop<string[]>) {
      console.log(event);
  
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
    public addTodo(){
    this.todo.push(this.todolist.value)
    }
 
  
}
export interface ListItem {
  id: number;
  name: string;
  email:string;
  price:number;
  image:string;
}