import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

export interface Student {
  id: number;
  name: string;
}

@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="student-item">
      <ng-container *ngIf="!isEditing; else editTpl">
        <span class="name">{{ student?.name }}</span>
        <div class="actions">
          <button type="button" class="btn btn-edit" (click)="startEdit()">Edit</button>
          <button type="button" class="btn btn-delete" (click)="onDelete()">Delete</button>
        </div>
      </ng-container>
      <ng-template #editTpl>
        <input class="edit-input" type="text" [value]="editName" (input)="editName = ($any($event.target)).value" />
        <div class="actions">
          <button type="button" class="btn btn-save" (click)="saveEdit()">Save</button>
          <button type="button" class="btn btn-cancel" (click)="cancelEdit()">Cancel</button>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .student-item { 
      display: flex; 
      align-items: center; 
      justify-content: space-between; 
      gap: 12px; 
      padding: 10px 12px; 
      border: 1px solid #e5e7eb; 
      border-radius: 8px; 
      background: #ffffff; 
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
      transition: box-shadow 0.2s ease, transform 0.05s ease;
    }
    .student-item:hover { 
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .name { 
      font-weight: 500; 
      color: #111827; 
    }
    .actions { 
      display: flex; 
      gap: 8px; 
    }
    .btn { 
      appearance: none; 
      border: 1px solid transparent; 
      border-radius: 6px; 
      padding: 6px 10px; 
      font-size: 13px; 
      line-height: 1; 
      cursor: pointer; 
      transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease; 
    }
    .btn-edit { 
      background: #f3f4f6; 
      color: #111827; 
      border-color: #e5e7eb; 
    }
    .btn-edit:hover { 
      background: #e5e7eb; 
    }
    .btn-delete { 
      background: #fee2e2; 
      color: #b91c1c; 
      border-color: #fecaca; 
    }
    .btn-delete:hover { 
      background: #fecaca; 
    }
    .btn-save { 
      background: #d1fae5; 
      color: #065f46; 
      border-color: #a7f3d0; 
    }
    .btn-save:hover { 
      background: #a7f3d0; 
    }
    .btn-cancel { 
      background: #f3f4f6; 
      color: #374151; 
      border-color: #e5e7eb; 
    }
    .btn-cancel:hover { 
      background: #e5e7eb; 
    }
    .edit-input { 
      flex: 1; 
      min-width: 140px; 
      padding: 6px 8px; 
      border: 1px solid #d1d5db; 
      border-radius: 6px; 
      outline: none; 
      transition: border-color 0.2s ease, box-shadow 0.2s ease; 
    }
    .edit-input:focus { 
      border-color: #6366f1; 
      box-shadow: 0 0 0 3px rgba(99,102,241,0.2); 
    }
  `]
})
export class StudentItemComponent {
  @Input() student: Student | null = null;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<Student>();

  isEditing = false;
  editName = '';

  startEdit(): void {
    if (!this.student) return;
    this.isEditing = true;
    this.editName = this.student.name;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  saveEdit(): void {
    if (!this.student) return;
    const trimmed = this.editName.trim();
    if (!trimmed || trimmed === this.student.name) {
      this.isEditing = false;
      return;
    }
    this.update.emit({ ...this.student, name: trimmed });
    this.isEditing = false;
  }

  onDelete(): void {
    if (this.student) {
      this.delete.emit(this.student.id);
    }
  }
}