import { Sex } from '../enums/sex.enum';
import { StatusDelete } from '../enums/statusDelete.enum';

export class Patient {
  id?: any;
  firstname?: string;
  lastname?: string;
  dateOfBirth?: Date;
  sex?: Sex;
  phone?: string;
  status?: StatusDelete;
}
