import global from './../../markdowns/global/*.md'


function transform(content) {
  let result = content
    .map(({ metadata }) => ({ ...metadata }))
  return result
}

export const layout = transform(global)
