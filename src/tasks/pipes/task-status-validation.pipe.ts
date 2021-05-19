// Custom Pipe implementation

import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';


export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    console.log('metadata', metadata);

    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(
        'It is an invalid status, only OPEN, IN_PROGRESS, DONE is allowed',
      );
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx != -1;
  }
}
