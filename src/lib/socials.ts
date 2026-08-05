export interface Social {
  cls: 'tg' | 'max' | 'dzen' | 'pin';
  name: string;
  href: string;
  handle: string;
}

export const SOCIALS: Social[] = [
  { cls: 'tg', name: 'Telegram', href: 'https://t.me/help_kids_mama', handle: 'ежедневные приёмы' },
  { cls: 'max', name: 'MAX', href: 'https://max.ru/channel_help_kids_mama', handle: 'истории и тепло' },
  { cls: 'dzen', name: 'Дзен', href: 'https://dzen.ru/mamahelp', handle: 'большие разборы' },
  { cls: 'pin', name: 'Pinterest', href: 'https://pinterest.com/MaminHelp/', handle: 'чек-листы и карточки' },
];

export const ICONS: Record<string, string> = {
  tg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.9 4.3 2.95 11.63c-1.06.42-1.05 1.9.02 2.22l4.7 1.4 1.8 5.55c.28.86 1.36 1.06 1.94.35l2.5-2.98 4.78 3.5c.72.53 1.75.14 1.94-.73L23.94 5.4c.22-1-.79-1.86-2.04-1.1zM9.9 14.3l8.2-5.02c.16-.1.32.12.19.24l-6.72 6.1c-.24.22-.4.53-.44.86l-.2 1.85z"/></svg>',
  max: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill="currentColor" opacity=".16"/><path d="M6 17.5V6.5l6 6.6 6-6.6v11" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round" stroke-linecap="round"/></svg>',
  dzen: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5c.35 5.9 2.6 8.15 8.5 8.5-5.9.35-8.15 2.6-8.5 8.5-.35-5.9-2.6-8.15-8.5-8.5 5.9-.35 8.15-2.6 8.5-8.5z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.2C6.9 2.2 4.3 5.6 4.3 8.9c0 1.98.9 3.75 2.5 4.4.26.11.5 0 .57-.28l.23-.9c.08-.28.05-.38-.16-.63-.46-.55-.76-1.25-.76-2.25 0-2.9 2.17-5.5 5.65-5.5 3.08 0 4.77 1.88 4.77 4.4 0 3.3-1.46 6.08-3.63 6.08-1.2 0-2.1-1-1.8-2.22.34-1.45 1-3.02 1-4.07 0-.94-.5-1.72-1.55-1.72-1.23 0-2.22 1.27-2.22 2.98 0 1.08.37 1.82.37 1.82s-1.25 5.3-1.47 6.24c-.25 1.05-.04 2.36.02 2.62.03.13.15.16.23.06.1-.13 1.44-1.78 1.9-3.42l.72-2.8c.36.68 1.4 1.28 2.5 1.28 3.3 0 5.53-3 5.53-7.02C19.6 5.16 16.86 2.2 12 2.2z"/></svg>',
};
