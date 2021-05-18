// The request - Query parameters that is coming is defined here in a DTO
// DTO - Data Transfer Object - an object that defines how the data will be sent across the network.
// This gets passed to the controller, and then to service(provider) of the Tasks Module

import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';
export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
