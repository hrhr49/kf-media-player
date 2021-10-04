const substringFilter = (pattern: string, target: string): number[] | null => {
  const index = target.indexOf(pattern);
  if(index >= 0) {
    return Array(pattern.length).fill(0).map((_, i) => i + index);
  } else {
    return null
  }
};

const regexFilter = (pattern: string, target: string): number[] | null => {
  try {
    const result = target.match(pattern);
    if(result) {
      const foundedStr = result[0];
      const index = result.index;
      if (index === undefined) {
        return null;
      }
      return Array(foundedStr.length).fill(0).map((_, i) => i + index);
    } else {
      return null
    }
  } catch(err) {
    // regex syntax error
    return null;
  }
};

const fuzzyFilter = (pattern: string, target: string): number[] | null => {
  const indexes = [];
  let index = 0;
  for (const c of pattern) {
    index = target.indexOf(c, index);
    if (index < 0) return null;
    indexes.push(index);
    index++;
  }
  return indexes;
};

type FilterKind = 'fuzzyFilter' | 'substringFilter' | 'regexFilter'
type Filter = (pattern: string, target: string) => number[] | null;

export {
  substringFilter,
  regexFilter,
  fuzzyFilter,
};

export type {
  FilterKind,
  Filter,
}
