import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: '/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnets Explorer',
      href: 'https://cosmosrun.info',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnets Explorer',
      href: 'https://testnets.cosmosrun.info',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Synergy Nodes',
    href: 'https://www.synergynodes.com',
    icon: 'LifeBuoyIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/SynergyNodes',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/SynergyNodes',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
