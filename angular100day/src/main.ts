import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { from, fromEvent, fromEventPattern, interval, Observable, of, throwError, timer } from 'rxjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


///////;RxJs


//   const observable = new Observable(function subscribe(observer) {
//     const id = setInterval(() => {
//       observer.next('Hello Rxjs');
     
//     }, 1000);
//     return function unsubscribe() {
//       observer.complete();
//       clearInterval(id);
//     }
//   });

//  const scripstion= observable.subscribe({
//     next: (value) => {
//       console.log(value);
//     },
//     error: (error) => {
//       console.log(error);
//     },
//     complete: () => {
//       console.log('Done');
//     }
//   });

//   setTimeout(() =>{
//     scripstion.unsubscribe();
//   },10000)

  /////creation operation

  const observer = {
    next: (val:any) => console.log(val),
    error: (err:any) => console.log(err),
    complete: () => console.log('complete'),
  };

//// of là operator dùng để tạo 1 Observable từ bất cứ giá trị gì: primitives, Array, Object, Function v.v... of() sẽ nhận vào các giá trị và sẽ complete ngay sau khi tất cả các giá trị truyền vào được emit.
of("Hello An").subscribe(observer)
of(true).subscribe(observer)
of([1,2,3,4,],"An",true,{name:'danh an'}).subscribe(observer)
of(Promise.resolve("hello An aaaa")).subscribe(observer)


///from() cũng gần giống với of(), cũng được sử dụng để tạo Observable từ 1 giá trị. Tuy nhiên, điểm khác biệt đối với of() là from() chỉ nhận vào giá trị là một Iterable hoặc là một Promise.
from(Promise.resolve("hello An aaaa")).subscribe(observer);
from([1, 2, 3]).subscribe(observer);
from('Ominext').subscribe(observer);


///fromEvent() được dùng để chuyển đổi 1 sự kiện (Event) sang Observable. Ví dụ chúng ta có DOM Event như mouse click hoặc input.form Event
fromEvent(document, 'click').subscribe(observer);
///fromEventPattern() là 1 dạng nâng cao của fromEvent(). Nói về concept thì fromEventPattern() cũng giống với fromEvent() là tạo Observable từ sự kiện. Tuy nhiên, fromEventPattern() rất khác với fromEvent() về cách dùng, cũng như loại sự kiện để xử lý. Để hiểu rõ hơn, chúng ta cùng tham khảo ví dụ sau:
// fromEvent() từ ví dụ trên
// output: MouseEvent {...}
fromEvent(document, 'click').subscribe(observer);


// fromEventPattern
// output: MouseEvent {...}
fromEventPattern(
  (handler) => {
    document.addEventListener('click', handler);
  },
  (handler) => {
    document.removeEventListener('click', handler);
  }
).subscribe(observer);


////interval() là hàm để tạo Observable mà sẽ emit giá trị số nguyên từ số 0 theo 1 chu kỳ nhất định. Hàm này giống với setInterval.
interval(1000) // emit giá trị sau mỗi giây
  .subscribe(observer);

///Timer
timer(1000).subscribe(observer);
// output: sau 1 giây -> 0, 1, 2, 3, 4, 5 ...
timer(1000, 1000).subscribe(observer);//chu kì 1s

//throwError() sẽ dùng để tạo Observable mà thay vì emit giá trị, Observable này sẽ throw 1 error ngay lập tức sau khi subscribe.
throwError('an error').subscribe(observer);