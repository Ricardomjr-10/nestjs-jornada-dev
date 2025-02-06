import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get() // decorator do controller
  // metodo findAll
  findAll() {
    return 'Listagem de cursos';
  }
}
