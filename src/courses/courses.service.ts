import { Injectable } from '@nestjs/common';

@Injectable() //provider
export class CourseService {
  private courses = [];
}
