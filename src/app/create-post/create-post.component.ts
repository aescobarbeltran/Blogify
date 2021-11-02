import { Component, OnInit } from '@angular/core';
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
  posts: Post[] = []; // crea el componente Post

  constructor() { }

  ngOnInit(): void {}

  showText() {
    this.content = this.texto;
  }

  addPost(form:NgForm) {
    console.log(form);
    this.posts.push(form.value); // Uso del componente Post
  }
}
