// The request that is coming is defined here in a DTO
// DTO - Data Transfer Object - an object that defines how the data will be sent across the network.
// This gets passed to the controller, and then to service(provider) of the Tasks Module
// https://github.com/typestack/class-validator#validation-decorators
// https://github.com/yantrab/class-validator-rule

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    title: 'Task Title',
    description: 'The title of the task.',
    default: '',
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    title: 'Task Description',
    description: 'The description of the task.',
    default: '',
  })
  description: string;
}
