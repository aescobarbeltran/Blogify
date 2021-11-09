import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post.model'; //Importa Post de Angular

@Component({
  selector: 'app-create-post', //En el ejercicio del profesor se llama solo create-post
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  content: string = "Hola a todos";
  texto: string = "";
  @Output() createPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {}

  showText() {
    this.content = this.texto;
  }

  addPost(form:NgForm) {
    if(form.valid){
    this.createPost.emit(form.value);
    form.resetForm();
    }
  }
}
