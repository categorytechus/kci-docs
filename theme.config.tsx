import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Kubera Capital Knowledge Base</span>,
  footer: {
    text: 'Kubera Capital',
    
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s',
    };
  },
}

export default config
