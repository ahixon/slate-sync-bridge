// use our types since they're more up to date

export type DocumentJSON = {
  object: 'document',

  key?: string;
  data?: object;
  nodes?: NodeJSON[];
}

export type BlockJSON = {
  object: 'block',

  data?: object;
  key?: string;
  nodes?: NodeJSON[];
  type: string,
}

export type InlineJSON = {
  object: 'inline',

  data?: object;
  key?: string;
  nodes?: NodeJSON[];
  type: string,
}

// interesting that you can't assign data to text
export type TextJSON = {
  object: 'text',

  text?: string;
  marks?: MarkJSON[];
  key?: string;
}

export type MarkJSON = {
  object: 'mark';
  
  type: string;
  data?: object;
}

export type NodeJSON = DocumentJSON | BlockJSON | InlineJSON | TextJSON;