import { formatBytes } from '~/plugins/shorthands.js'

export const fileIsValid = (file, validationOptions) => {
  const { maxSize, alertOnInvalid } = validationOptions
  if (maxSize !== null && maxSize !== undefined && file.size > maxSize) {
    if (alertOnInvalid) {
      alert(`File ${file.name} is too big! Must be less than ${formatBytes(maxSize)}`)
    }
    return false
  }

  return true
}

export const acceptFileFromProjectType = (projectType) => {
  switch (projectType) {
    case 'prototype':
      return '.zip,application/zip'
    case 'map':
      return '.zip,application/zip'
    case 'bundle':
      return '.zip,application/zip'
    default:
      return '*'
  }
}
