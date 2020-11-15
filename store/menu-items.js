import menuItems from '@/data/menu-items.json'

export const state = () => ({
  header: menuItems,
  footer: menuItems.filter((item) => item.footer),
})
