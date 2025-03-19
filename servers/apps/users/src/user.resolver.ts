import { BadRequestException, UseFilters } from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { RegisterDto } from "./dto/user.dto";
import { User } from "./entities/user.entity";

@Resolver('user')
// @UseFilters()
export class UserResolver {
    constructor(
        private readonly userService: UsersService
    ) { }

    @Mutation(() => RegisterRepose)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
    ): Promise<RegisterRepose> {
        if (!registerDto.name || !registerDto.email || !registerDto.password) {
            throw new BadRequestException('Please fill the all fields');
        }

        const user = await this.userService.register(registerDto)

        return { user };
    }

    @Query(() => [User])
    async getUsers() {
        return this.userService.getUsers()
    }
}