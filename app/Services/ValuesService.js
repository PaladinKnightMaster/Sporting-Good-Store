import { ProxyState } from "../AppState.js";
import { Value } from "../Models/Value.js";

class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const valuesService = new ValuesService();

