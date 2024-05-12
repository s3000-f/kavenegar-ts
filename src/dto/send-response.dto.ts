import { Return } from './return.dto.js';
import { Entry } from './entry.dto.js';

export interface SendResponseDto {
  return: Return
  entries: Entry[]
}
