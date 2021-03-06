import DefaultException from './DefaultException';

export default
class NotCryptocurrencyOnTimeInstanceException
extends DefaultException {
  constructor() {
    super();
    this.errorCode = 'NOT_CRYPTOCURRENCY_ON_TIME_INSTANCE';
    this.message = 'The parameter given is not a CRYPTOCURRENCY_ON_TIME.';
  }
}
