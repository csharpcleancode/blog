import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { UserEntity } from 'src/user/models/user.entity';
import { IUser } from 'src/user/models/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: IUser): Observable<IUser> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable<IUser> {
    return from(this.userRepository.find());
  }

  deleteOne(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }

  updateOne(id: number, user: IUser): Observable<any> {
    return from(this.userRepository.update(id, user));
  }
}
