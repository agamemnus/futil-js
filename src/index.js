import _ from 'lodash/fp'

export * from './conversion'
export * from './function'
export * from './array'
export * from './object'

// Math
// ----
export const greaterThanOne = _.lt(1)

// String
// ------
export const wrap = (pre, post, content) => (pre || '') + content + (post || pre || '')
export const quote = _.partial(wrap, ['"', '"'])
export const parens = _.partial(wrap, ['(', ')'])

// Collection
// ----------
export const flowMap = (...fns) => _.map(_.flow(...fns))

// Algebras
// --------
// Folding recursive algebraic data types
export const fold = _.curry((fn, obj, map = _.mapValues, is = _.isPlainObject) =>
    map(e => is(e) ? fold(fn, fn(e), map, is) : e, obj))

// Misc
// ----
export const testRegex = regex => regex.test.bind(regex)
