import { Injectable } from "@nestjs/common";
import { PasswordHasher } from "../../application/interfaces/passowrd-hasher.interface";
import * as bcrypt from 'bcrypt';


@Injectable()
export class BcryptPasswordHasher implements PasswordHasher {
    async hash(password:string): Promise <string> {
        return bcrypt.hash(password,10)
    }

    async compare(password:string, hashedPassword: string): Promise <boolean> {
        return bcrypt.compare(password,hashedPassword)
    }
}