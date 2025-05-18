export const stripBeforeColon = (str: string | undefined): string => str?.split(':')[1] || str || ''
