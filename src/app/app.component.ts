import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todo = this.store.collection('todo').valueChanges({idField:'id'});
  inProgress=this.store.collection('inProgress').valueChanges({idField:'id'});
  done=this.store.collection('done').valueChanges({idField:'id'});

  title = 'jpegAlgorithm';


  
  constructor(private store: AngularFirestore){}

   
}

