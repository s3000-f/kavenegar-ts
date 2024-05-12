import { Return } from './return.dto.js';
import { ConfigEntry } from './config-entry.dto.js';

export interface ConfigResponseDto {
  return: Return,
  entries: ConfigEntry,
}
