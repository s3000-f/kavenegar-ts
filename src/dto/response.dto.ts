import { SendResponseDto } from './send-response.dto.js';
import { InfoResponseDto } from './info-response.dto.js';
import { CountResponseDto } from './count-response.dto.js';
import { ConfigResponseDto } from './config-response.dto.js';

export type ResponseDto = SendResponseDto | InfoResponseDto | CountResponseDto | ConfigResponseDto;
