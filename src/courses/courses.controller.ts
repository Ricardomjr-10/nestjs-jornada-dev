import { Controller } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    // metodo findAll
    findAll() {
        return 'Listagem de cursos'
    }
}
