import { User } from '../../domain/entites/user.entity';
import { UserOrmEntity} from '../entites/user-orm.entity'

export class UserMapper {
    static toDomain(userOrm: UserOrmEntity): User {
        return new User (
            userOrm.id,
            userOrm.name,
            userOrm.email,
            userOrm.password,
            userOrm.createdAt,
            userOrm.updatedAt,
        );
    }

    static toOrm(user: User): UserOrmEntity{
        const orm = new UserOrmEntity()

        orm.id = user.id;
        orm.name = user.name;
        orm.email = user.email;
        orm.password = user.password;
        orm.createdAt = user.createdAt;
        orm.updatedAt = user.updatedAt;

        return orm;

    }
}