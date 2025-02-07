import { Controller, Get, Param, Body, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get() // rota alinhada com o paramentro list
  // metodo findAll
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  create(@Body('name') body) {
    return body;
  }
}
