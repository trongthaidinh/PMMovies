const HttpStatus = {
  200: "OK",
  201: "Created",
  204: "No Content",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  409: "Conflict",
  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable",
};

type Props = {
  data: any;
  code: keyof typeof HttpStatus;
  message: string;
};

export const responseJson = ({
  data,
  code = 200,
  message = HttpStatus[code],
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { APP_DOMAIN_FRONTEND, APP_DOMAIN_CDN_IMAGE, ...rest } = data;
  return {
    data: rest,
    code,
    message: message || HttpStatus[code],
  };
};

export interface IResponseJson<T> {
  data: T;
  code: keyof typeof HttpStatus;
  message: string;
}
