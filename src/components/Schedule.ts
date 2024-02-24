import { ComponentSet, CustomElement } from '../type/type';
import { SuHTMLElement } from 'SuHTMLElement';

// export class Schedule  extends SuHTMLElement<any>{


export class Schedule  extends SuHTMLElement<any>{


  private shadowRoots: ShadowRoot;

  constructor() {
    super({mutationObserverInit: {childList: true, subtree: true}, resizeObserve: true});
    // super({onMutation: (mutations, observer) => this.onMutation(mutations, observer)});
    this.shadowRoots = this.attachShadow({mode: 'open'})
    const style = document.createElement('style');
    // style.innerText = `div{color:red}; display: block;`
    this.shadowRoots.appendChild(style);
    this.shadowRoots.innerHTML = `<div class="schedule"><div>vvvvvvvv</div>(<slot></slot>) [<slot name="header"></slot>] [<slot name="header-1"></slot>]</div>`;
    this.shadowRoots.querySelector('slot')?.addEventListener('slotchange', (e) => {
      // console.log('slotchange1', e.target, e.currentTarget);
      console.log('slotchange0', this.innerHTML );
    });
    // this.shadowRoots.querySelector('slot[name="header-1"]')?.addEventListener('slotchange', (e) => {
    //   // console.log('slotchange1', e.target, e.currentTarget);
    //   console.log('slotchange1', this.innerHTML );
    // });
    // this.shadowRoots.addEventListener('slotchange', (e) => {
    //   console.log('slotchange', e.target, e.composedPath());
      // const s = e.target as HTMLSlotElement
      // for (const element of s.assignedElements()) {
      //   console.log('assss', element.getAttribute('name'))
      //   element.setAttribute('slosst', 'header');
      //   // element.innerHTML = 'xxxxx22';
      // }
      // console.log('slotchange2', s.assignedElements(), s.assignedNodes());
    // })
    // const div = document.createElement('span');
    // div.innerText = 'x222222xxx';
    // this.shadowRoots.appendChild(div);
    // this.appendChild(div);





//     const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// // Results below assume UTC timezone - your results may vary
//
// // Specify default date formatting for language (locale)
//     console.log(new Intl.DateTimeFormat('en-US').format(date));
// // Expected output: "12/20/2020"
//
// // Specify default date formatting for language with a fallback language (in this case Indonesian)
//     console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// // Expected output: "20/12/2020"
//
// // Specify date and time format using "style" options (i.e. full, long, medium, short)
//     console.log(
//       new Intl.DateTimeFormat('en-GB', {
//         dateStyle: 'full',
//         timeStyle: 'long',
//         timeZone: 'Australia/Sydney',
//       }).format(date),
//     );
  }

  // onMutation(mutations: MutationRecord[], observer: MutationObserver) {
  //   console.log('----222222222---', mutations, observer)
  // }
// DOM에 추가되었다. 렌더링 등의 처리.
  connectedCallback() {
    super.connectedCallback();
    // console.log('------22')
    // this.innerHTML=''
    // const div = document.createElement('div');
    // div.innerText = 'xx222xxxxxxx';
    // this.appendChild(div);
  }

  // DOM에서 제거되었다. 엘리먼트를 정리하.
  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('-->', 'disconnectedCallback');
  }
  // 사용자 정의 요소가 새 문서로 이동될 때 호출됩니다.
  adoptedCallback() {
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["class", "min-hour", "max-hour", "type"];
  }
  // 속성이 추가/제거/변경되었다.
  // class에서의 this는 Custom Elements의 인스턴스를 가르키고 있습니다.
  attributeChangedCallback(attrName:string, oldVal: string, newVal: string) {
    console.log('-->', 'attributeChangedCallback', attrName, oldVal, newVal, this.innerHTML);
  }


  onResize(entries: ResizeObserverEntry[], observer: ResizeObserver) {
    console.log('---resize', entries, observer)
  }

  onMutation(mutations: MutationRecord[], observer: MutationObserver) {
    // const template = window.document.createElement('template')
    // template.innerHTML = this.innerHTML;
    // this.shadowRoots.innerHTML = this.innerHTML
    // console.log('-------;', Array.from(this.children), Array.from(this.shadowRoots.children));
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        // 컴포넌트가 DOM에 연결되면 innerHTML을 가져옵니다.
        if (this.isConnected) {
          console.log(this.innerHTML);
          this.render()
          break;
        }
      }
    }
  }

  render() {

    // const h1 = this.querySelector('slot[name="header-1"]');
    // if (!h1) {
    //   const d = window.document.createElement('div');
    //   d.innerHTML='h11'
    //   d.setAttribute('slot', 'header-1');
    //   this.appendChild(d)
    // }
    // this.innerHTML = '';
    //
    // console.log(Array.from(this.children), Array.from(this.shadowRoots.children));
    // setInterval(() =>{
    //   // console.log(Array.from(this.children));
    // console.log(Array.from(this.children), Array.from(this.shadowRoots.children));
    // },1000)
    // this.render2()
  }


  render2() {
    // const div = document.createElement('div');
    // div.innerText = 'xxxxxxxxx';
    // this.appendChild(div);
    // const children = Array.from(this.children)
    // console.log('redner', children)
    // this.style.display = 'block';
    // const sw = this.attachShadow({mode: 'open'})
    // const style = document.createElement('style');
    // style.innerText = `div{color:red}; display: block;`
    // sw.appendChild(style);
    // this.clear();
    // const table = document.createElement('table');
    // this.data?.forEach(it => {
    //   const tr = document.createElement('tr');
    //   const tdId = document.createElement('td');
    //   const tdPrice = document.createElement('td');
    //   const tdTitle = document.createElement('td');
    //   tdId.innerText = String(it.id);
    //   tdPrice.innerText = String(it.price);
    //   tdTitle.innerText = String(it.title);
    //   tr.appendChild(tdId);
    //   tr.appendChild(tdPrice);
    //   tr.appendChild(tdTitle);
    //   table.appendChild(tr);
    // });
    // this.appendChild(table);
    // sw.innerHTML = `<div class="schedule"><div>vvvvvvvv</div> [<slot name="header"></slot>]</div>`;
    // this.clear();
    // const div = document.createElement('div');
    // div.innerText = 'xxxxxxxxx';
    // this.shadowRoots.appendChild(div);
    // sw.appendChild(div);
    // this.appendChild(div);
  }
}

export const ScheduleComponent: ComponentSet = {type: Schedule, name: 'su-schedule'};
