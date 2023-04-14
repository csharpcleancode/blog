import { Controller } from '@nestjs/common';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    
    create() {
        
    }

    fineOne() {
        
    }

    findAll() { }
    
    deleteOne() {
        
    }

    updateOne() { }
}
