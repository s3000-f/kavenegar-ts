import { InitOptions } from './types';
import { KAVENEGAR_HOST, KAVENEGAR_VERSION } from './constants';
import axios, { AxiosError } from 'axios';
import { ConfigResponseDto, CountResponseDto, InfoResponseDto, ResponseDto, SendResponseDto } from './dto';
export class Kavenegar {
  private options: InitOptions;
  constructor(apiKey: string) {
    this.options = {
      apiKey: apiKey,
      host: KAVENEGAR_HOST,
      version: KAVENEGAR_VERSION,
    }
  }
  private async request(action: string, method: string, params?: Record<string, string>): Promise<ResponseDto> {
    const path = '/' + this.options.version + '/' + this.options.apiKey + '/' + action + '/' + method + '.json';
    const data = params ? new URLSearchParams(params).toString() : '';
    const url = `https://${this.options.host}${path}?${data}`
    try {
      const req = await axios.post(url,undefined)
      if (req.status === 200) {
        return req.data;
      } else {
        throw new Error(req.data);
      }
    } catch (error) {
      console.error(error.response.data);
      if (error instanceof AxiosError) {
        throw error.response.data;
      } else {
        throw error;
      }

    }
  }

  async Send(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "send", data)) as SendResponseDto;
  };

  async SendArray(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "sendarray", data)) as SendResponseDto;
  };

  async Status(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "status", data)) as SendResponseDto;
  };

  async StatusLocalMessageid(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "statuslocalmessageid", data)) as SendResponseDto;
  };

  async Select(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "select", data)) as SendResponseDto;
  };

  async SelectOutbox(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "selectoutbox", data)) as SendResponseDto;
  };

  async LatestOutbox(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "latestoutbox", data)) as SendResponseDto;
  };

  async CountOutbox(data?: Record<string, string>): Promise<CountResponseDto> {
    return (await this.request("sms", "countoutbox", data)) as CountResponseDto;
  };

  async Cancel(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "cancel", data)) as SendResponseDto;
  };

  async Receive(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "receive", data)) as SendResponseDto;
  };

  async CountInbox(data?: Record<string, string>): Promise<CountResponseDto> {
    return (await this.request("sms", "countinbox", data)) as CountResponseDto;
  };

  async CountPostalCode(data?: Record<string, string>): Promise<CountResponseDto> {
    return (await this.request("sms", "countpostalcode", data)) as CountResponseDto;
  };

  async SendByPostalCode(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("sms", "sendbypostalcode", data)) as SendResponseDto;
  };

  async VerifyLookup(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("verify", "lookup", data)) as SendResponseDto;
  };

  async AccountInfo(data?: Record<string, string>): Promise<InfoResponseDto> {
    return (await this.request("account", "info", data)) as InfoResponseDto;
  };

  async AccountConfig(data?: Record<string, string>): Promise<ConfigResponseDto> {
    return (await this.request("account", "config", data)) as ConfigResponseDto;
  };

  async CallMakeTTS(data?: Record<string, string>): Promise<SendResponseDto> {
    return (await this.request("call", "maketts", data)) as SendResponseDto;
  };
}

