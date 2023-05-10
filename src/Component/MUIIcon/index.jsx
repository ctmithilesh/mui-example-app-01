import { Icon } from '@material-ui/core'
import { AddCircleOutline, AddIcCall, AddShoppingCartSharp, Delete, Edit, Email, HourglassEmpty, Lock, Notifications, Person, Search } from '@material-ui/icons'
import React from 'react'

export default function MUIIcon() {
  return (
    <>
      <Icon>
          <HourglassEmpty />
          <AddCircleOutline />
          <AddIcCall />
          <AddShoppingCartSharp />
          <Edit />
          <Delete />
          <Search />
          <Person />
          <Notifications />
          <Email />
          <Lock />
      </Icon>
    </>
  )
}
