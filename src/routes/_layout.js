import global from './../../markdowns/global/*.md'


function transform(content) {
  let result = content
    .map(({ metadata }) => {
      metadata.logo.image = metadata.logo.image.replace('.', 'https://www.que-ricas.com')
      metadata.socialIcons.email.image = metadata.socialIcons.email.image.replace('.', 'https://www.que-ricas.com')
      metadata.socialIcons.facebook.image = metadata.socialIcons.facebook.image.replace('.', 'https://www.que-ricas.com')
      metadata.socialIcons.instagram.image = metadata.socialIcons.instagram.image.replace('.', 'https://www.que-ricas.com')
      metadata.socialIcons.map.image = metadata.socialIcons.map.image.replace('.', 'https://www.que-ricas.com')
      metadata.socialIcons.phone.image = metadata.socialIcons.phone.image.replace('.', 'https://www.que-ricas.com')
      return ({ ...metadata })
    })
  return result
}

export const layout = transform(global)
