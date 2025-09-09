import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { StudentItemComponent, Student } from './student-item.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, NgIf, StudentItemComponent],
  template: `
    <h2 class="title">Students</h2>
    <div *ngIf="students.length === 0" class="empty">No students.</div>
    <ul class="list">
      <li class="list-item" *ngFor="let s of students; trackBy: trackById">
        <app-student-item [student]="s" (delete)="handleDelete($event)" (update)="handleUpdate($event)"></app-student-item>
      </li>
    </ul>
  `,
  styles: [`
    .title { 
      margin: 0 0 12px; 
      font-size: 20px; 
      font-weight: 600; 
      color: #111827; 
    }
    .empty { 
      color: #6b7280; 
      font-style: italic; 
      padding: 8px 0; 
    }
    .list { 
      list-style: none; 
      padding: 0; 
      margin: 0; 
      display: flex; 
      flex-direction: column; 
      gap: 10px; 
    }
    .list-item { 
      margin: 0; 
    }
  `]
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: 'Mohamed' },
    { id: 2, name: 'Samy' },
    { id: 3, name: 'Jana Samy' },
    { id: 4, name: 'Ahmed' },
    { id: 5, name: 'Samir' },
    { id: 6, name: 'Sobhy' },
    { id: 7, name: 'Sammar' },
    { id: 8, name: 'Khamis' },
    { id: 9, name: 'Rawda' },
    { id: 10, name: 'Omar' }
  ];

  handleDelete(id: number): void {
    this.students = this.students.filter(s => s.id !== id);
  }

  handleUpdate(updated: Student): void {
    this.students = this.students.map(s => s.id === updated.id ? updated : s);
  }

  trackById(index: number, item: Student): number {
    return item.id;
  }
}


