import socials from '@/data/socials.json'

export const state = () => ({
  active: socials.filter((social) => social.active),
})
