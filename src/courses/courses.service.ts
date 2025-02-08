import { Injectable } from '@nestjs/common';
import { Course } from './intities/couse.intity';

@Injectable() //provider
export class CourseService {
  private courses: Course = [];
}
