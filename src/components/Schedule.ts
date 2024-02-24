import { ComponentSet, CustomElement } from '../type/type';
import { SuHTMLElement } from 'SuHTMLElement';

export class Schedule  extends SuHTMLElement<any>{


  constructor() {
    super();
  }

// DOM에 추가되었다. 렌더링 등의 처리.
  connectedCallback() {
    console.log('------22')
    this.render();
  }

  // DOM에서 제거되었다. 엘리먼트를 정리하.
  disconnectedCallback() {
    console.log('-->', 'disconnectedCallback');
  }
  // 사용자 정의 요소가 새 문서로 이동될 때 호출됩니다.
  adoptedCallback() {
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["class"];
  }
  // 속성이 추가/제거/변경되었다.
  // class에서의 this는 Custom Elements의 인스턴스를 가르키고 있습니다.
  attributeChangedCallback(attrName:string, oldVal: string, newVal: string) {
    console.log('-->', 'attributeChangedCallback', attrName, oldVal, newVal);
  }



  render() {
    console.log('redner')
    // const sw = this.attachShadow({mode: 'open'})
    // const style = document.createElement('style');
    // style.innerText = `div{color:red}`
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
    const div = document.createElement('div');
    div.innerText = 'xxxxxxxxx';
    // sw.appendChild(div);
    this.appendChild(div);
  }
}

export const ScheduleComponent: ComponentSet = {type: Schedule, name: 'su-schedule'};