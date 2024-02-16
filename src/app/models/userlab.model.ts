import { RoleUser } from '../enums/roleUser.enum';
import { StatusUser } from '../enums/statusUser.enum';

export class Userlab {
  id?: any;
  name?: string;
  information?: string;
  userRole?: RoleUser;
  status?: StatusUser;
}
