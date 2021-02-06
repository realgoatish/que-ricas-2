import { writable } from 'svelte/store'
import { readable } from 'svelte/store'
import { layout } from './../routes/_layout'

// For keeping track of which menu section the user has selected to see
export const currentSection = writable(0)

const [obj] = layout 

export const layoutSEO = readable({
  logo: obj.logo,
  phoneNumber: obj.contactInfo.phoneNumber,
  streetAddress: obj.contactInfo.streetAddress,
  city: obj.contactInfo.city,
  state: obj.contactInfo.state,
  zip: obj.contactInfo.zip,
  email: obj.socialIcons.email.link.substr(8),
  googleMapsLink: obj.socialIcons.map.link,
  instagramLink: obj.socialIcons.instagram.link,
  facebookLink: obj.socialIcons.facebook.link,
  yelpLink: "https://www.yelp.com/biz/que-ricas-haddon-township"
})


