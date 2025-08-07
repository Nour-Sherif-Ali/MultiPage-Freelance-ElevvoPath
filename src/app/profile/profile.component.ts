import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['John', [Validators.required, Validators.minLength(2)]],
      lastName: ['Doe', [Validators.required, Validators.minLength(2)]],
      email: ['john.doe@email.com', [Validators.required, Validators.email]],
      phone: ['+1 (555) 123-4567', [Validators.required]],
      bio: ['Full-stack developer with 5+ years of experience in web development. Specializing in React, Node.js, and modern web technologies.'],
      location: ['New York, NY'],
      website: ['https://johndoe.dev']
    });
  }

  ngOnInit(): void {}

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  cancelEdit(): void {
    this.isEditing = false;
    // Reset form to original values
    this.profileForm.reset({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      bio: 'Full-stack developer with 5+ years of experience in web development. Specializing in React, Node.js, and modern web technologies.',
      location: 'New York, NY',
      website: 'https://johndoe.dev'
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile updated:', this.profileForm.value);
      this.isEditing = false;
      // Here you would typically send the data to your backend
    }
  }
}