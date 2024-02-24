export type ConstructorType<T> = new (...args:any[]) => T;
export type ComponentSet = {type: ConstructorType<HTMLElement>, name?: string, defineOption?: ElementDefinitionOptions };

// @ts-ignore
export interface CustomElement<T extends HTMLElement> extends T {
  // DOM에 추가되었다. 렌더링 등의 처리.
  connectedCallback():  void;
  // DOM에서 제거되었다. 엘리먼트를 정리하.
  disconnectedCallback():  void;
  // 사용자 정의 요소가 새 문서로 이동될 때 호출됩니다.
  adoptedCallback():  void;
  // 속성이 추가/제거/변경되었다.
  // class에서의 this는 Custom Elements의 인스턴스를 가르키고 있습니다.
  attributeChangedCallback(attrName:string, oldVal: string, newVal: string):  void;

  // static get observedAttributes() {
  // 모니터링 할 속성 이름
  // return ["layout-container"];
  // }
}