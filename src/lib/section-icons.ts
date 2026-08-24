// Иконки разделов: тонкая линия, 24×24, stroke = currentColor (цвет задаётся в CSS).
// Векторные, а не картинки: масштабируются, весят байты и красятся под тему.
export const ICONS: Record<string, string> = {
  // Эмоции и страхи: облако с луной — ночные страхи, тревога, «погода» внутри ребёнка
  emotions: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6.6 17.5h9.2a3.2 3.2 0 0 0 .3-6.4 4.6 4.6 0 0 0-8.6-1.6 3.6 3.6 0 0 0-.9 8z"/>
    <path d="M17.4 4.2a2.6 2.6 0 1 0 2.4 3.9"/>
    <path d="M9.4 20.4l.6-1.2M13 20.8l.7-1.4M16.4 20.4l.6-1.2"/>
  </svg>`,

  // Школа: рюкзак — «я не хочу в школу», сборы, домашка
  school: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 10.5A4.5 4.5 0 0 1 9.5 6h5A4.5 4.5 0 0 1 19 10.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19z"/>
    <path d="M9 6V5a3 3 0 0 1 6 0v1"/>
    <path d="M9 20.5v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"/>
    <path d="M9.5 12.5h5"/>
  </svg>`,

  // Отношения: две фигуры разного роста — брат и сестра, старший и младший
  relations: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="8.4" cy="7.2" r="2.6"/>
    <path d="M4.4 20v-3.4a4 4 0 0 1 8 0V20"/>
    <circle cx="16.6" cy="10.4" r="2"/>
    <path d="M13.6 20v-2.4a3 3 0 0 1 6 0V20"/>
  </svg>`,

  // Поведение и самостоятельность: росток — про рост, а не про запреты
  behaviour: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 21v-8.2"/>
    <path d="M12 12.8C12 9.9 9.7 7.6 6.8 7.6c0 2.9 2.3 5.2 5.2 5.2z"/>
    <path d="M12 12.8c0-3.2 2.6-5.8 5.8-5.8 0 3.2-2.6 5.8-5.8 5.8z"/>
    <path d="M8 21h8"/>
  </svg>`,
};
