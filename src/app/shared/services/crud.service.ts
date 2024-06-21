import { Injectable, inject } from '@angular/core';
import { Database, ref, push, remove, update, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private db: Database = inject(Database);

  createItem(path: string, data: any): Promise<string> {
    const itemRef = push(ref(this.db, path), data);
    return Promise.resolve(itemRef.key as string);
  }

  readItems(path: string): Observable<any[]> {
    return new Observable(observer => {
      const itemsRef = ref(this.db, path);
      onValue(itemsRef, (snapshot) => {
        const items:any = [];
        snapshot.forEach((childSnapshot) => {
          items.push({
            key: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        observer.next(items);
      }, error => {
        observer.error(error);
      });
    });
  }

  updateItem(path: string, data: any): Promise<void> {
    return update(ref(this.db, path), data);
  }

  deleteItem(path: string): Promise<void> {
    return remove(ref(this.db, path));
  }
}