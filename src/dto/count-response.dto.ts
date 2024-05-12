import { Return } from './return.dto.js';
import { CountEntry } from './count-entry.dto.js';

export interface CountResponseDto {
  return: Return
  entries: CountEntry[]
}
