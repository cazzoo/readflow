/* eslint-disable react/jsx-no-target-blank */
import React, { FC } from 'react'

import styles from './HelpLink.module.css'
import { Icon } from '.'

interface Props {
  href: string
  title?: string
}

export const HelpLink: FC<Props> = ({ href, title, children }) => (
  <a className={styles.help} href={href} title={title} target="_blank" rel="noreferrer noopener">
    <Icon name="help" /> {children}
  </a>
)
