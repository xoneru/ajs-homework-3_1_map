const map = new Map([
    [400, 'Bad Request — сервер обнаружил в запросе клиента синтаксическую ошибку.'],
    [401, 'Unauthorized — для доступа к запрашиваемому ресурсу требуется аутентификация.'],
    [403, 'Forbidden — сервер понял запрос, но он отказывается его выполнять из-за ограничений в доступе для клиента к указанному ресурсу.'],
    [404, 'Not Found — Сервер понял запрос, но не нашёл соответствующего ресурса по указанному URL'],
    [408, 'Request Timeout — время ожидания сервером передачи от клиента истекло. Клиент может повторить аналогичный предыдущему запрос в любое время.'],
  ]);
  
  export default class ErrorRepository {
    constructor() {
      this.map = map;
    }
  
    translate(code) {
      if (this.map.has(code)) {
        return this.map.get(code);
      }
      return 'Unknown error';
    }
  }