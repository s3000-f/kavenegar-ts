import { Return } from './return.dto.js';
import { InfoEntry } from './info-entry.dto.js';

export interface InfoResponseDto {
  return: Return,
  entries: InfoEntry,
}
