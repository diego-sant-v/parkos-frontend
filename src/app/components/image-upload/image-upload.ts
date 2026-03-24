import { Component, EventEmitter, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './image-upload.html',
  styleUrl: './image-upload.css'
})
export class ImageUpload {
  @Output() imageBase64Change = new EventEmitter<string>();

  preview: string | null = null;
  fileName: string | null = null;
  isDragging = false;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.processFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.processFile(file);
  }

  processFile(file: File) {
    if (!file.type.startsWith('image/')) return;

    this.fileName = file.name;
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      this.preview = base64;
      this.imageBase64Change.emit(base64);
    };

    reader.readAsDataURL(file);
  }

  removeImage() {
    this.preview = null;
    this.fileName = null;
    this.imageBase64Change.emit('');
  }

  triggerInput() {
    document.getElementById('fileInput')?.click();
  }
}