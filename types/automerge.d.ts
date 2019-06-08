export namespace Backend {
  function applyChanges(state: any, changes: any): any;
  function applyLocalChange(state: any, change: any): any;
  function getChanges(oldState: any, newState: any): any;
  function getChangesForActor(state: any, actorId: any): any;
  function getMissingChanges(state: any, clock: any): any;
  function getMissingDeps(state: any): any;
  function getPatch(state: any): any;
  function init(): any;
  function merge(local: any, remote: any): any;
}
export class Connection {
  constructor(docSet: any, sendMsg: any);
  close(): void;
  docChanged(docId: any, doc: any): void;
  maybeSendChanges(docId: any): void;
  open(): void;
  receiveMsg(msg: any): any;
  sendMsg(docId: any, clock: any, changes: any): void;
}
export class Counter {
  constructor(value: any);
  value: any;
  toJSON(): any;
  valueOf(): any;
}
export class DocSet {
  docs: any;
  handlers: any;
  applyChanges(docId: any, changes: any): any;
  getDoc(docId: any): any;
  registerHandler(handler: any): void;
  setDoc(docId: any, doc: any): void;
  unregisterHandler(handler: any): void;
}
export namespace Frontend {
  class Counter {
    constructor(value: any);
    value: any;
    toJSON(): any;
    valueOf(): any;
  }
  class Table {
    constructor(columns: any);
    columns: any;
    entries: any;
    byId(id: any): any;
    filter(callback: any, thisArg: any): any;
    find(callback: any, thisArg: any): any;
    getWriteable(context: any): any;
    map(callback: any, thisArg: any): any;
    remove(id: any): void;
    set(id: any, value: any): void;
    sort(arg: any): any;
    toJSON(): any;
  }
  class Text {
    constructor(objectId: any, elems: any, maxElem: any);
    concat(...args: any[]): any;
    every(...args: any[]): any;
    filter(...args: any[]): any;
    find(...args: any[]): any;
    findIndex(...args: any[]): any;
    forEach(...args: any[]): any;
    get(index: any): any;
    getElemId(index: any): any;
    includes(...args: any[]): any;
    indexOf(...args: any[]): any;
    join(...args: any[]): any;
    lastIndexOf(...args: any[]): any;
    map(...args: any[]): any;
    reduce(...args: any[]): any;
    reduceRight(...args: any[]): any;
    slice(...args: any[]): any;
    some(...args: any[]): any;
    toJSON(): any;
    toLocaleString(...args: any[]): any;
  }
  function applyPatch(doc: any, patch: any): any;
  function canRedo(doc: any): any;
  function canUndo(doc: any): any;
  function change(doc: any, message: any, callback: any): any;
  function emptyChange(doc: any, message: any): any;
  function getActorId(doc: any): any;
  function getBackendState(doc: any): any;
  function getConflicts(object: any, key: any): any;
  function getElementIds(list: any): any;
  function getObjectById(doc: any, objectId: any): any;
  function getObjectId(object: any): any;
  function init(options: any): any;
  function redo(doc: any, message: any): any;
  function setActorId(doc: any, actorId: any): any;
  function undo(doc: any, message: any): any;
}
export class Table {
  constructor(columns: any);
  columns: any;
  entries: any;
  byId(id: any): any;
  filter(callback: any, thisArg: any): any;
  find(callback: any, thisArg: any): any;
  getWriteable(context: any): any;
  map(callback: any, thisArg: any): any;
  remove(id: any): void;
  set(id: any, value: any): void;
  sort(arg: any): any;
  toJSON(): any;
}
export class Text {
  constructor(objectId: any, elems: any, maxElem: any);
  concat(...args: any[]): any;
  every(...args: any[]): any;
  filter(...args: any[]): any;
  find(...args: any[]): any;
  findIndex(...args: any[]): any;
  forEach(...args: any[]): any;
  get(index: any): any;
  getElemId(index: any): any;
  includes(...args: any[]): any;
  indexOf(...args: any[]): any;
  join(...args: any[]): any;
  lastIndexOf(...args: any[]): any;
  map(...args: any[]): any;
  reduce(...args: any[]): any;
  reduceRight(...args: any[]): any;
  slice(...args: any[]): any;
  some(...args: any[]): any;
  toJSON(): any;
  toLocaleString(...args: any[]): any;
}
export class WatchableDoc {
  constructor(doc: any);
  doc: any;
  handlers: any;
  applyChanges(changes: any): any;
  get(): any;
  registerHandler(handler: any): void;
  set(doc: any): void;
  unregisterHandler(handler: any): void;
}
export function applyChanges(doc: any, changes: any): any;
export function canRedo(doc: any): any;
export function canUndo(doc: any): any;
export function change(doc: any, message: any, callback: any): any;
export function diff(oldDoc: any, newDoc: any): any;
export function emptyChange(doc: any, message: any): any;
export function equals(val1: any, val2: any): any;
export function getActorId(doc: any): any;
export function getChanges(oldDoc: any, newDoc: any): any;
export function getConflicts(object: any, key: any): any;
export function getHistory(doc: any): any;
export function getMissingDeps(doc: any): any;
export function getObjectById(doc: any, objectId: any): any;
export function getObjectId(object: any): any;
export function init(actorId: any): any;
export function load(string: any, actorId: any): any;
export function merge(localDoc: any, remoteDoc: any): any;
export function redo(doc: any, message: any): any;
export function save(doc: any): any;
export function setActorId(doc: any, actorId: any): any;
export function undo(doc: any, message: any): any;
export function uuid(): any;
export namespace uuid {
  function reset(): any;
  function setFactory(newFactory: any): any;
}
