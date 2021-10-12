import { User } from "./userModel";

export class response {
  total_count?: Number;
  incomplete_results?: Boolean;
  items?: User[]
}