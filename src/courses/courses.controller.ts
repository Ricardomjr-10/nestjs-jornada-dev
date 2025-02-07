import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get() // rota alinhada com o paramentro list
  // metodo findAll
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Curso #${params.id}`;
  }
}
