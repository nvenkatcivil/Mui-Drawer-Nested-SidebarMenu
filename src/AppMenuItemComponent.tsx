import React, { forwardRef } from 'react'
import ListItem from '@mui/material/ListItem'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { AnyAaaaRecord } from 'dns'

export interface AppMenuItemComponentProps {
  className?: string
  link?: string | null // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  handleClose:any,
  children:any
}

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = props => {
  const { className, onClick, link, children,handleClose } = props
console.log(className,";;;;")
  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => <NavLink  {...props} ref={ref} />)}
      to={link}
      onClick={handleClose}
    />
  )
}

export default AppMenuItemComponent
