import { getAll, getOne } from '@/utils/selector'

export const variants = getAll('.variant')
export const copyButton = getOne('#password-copy')
export const valueLength = getOne('#password-length')
export const passwordOutput = getOne('#password-output')
export const generateButton = getOne('#password-generate')
export const toastContainer = getOne('#toast-container')
export const toastCopy = getOne('#toast-copy')
