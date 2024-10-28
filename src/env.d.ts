interface Window {
  PollWidget: {
    init: () => void;
    version: string;
  };
}

declare const process: {
  env: {
    NODE_ENV: string;
  };
};