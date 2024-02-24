import { ComponentSet, ConstructorType } from './type/type';

export class SimpleUI {
  private components = new Map<string, ComponentSet>();
  constructor(private window: Window = window) {
  }
  // Custom Elements의 Tag 이름을 작성할 때는 예약어 및 업데이트 예정인 요소와 이름 충돌을 막기 위해서 케밥 표기법(-)을 사용해야 합니다.
  setComponent(option: ComponentSet) {
    this.components.set((option.name??option.type.name).toLowerCase(), option);
    return this;
  }
  run() {
    this.components?.forEach((it, key) => {
      this.window.customElements.define(key, it.type, it?.defineOption);
    });
  }
}