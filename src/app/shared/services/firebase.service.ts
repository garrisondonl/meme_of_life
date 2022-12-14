import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  Firestore,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  DocumentData,
  CollectionReference,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  db: Firestore;
  postCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebase);
    this.db = getFirestore();
    this.postCol = collection(this.db, 'posts');

    // Get Data
    onSnapshot(
      this.postCol,
      (snapshot) => {
        this.updatedSnapshot.next(snapshot);
      },
      (err) => {
        console.log(err);
      })
  }

  async getPosts(){
    const snapshot = await getDocs(this.postCol);
    return snapshot;
  }

  async addPost(displayName: string, url:string, favorite: boolean) {
    await addDoc(this.postCol, {
      displayName,
      url,
      favorite
    })
    return;
  }

  async deletePost(docId: string) {
    const docRef = doc(this.db, 'posts', docId);
    await deleteDoc(docRef);
    return;
  }

  async updatePost(docId: string, displayName: string, url: string, favorite: boolean) {
    const docRef = doc(this.db, 'posts', docId);
    await updateDoc(docRef, { displayName, url, favorite })
    return;
  }
}
