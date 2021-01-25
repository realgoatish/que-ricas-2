import _ from 'lodash'
import all from '../markdowns/global/*.md'
import about from '../markdowns/about/*.md'
import home from '../markdowns/home/*.md'
import menu from '../markdowns/home/*.md'

// const [homeMarkdownObj] = home
// const [aboutMarkdownObj] = about
// const [menuMarkdownObj] = menu



// const getAllPages = {...home, ...menu, ...about}

// console.log(homeObj)

export const layout = _.chain(all)
  .map(transformLayout)
  .value()


// console.log(layout)

function transformLayout({filename, metadata, html}) {

  // only return frontmatter values for global layout markdown file since we don't need permalinks, filename, html, or path
  return {...metadata}

}

// function transformLayoutMarkdown({filename, metadata, html}) {
//   const permalink = filename.replace(/.md$/, '')

//   // return {...metadata, filename, permalink, html}
//   return {...metadata}

// }