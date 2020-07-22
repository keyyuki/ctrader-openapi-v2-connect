import { timer } from 'rxjs';

export class Command {
  id: string;
  resolve?: Function;
  reject?: Function;
  promise: Promise<any>;
  message: any;
  status: 'sent' | 'new' | 'timeout';

  constructor(id: string, message: any) {
    this.id = id;
    this.message = message;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    this.status = 'new';
  }

  markAsSent = (): Command => {
    this.status = 'sent';
    // set timeout
    timer(15 * 1000).subscribe(() => {
      this.status = 'timeout';
      this.fail('time out');
    });
    return this;
  };

  done = (message?: any): void => {
    if (this.resolve) {
      this.resolve(message);
      this.destroy();
    }
  };
  fail = (message?: any): void => {
    if (this.reject) {
      this.reject(message);
      this.destroy();
    }
  };
  destroy = (): void => {
    delete this.resolve;
    delete this.reject;
    delete this.promise;
  };
}
