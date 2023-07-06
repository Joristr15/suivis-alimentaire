// import { Injectable } from '@angular/core';
// import Dexie from 'dexie';

// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseService extends Dexie {
//   private data: Dexie.Table<any, number>;

//   constructor() {
//     super('MyDatabase');

//     this.version(1).stores({
//       data: '++id'
//     });

//     this.data = this.table('data');
//   }

//   addData(item: any): Promise<any> {
//     return this.data.add(item);
//   }

//   getAllData(): Promise<any[]> {
//     return this.data.toArray();
//   }
// }
