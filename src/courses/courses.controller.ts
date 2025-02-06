import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoursesController {
  @Get('courses') // rota alinhada com o paramentro list
  // metodo findAll
  findAll() {
    return 'Listagem de cursos';
  }
}
